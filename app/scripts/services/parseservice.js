'use strict';

/**
 * @ngdoc service
 * @name rockfordAnswers.parseService
 * @description
 * # parseService
 * Service in the rockfordAnswers.
 */
angular.module('rockfordAnswers')
  .service('Parseservice', function Parseservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    //TODO Connect Service to Parse.com
    return {
        getQuestions: function(){
            return [
                {id:1, question:"Where do I vote?"},
                {id:2, question:"How do I get a busines license?"},
                {id:3, question:"How do I get a library card?"}
            ]
        }  
    };
  });
