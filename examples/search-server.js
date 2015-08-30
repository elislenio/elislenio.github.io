'use strict';

flExamples.controller('searchPhonesServerCtrl', ['$scope', function($scope) {
	
	//Set up FL options with an initial filter
	$scope.phones2 = {};
	
	//Set up template specific scope
	$scope.phones2.search_fields = [
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
				{title: 'equal', condition: 'eq'},
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
	
	$scope.phones2.search_field = $scope.phones2.search_fields[0];
	$scope.phones2.search_filter = $scope.phones2.search_fields[0].filters[1];
	$scope.phones2.search_value = 'dell';
	
	$scope.phones2.options = {
		listURL: '/examples/db/get_phones.php',
		method: 'GET',
		urlencoded: true,
		limit: 5,
		pagination: false,
		where: [{
			field: $scope.phones2.search_field.field, 
			condition: $scope.phones2.search_filter.condition, 
			value: $scope.phones2.search_value,
			options: $scope.phones2.search_filter.options
		}]
	};
	
}]);