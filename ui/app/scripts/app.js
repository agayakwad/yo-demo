'use strict';

angular.module('uiApp', ['ngResource']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [ 'uiApp' ]);
});

angular.module('uiApp').config(
		[ '$routeProvider', '$locationProvider',
				function($routeProvider, $locationProvider) {
					$routeProvider.when('/', {
						templateUrl : 'views/main.html',
						controller : 'MainCtrl'
					}).when('/users', {
						templateUrl : 'views/users/index.html',
						controller : 'UserIndexCtrl'
					}).when('/user/:userId', {
						templateUrl : 'views/users/edit.html',
						controller : 'UserEditCtrl'
					}).otherwise({
						redirectTo : '/'
					});
				} ]);

// angular.module('uiApp', [ 'ngResource' ])
