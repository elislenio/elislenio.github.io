flExamples.controller('ssBasicPhonesCtrl', ['$scope', function($scope) {
	
	//Set up the FL options
	$scope.phones2 = {};
	$scope.phones2.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php',
		method: 'GET',
		urlencoded: true,
		limit: 4,
		pagination: false
	};
	
}]);
