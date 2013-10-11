'use strict';

angular.module('uiApp').factory('UserFactory', ['$resource', function ($resource) {  
 
	return $resource('/user/:userId', {'userId': '@id'});
	/*return $resource("user/:userId", {'userId': "@Id"}, {
      "update": {method:"PUT"},
      "query": { method:"GET", isArray: true }
    });*/
}]);
 

/* //return $resource('/user/:userId', {'userId': '@id'}); 
 * angular.module('uiApp').factory('UserFactory', [ '$resource', function($resource) {
console.log('user service!');
var users = [ {
	id : 1,
	email : "john@doe.com",
	firstName : "John",
	lastName : "Doe"
}, {
	id : 2,
	email : "jane@doe.com",
	firstName : "Jane",
	lastName : "Doe"
} ];

this.getUsers = function() {
	return users;
};

return this // $resource('ui/user/:userId', {'userId': '@id'});
} ]);*/
