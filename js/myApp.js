/*global angular:false */

(function(){
  'use strict';

  var myApp = angular.module('myApp',['devTags']);

  myApp.controller('controllerMain', function($scope) {

    $scope.heros = [
      {name:'Iron Man'},
      {name:'The Hulk'},
      {name:'Thor'},
      {name:'Captain'}
    ];

    $scope.villains = [
      {name:'Loki'},
      {name:'Red Skull'},
      {name:'The Winter Soldier'},
      {name:'Mandarin'},
      {name:'Ultron'},
      {name:'Thanos'}
    ];

  });
})();

