flExamples.controller('ctPhonesExCtrl', ['$scope', function($scope) {
	
	$scope.phones = {};
	
	//Set up specific crudTable template options
	$scope.phones.ct = {};
	
	$scope.phones.ct.options = {
		pk: 'id',
		refreshBtn: true,
		addRecord: function()	{ alert('add record'); },
		actionsCol: true,
		editRecord: function(record)	{ alert('edit record'); },
		deleteRecord: function(record)	{ alert('delete record'); },
		deleteRows: function(selection)	{ alert(selection.length + ' records selected'); },
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
		debug: true,
		displayField: function(scope, element, attrs)
		{
			// Add a link on field "name" to each record
			if (attrs['field'] == 'name')
			{
				if (attrs['value'] == 'Dell Venue')
					element.html('<a onclick="event.stopPropagation();alert(\'This is a read-only record\');" href="javascript:void(0);">' + attrs['value'] + '</a>');
				else
					element.html('<a onclick="event.stopPropagation();alert(\'interested on this phone?\');" href="javascript:void(0);">' + attrs['value'] + '</a>');
				return;
			}
			
			element.html(attrs['value']);
		}
	};
	
	//Set up FL options
	$scope.phones.fl = {};
	$scope.phones.fl.options = {
		listURL: 'http://flexilist.16mb.com/examples/db/get_phones.php',
		method: 'GET',
		urlencoded: true,
		pagesize: 5,
		orderby: [
			{field: 'name', type: 'asc'}
		],
		sortOnClient: true,
		paginationOnClient: true,
		searchOnClient: true
		// Enable log 
		//,log: {id: 'ctPhonesExCtrl', err: true, debug: true}
	};
	
	/*
	// Optionally set an initial search for a specific phone
	$scope.phones.ct.search_field = $scope.phones.ct.options.filters[0];
	$scope.phones.ct.search_value = 'Dell Venue';
	
	$scope.phones.fl.options.where = [{
		field: $scope.phones.ct.search_field.field, 
		condition: $scope.phones.ct.search_field.condition, 
		value: $scope.phones.ct.search_value,
		option: $scope.phones.ct.search_field.option
	}];
	*/
	
	// Mark a specific record as read-only
	$scope.$on('flComplete', function($e, $args)
	{
		angular.forEach($scope.phones.fl.records, function (record) {
			if (record.id == 'dell-venue')
			{
				record.readonly = true;
				return;
			}
		});
	});
	
}]);
