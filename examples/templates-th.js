flExamples.controller('thPhonesExCtrl', ['$scope', function($scope) {
	
	$scope.phones2 = {};
	
	//Set up specific Thumbs template options
	$scope.phones2.th = {};
	
	$scope.phones2.th.options = {
		img_dir: '/examples/',
		img_field: 'imageUrl',
		th_label: 'name',
		th_snippet: 'snippet',
		search_field: 'name',
		search_condition: 'like_b', 
		search_condition_opts: {insensitive: true},
		pagesizes: [3,6,9,12]
	};
	
	//Set up FL options
	$scope.phones2.fl = {};
	$scope.phones2.fl.options = {
		jsonFile: 'http://flexilist.16mb.com/examples/db/get_phones.php',
		pagesize: 3,
		pages: 3,
		orderby: [
			{field: 'name', type: 'asc'}
		]
		// Enable log 
		//,log: {id: 'thPhonesExCtrl', err: true, debug: true}
	};
	
}]);