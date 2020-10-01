---
title: Manipulating filtered arrays in AngularJS
date: 2014-05-29T12:00:00Z
published: true
excerpt: I came across an interesting situation at work this week and was a little disappointed with the majority of the answers suggested on how to solve the issue, so I want to share how I solved it.
---
I came across an interesting situation at work this week and was a little disappointed with the majority of the answers suggested on how to solve the issue, so I want to share how I solved it.

## The Dilemma
I had an array of objects on the scope. I'm working on a testing application, so the array is called "cases", and I had a list of "test case" objects. I'm using Angular's ngRepeat directive to create a row in a table for each test case. I have an input field at the top of the table that binds to an ngModel, which I'm using to filter the rows in the table. I also have a button at the bottom of the table that adds all the cases to a set. Here's what we've got so far:


## Controller:

```javascript
angular.module('myApp').controller('MainCtrl', function($scope){
  $scope.cases = [
    {
      name: "Case 1",
      group: "Test Group",
      type: "Regression"
    },
    {
      name: "Case 2",
      group: "Test Group",
      type: "Functional"
    }
  ];

  $scope.set = [];

  $scope.addCases = function() {
    for (var i = 0; i < $scope.cases.length; i++) {
      $scope.set.push($scope.cases[i]);
    }
  }
});
```

## HTML:


```html
<input type="text" ng-model="caseFilter" />
<table>
  <tr ng-repeat="case in cases | filter: caseFilter">
    <td>{{ case.name }}</td>
    <td>{{ case.group }}</td>
    <td>{{ case.type }}</td>
  </tr>
</table>
<button ng-click="addCases()">Add cases to set</button>
```

Now what happens when you type "functional" into the text box is that the first row of the table goes away, but the second one remains, since the second row is the object that has a type of "Functional". Pretty standard AngularJS situation. What I want to happen is when I click "Add cases to set", it adds the filtered array of test cases. Without thinking through what was actually happening in my head, this is how I expected it to work. Instead, I got the entire array added to my set, despite my filter. The issue is that Angular doesn't remove the items from the scope object, it just doesn't show them if they're filtered out. Looking back, that's definitely how it should work, I just didn't think it through all the way. My dilemma remained though -- I wanted the button to only add my filtered list.

## The Solution

According to most of the answers to this on Google and Stack Overflow (surprisingly this wasn't very common, from what I could tell), the way most people would want you to solve this is by using $scope.$watch and check when the values change, then get the list of filtered items and manipulate that. That's an extra method inside my controller that I have to maintain, and it's not going to be a quick one to write to begin with. The good news is there's a better solution.

Angular's two-way data binding is one of it's best features, and one of the benefits is that it can evaluate statements on the view. Very smart. Here's an example:

```html
<div>{{ 2 + 3 }}</div>
```

This will evaluate to 5 on the screen. It's a beautiful thing. That's a very simple example, but it sets the stage for showing you how we can solve our issue by modifying the code very slightly. See below:

## New Controller:

```javascript
angular.module('myApp').controller('MainCtrl', function($scope){

  $scope.cases = [
  {
    name: "Case 1",
    group: "Test Group",
    type: "Regression"
  },
  {
    name: "Case 2",
    group: "Test Group",
    type: "Functional"
  }
  ];

  $scope.set = [];

  $scope.addCases = function() {
    for (var i = 0; i < $scope.filteredCases.length; i++) {
      $scope.set.push($scope.filteredCases[i]);
    }
  }
});
```

## New HTML:

```html
<input type="text" ng-model="caseFilter" />

<table>
  <tr ng-repeat="case in filteredCases = (cases | filter: caseFilter)">
    <td>{{ case.name }}</td>
    <td>{{ case.group }}</td>
    <td>{{ case.type }}</td>
  </tr>
</table>

<button ng-click="addCases()">Add cases to set</button>
```

Notice that we only changed a couple of lines. In our ng-repeat is where the magic happens: we let Angular evaluate our statement

```javascript
  filteredCases = (cases | filter: caseFilter)
```

By doing that, we've created an array called "filteredCases" on our scope and set it equal to the filtered value of $scope.cases. Then all we have to do in our controller is change any reference to the "cases" array in our "addCases" method to be "filteredCases", and we're done. Cleaner and much easier to implement and maintain.

Lesson learned: let the tools do the work for you. Frameworks, especially ones like AngularJS, are incredibly powerful. Don't do something just because that's how you've always had to solve the problem or because that's how everyone else so
Hope this helps some folks. If someone knows a cleaner way to do this or if there are drawbacks to doing it this way, I'd love to hear about it.

Cheers!

Mike
