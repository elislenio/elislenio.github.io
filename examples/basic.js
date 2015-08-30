flExamples.controller('csBasicPhonesCtrl', ['$scope', function($scope) {
	
	//Set up the FL options
	$scope.phones = {};
	$scope.phones.options = {
		jsonFile: '/examples/phones.json',
		limit: 4,
		pagination: false
	};
	
}]);