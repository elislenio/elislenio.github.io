flExamples.controller('sortPhonesCtrl', ['$scope', function($scope) {
	
	//Set up the FL options with a default sorting
	$scope.phones = {};
	$scope.phones.options = {
		jsonFile: '/examples/phones.json',
		orderby: [
			{field: 'name', type: 'desc'}
		],
		limit: 5,
		pagination: false
	};
	
}]);