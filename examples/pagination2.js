flExamples.controller('paginationPhones2ExCtrl', ['$scope', function($scope) {
	//Set up FL options
	$scope.phones2 = {};
	$scope.phones2.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php', 
        method: 'GET', 
        urlencoded: true, 
		pagesize: 5,
		pages: 3
	};
}]);
