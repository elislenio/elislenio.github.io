flExamples.controller('paginationPhonesExCtrl', ['$scope', function($scope) {
	//Set up FL options
	$scope.phones1 = {};
	$scope.phones1.options = {
		jsonFile: '/examples/phones.json',
		pagesize: 5,
		pages: 3
	};
}]);