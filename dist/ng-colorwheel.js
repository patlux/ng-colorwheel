// Generated by CoffeeScript 1.9.2
'use strict';
(function() {
  var ngColorwheelDirective;
  ngColorwheelDirective = function() {
    var directive, link;
    link = function(scope, elem, attrs, ngModelCtrl) {
      var cw, init, options, toView, updateModel;
      if ((typeof Raphael !== "undefined" && Raphael !== null ? Raphael.colorwheel : void 0) == null) {
        return;
      }
      options = null;
      try {
        options = scope.$eval(attrs.ngColorwheel);
      } catch (_error) {
        console.log('ERROR ON PARSING JSON-string:', attrs.ngColorwheel);
      }
      if (options == null) {
        options = {};
      }
      if (options.size == null) {
        options.size = 150;
      }
      cw = null;
      init = function() {
        cw = Raphael.colorwheel(elem[0], options.size, options.segments);
        cw.color('#ff0000');
        ngModelCtrl.$formatters.push(toView);
        return cw.onchange(updateModel);
      };
      toView = function(modelValue) {
        console.log('toView: ', modelValue);
        if (modelValue != null) {
          cw.color(modelValue);
        }
        return modelValue;
      };
      updateModel = function(color) {
        console.log('updateModel: ', color);
        return ngModelCtrl.$setViewValue(color);
      };
      init();
    };
    directive = {
      link: link,
      restrict: 'EA',
      require: '?ngModel'
    };
    return directive;
  };
  return angular.module('directive.ngColorwheel', []).directive('ngColorwheel', ngColorwheelDirective);
})();
