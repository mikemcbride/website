---
title: Introducing VS Code Theme Builder
date: 2020-12-30T12:00:00Z
published: true
excerpt: I made a new library to make authoring VS Code Themes easier to manage. Check it out!
---

This is a post announcing a new package I've been working on intermittently throughout 2020 and I'm thrilled that it's finally ready for everyone to use. I have been using it locally in one of my own themes to work out the kinks. [Here's a link to the package](https://www.npmjs.com/package/@two-beards/vscode-theme-builder), and you can read on to learn more about it. The [GitHub repo](https://github.com/two-beards/vscode-theme-builder) has a more in-depth walkthrough on how to set it up in your project if you prefer that.

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

Then you create a config file (the library looks for `theme.config.js`) in your project that looks something like this:

```js
// theme.config.js

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

Once you install the dependency using Yarn or npm, the `build-theme` binary becomes available to us. By default, it will look for a file called `theme.config.js` in the root of our project, but we can specify a different file if we choose. We do that by passing a second parameter to our build script. The build script will take the input file defined in our config (in this example, `theme.json`), parse it, replace the variables with the values defined in our config, then output the new JSON file in the location specified in the config. In this example, it would create a new file (or overwite an existing one) at `./themes/early-riser-color-theme.json`.

I do it like this in my theme:

```json
{
    "scripts": {
        "build": "build-theme",
        "publish": "npm run build && vsce publish"
    }
}
```

If you wanted to use a different file or put the config file elsewhere in your project, you would tell the `build-theme` script by passing a second parameter:

```json
{
    "scripts": {
        "build": "build-theme ./config/theme.config.js",
        "publish": "npm run build && vsce publish"
    }
}
```

If you think this might be helpful for you, there's a lot more detailed information [on GitHub](https://github.com/two-beards/vscode-theme-builder). If you'd like to see an example of it out in the wild, my [Electron Highlighter](https://github.com/mikemcbride/vscode-electron-highlighter) and [Early Riser](https://github.com/mikemcbride/vscode-early-riser) themes use this library.

Enjoy!
