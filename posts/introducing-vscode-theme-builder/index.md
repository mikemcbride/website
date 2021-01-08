---
title: Introducing VS Code Theme Builder
date: 2020-12-30T12:00:00Z
published: true
excerpt: I made a new library to make authoring VS Code Themes easier to manage. Check it out!
---

This is a post announcing a new package I've been working on intermittently throughout 2020 and I'm thrilled that it's finally ready for everyone to use. I have been using it locally in one of my own themes to work out the kinks. [Here's a link](https://www.npmjs.com/package/@two-beards/vscode-theme-builder), and you can read on to learn more about it.

### So what is it?

Fair question. Authoring a VS Code theme can be pretty tedious. The JSON theme file gets very large, and if you need to tweak a color or find all the places where a color is used, it can be *REALLY* difficult. I wanted to make it easier, and I thought that one thing that would help is if I could use variables in the JSON file. So since JSON doesn't support variables, I decided to implement it using a familiar handlebars syntax for replacing variables in strings. The idea is that you can stringify the JSON file, replace the variables with their values, then turn it back into JSON. It looks something like this when you write your theme:

```json
{
    "name": "{{ name }}",
    "type": "light",
    "colors": {
        "activityBar.background": "{{ colors.lightGray }}",
        "activityBar.border": "{{ colors.gray }}",
        "activityBar.activeBackground": "{{ colors.lightGray }}",
        "activityBar.activeBorder": "{{ colors.blue }}",
        "activityBar.foreground": "{{ colors.blue }}"
    }
}
```

Then you create a config file in your project that might look like this:

```js
module.exports = {
    name: 'Early Riser',
    inputFile: 'theme.json',
    outputFileName: 'early-riser-color-theme.json',
    outputDir: 'themes',
    colors: {
        blue: '#0261dc',
        lightGray: '#e7ebef',
        gray: '#f7fafc'
    }
}
```

Once you install the package in your project using Yarn or npm, you can create a build script that will take the input file (in our example, `theme.json`), parse it and replace the variables defined in our config, then output the new JSON file in the location specified in the config. In this example, it would create a new file (or overwite an existing one) at `./themes/early-riser-color-theme.json`.

I do it like this in my theme:

```json
{
    "scripts": {
        "build": "build-theme",
        "publish": "npm run build && vsce publish"
    }
}
```

The `build-theme` binary is available to us when we install the package. By default, it will look for a file called `theme.config.js` in the root of our project, but we can specify a different file if we choose.

If you think this might be helpful for you, check it out [on GitHub](https://github.com/two-beards/vscode-theme-builder). If you'd like to see an example of it out in the wild, my [Electron Highlighter theme](https://github.com/mikemcbride/vscode-electron-highlighter) uses this package.

Enjoy!
