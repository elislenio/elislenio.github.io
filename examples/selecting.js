flExamples.controller('selectPhonesExCtrl', ['$scope', function($scope) {
	
	//Set up the FL options
	$scope.phones1 = {};
	$scope.phones1.options = {
		jsonFile: '/examples/phones.json',
		limit: 5, 
		multiselect: false,
		pagination: false
	};
	
}]);