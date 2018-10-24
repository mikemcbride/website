---
layout: post
title: Color Picker Input with HEX Validation
date: 2014-09-09
status: publish
type: post
published: true
---
I recently had the opportunity to work on a really fun little feature in an app. We were creating tags to drag and drop onto a board, and needed the ability to pick a color for your tag. Initially we implemented a static set of 16 color choices, but people wanted it to be more flexible, so I set up an input field that allows you to enter any HEX color code that you want for the tag. Naturally, that meant we had to ensure they used a valid HEX code. Keep reading to see how it all fits together.

First off, [check out this fiddle](http://jsfiddle.net/mmcbride1007/4hf3o76g/) to see it in action. Pretty fun, right? So there are a few components working together here that actually made this SUPER simple. If you looked at the code, it goes without saying that AngularJS is a huge reason why this was so easy. Let's look at the components that brought this all together:

## ToggleDisabled
I wrote this directive a few months back, and I've ended up using it on almost every app I've worked on since. You add it to a button as an attribute and pass in the scope element that you want to watch.

```html
<button toggle-disabled="elementToWatch">Click me</button>
```

The button is then enabled or disabled based on the value of that scope element (when it is true, you can click, when false it is disabled).

## Hex Code Validation
We realized that if we strayed from the simple "click a box and pick a color", we'd have to include some validation to make sure they couldn't use a code that didn't make a color. Initially I was a little worried about this, but it turned out to be crazy easy. The only code is this:

```javascript
function isValidHex(code) {
  var isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(code);
  return isValid;
}
```

You could probably even write that into one line if you really wanted to push it. It's just a simple regex that makes sure there's a pound sign followed by either 3 or 6 characters that are 0-9 or A-Z.

## Input field
The input field required very little markup at all. Outside of any classes you want to put on it and placeholder text, it just needed an ng-model so that the content of the input was bound to a scope element, and an ng-style to set the border color to the value of the model:

```html
<input ng-model="color" ng-style="{ 'border-color': color }" />
```

## $scope.$watch
Now that we have our validation function set up and our input field binding to the model "$scope.color", the last step is to simply monitor the value of the field, and when it changes, check if the new value is a valid hex color.

```javascript
$scope.$watch('color', function(newValue, oldValue, scope) {
  scope.canSubmit = isValidHex(newValue);
});
```

Since we already have our toggle-disabled directive set up on the button, we set the element bound to toggle-disabled to be the value returned from isValidHex, and when we have a value that is acceptable, you can submit the form. If the value isn't valid, the function returns false and toggle-disabled directive tells the button it can't be clicked.

There you have it! Very little code required to make a very useful form input much easier.

Enjoy!
