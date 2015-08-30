flExamples.controller('multiselectPhonesExCtrl', ['$scope', function($scope) {
	
	//Set up the FL options
	$scope.phones2 = {};
	$scope.phones2.options = {
		jsonFile: '/examples/phones.json',
		limit: 5, 
		multiselect: true,
		pagination: false
	};
	
}]);