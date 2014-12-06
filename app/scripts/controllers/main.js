'use strict';

/**
 * @ngdoc function
 * @name rockfordAnswers.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockfordAnswers
 */
angular.module('rockfordAnswers')
  .controller('MainCtrl', function ($scope, Parseservice) {
    //TODO build out controller
    
    $scope.question = {};
    $scope.questions = Parseservice.getQuestions();
  });
