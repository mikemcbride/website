workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

# npm install
action "install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

# build it
action "build" {
  uses = "actions/npm@master"
  args = "run build"
  needs = ["install"]
}

# Deploy, and write deployment to file
action "deploy" {
  needs = "build"
  uses = "actions/zeit-now@master"
  args = "--no-clipboard deploy ./dist > $HOME/$GITHUB_ACTION.txt"
  secrets = ["ZEIT_TOKEN"]
}

# Filter for master branch
action "master-branch-filter" {
  needs = "deploy"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

# Requires now.json in repository
action "release" {
  needs = "master-branch-filter"
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "alias"
}
