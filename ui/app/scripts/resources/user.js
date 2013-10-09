'use strict';

angular.module('uiApp').factory('User', ['$resource', function ($resource) {  
  return $resource('/user/:userId', {'userId': '@id'}); 
}]);