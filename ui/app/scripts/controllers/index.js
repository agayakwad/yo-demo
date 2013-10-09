'use strict';
angular.module('uiApp').controller('UserIndexCtrl', ['$scope', 'User', function ($scope, User) {
  $scope.users = User.query();
}]);
 
 