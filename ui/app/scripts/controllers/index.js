'use strict';
angular.module('uiApp').controller('UserIndexCtrl', ['$scope','UserFactory', function ($scope,User) {
	  
	
  $scope.users = User.query();
  //$scope.users = User.getUsers()
}]);
  