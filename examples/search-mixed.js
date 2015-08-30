'use strict';

flExamples.controller('searchPhonesMixedCtrl', ['$scope', function($scope) {
	
	//Set up FL options
	$scope.phones3 = {};
	
	//Set up template specific scope
	$scope.phones3.search_fields = [
		{
			field: "name", 
			title: 'Name', 
			filters: [
				{title: 'contains', condition: 'like_b', options: {insensitive: true}},
				{title: 'begins with', condition: 'like_r', options: {insensitive: true}},
				{title: 'ends with', condition: 'like_l', options: {insensitive: true}}
			]
		},
		{
			field: "age", 
			title: 'Age', 
			filters: [ 
				{title: 'equal', condition: 'eq', options: {insensitive: false}},
				{title: 'not equal', condition: 'ne'},
				{title: 'greater than', condition: 'gt'},
				{title: 'lower than', condition: 'lt'}
			]
		},
		{
			field: "carrier", 
			title: 'Carrier', 
			filters: [ 
				{title: 'is null', condition: 'is_null'},
				{title: 'is not null', condition: 'is_not_null'}
			]
		}
	];
	
	$scope.phones3.search_field = $scope.phones3.search_fields[0];
	$scope.phones3.search_filter = $scope.phones3.search_fields[0].filters[1];
	$scope.phones3.search_value = '';
	
	$scope.phones3.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php',
		method: 'GET',
		urlencoded: true,
		limit: 5,
		pagination: false,
		searchOnClient: true
	};
	
}]);