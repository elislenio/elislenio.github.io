flExamples.controller('paginationPhones3ExCtrl', ['$scope', function($scope) {
	//Set up FL options
	$scope.phones3 = {};
	$scope.phones3.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php', 
        method: 'GET', 
        urlencoded: true, 
		pagesize: 5,
		pages: 3,
		paginationOnClient: true
	};
}]);
