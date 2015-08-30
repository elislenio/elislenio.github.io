flExamples.controller('demoCtrl', ['$scope', function($scope) {
	
	$scope.phones = {};
	
	//Set up the FL options
	$scope.phones.fl = {};
	$scope.phones.fl.options = {
		jsonFile: '/examples/phones.json',
		orderby: [
			{field: "age", type:"asc"}
		],
		pagesize: 5
	};
	
	//Set up specific crudTable template options
	$scope.phones.ct = {};
	$scope.phones.ct.options = {
		pk: 'id',
		refreshBtn: false,
		addRecord: false,
		actionsCol: false,
		cols: [
			{field: 'name', title: 'Phone name'},
			{field: 'age', title: 'Age'},
			{field: 'snippet', title: 'Description', sortable: false}
		],
		filters: [
			{field: "name", title: 'Name', condition: 'like_b', option: true},
			{field: "age", title: 'Age', condition: 'eq'},
			{field: "snippet", title: 'Description', condition: 'like_b', option: true}
		],
		pagesizes: [5,10,20],
		debug: true
	};
	
}]);