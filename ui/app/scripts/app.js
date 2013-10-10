'use strict';

var app = angular.module('uiApp', [ 'ngResource' ]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [ 'uiApp' ]);
});

app.config([ '$routeProvider', '$locationProvider',
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
			}).when('/customers', {
				controller : 'CustomersController',
				templateUrl : 'views/partials/customers.html'
			}).when('/customerorders/:customerID', {
				controller : 'CustomerOrdersController',
				templateUrl : 'views/partials/customerOrders.html'
			}).when('/orders', {
				controller : 'OrdersController',
				templateUrl : 'views/partials/orders.html'
			}).otherwise({
				redirectTo : '/customers'
			});
			/*
			 * .otherwise({ redirectTo : '/' });
			 */
		} ]);

// angular.module('uiApp', [ 'ngResource' ])
