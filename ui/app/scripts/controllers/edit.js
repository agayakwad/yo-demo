'use strict';

app.controller(
		'UserEditCtrl',
		[ '$scope', '$routeParams', '$location', '$injector','UserFactory',
				function($scope, $routeParams, $location, $injector, User) {

					/*try {
						common = $injector.get('User');
						console.log('Injector has user service!');
						
					} catch (e) {
						console.log('Injector does not have user service!');
						
					}
					if (common) {
					
						common.action();
						
					}
					*/
					$scope.user = User.get({
						userId : $routeParams.userId
					});

					$scope.save = function(user) {
						user.$save({
							userId : user.id
						}, function(user) {
							console.log('save', user);
						});
					};

					$scope.remove = function(user) {
						user.$remove({
							userId : user.id
						}, function() {
							$location.path = '/users';
						});
					};

				} ]);


/*app.service('User', function() {
	this.action = function() {
		return $resource('/user/:userId', {
			'userId' : '@id'
		});
	}
});*/
