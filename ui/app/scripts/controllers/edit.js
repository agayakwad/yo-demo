'use strict';

angular.module('uiApp').controller('UserEditCtrl', ['$scope', '$routeParams', '$location', 'User', function ($scope, $routeParams, $location, User) {
  
  $scope.user = User.get({userId: $routeParams.userId});

  $scope.save = function (user) {
    user.$save({userId: user.id}, function (user) {
      console.log('save', user);
    });
  };

  $scope.remove = function (user) {
    user.$remove({userId: user.id}, function () {
      $location.path = '/users';
    });
  };

}]);

 