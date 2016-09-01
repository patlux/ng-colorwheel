# ng-colorwheel
[![Build Status](https://travis-ci.org/patlux/ng-colorwheel.svg)](https://travis-ci.org/patlux/ng-colorwheel)

AngularJS directive implementation of the jquery-raphael [colorwheel](https://github.com/jweir/colorwheel).

Demo: http://patlux.github.io/ng-colorwheel/example/index.html

![ng-colorwheel](https://cloud.githubusercontent.com/assets/4481570/7785874/84b7de1e-01a7-11e5-8d41-58cc71041bb9.jpg)

## Usage example

```
angular.module( 'your-angular-app', [ 'directive.ngColorwheel' ] )
```

```
<div ng-colorwheel="{ size: 150, segments: 120 }" ng-model="color"></div>
```

## Installation
##### via [bower](http://bower.io/):
```
$ bower install ng-colorwheel
```
