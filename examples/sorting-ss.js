flExamples.controller('sortPhonesServerCtrl', ['$scope', function($scope) {
	
	//Set up the FL options with a default sorting on server side
	$scope.phones2 = {};
	$scope.phones2.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php',
		method: 'GET',
		urlencoded: true,
		orderby: [
			{field: 'name', type: 'desc'}
		],
		limit: 5,
		pagination: false
	};
	
}]);
