'use strict';

/* App Module */
var flSite = angular.module('flSite',[
	'ngRoute',
	'gettext', 
	'flExamples'
]);

flSite.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
				templateUrl: '/main.html'
			}).when('/tutorial', {
				controller: 'exTutorial',
				templateUrl: '/tutorial.html'
			}).
			when('/tutorial/:resource', {
				controller: 'exTutorial',
				templateUrl: '/tutorial.html'
			}).
			when('/tutorial/:resource/:anchor', {
				controller: 'exTutorial',
				templateUrl: '/tutorial.html'
			}).
			when('/api', {
				controller: 'apiCtrl',
				templateUrl: '/api.html'
			}).
			when('/api/:anchor', {
				controller: 'apiCtrl',
				templateUrl: '/api.html'
			}).
			when('/contributing', {
				//controller: 'apiCtrl',
				templateUrl: '/contributing.html'
			}).
			otherwise({
				templateUrl: '/main.html'
			})
		
		//$locationProvider.html5Mode(true);
	}
]);