flExamples.controller('sortPhonesMixedCtrl', ['$scope', function($scope) {
	
	//Set up the FL options with a default sorting on server side
	$scope.phones3 = {};
	$scope.phones3.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php',
		method: 'GET',
		urlencoded: true,
		orderby: [
			{field: 'name', type: 'desc'}
		],
		sortOnClient: true,
		limit: 5,
		pagination: false
	};
	
}]);
