/*global angular:false */

(function(){
  'use strict';

  var devTags = angular.module('devTags',[]);

  //TODO allow for templateUrl
  devTags.directive('devList', function($compile) {

    var getTemplate = function(value) {
      if(value === '' || value === undefined){
        return '<ul><li ng-repeat=\"item in dataset\">{{item}}</li></ul>';
      } else {
        return '<ul><li ng-repeat=\"item in dataset\">{{item[key]}}</li></ul>';
      }
    };

    var linker = function(scope, elem, attrs) {
      elem.html(getTemplate(attrs.key));
      $compile(elem.contents())(scope);
    };

    return {
        scope:{
          dataset: '=',
          key: '@'
        },
        restrict: 'AE',
        replace: 'true',
        link: linker
    };
  });

})();