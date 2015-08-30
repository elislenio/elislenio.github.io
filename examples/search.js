'use strict';

flExamples.controller('searchPhonesCtrl', ['$scope', function($scope) {
	
	//Set up FL options with an initial filter
	$scope.phones1 = {};
	$scope.phones1.search_value = 'dell';
	$scope.phones1.options = {
		jsonFile: '/examples/phones.json',
		limit: 5,
		pagination: false,
		where: [{
			field: 'name', 
			condition: 'like_r', 
			value: $scope.phones1.search_value,
			options: {insensitive: true}
		}]
	};
	
}]);