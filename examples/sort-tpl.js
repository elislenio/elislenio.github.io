flExamples.controller('sortExCtrl', ['$scope', function($scope) {
	
	// You can add any specific functionality on your templates.
	
	// In this case: toggleSorting
	$scope.list.sorted = 'desc';
	$scope.list.toggleSorting = function () {	
	
		if ($scope.list.sorted == 'asc')	$scope.list.sorted = 'desc'; else $scope.list.sorted = 'asc';
		
		var v_orderby = {
			orderby: [
				{field: 'name', type: $scope.list.sorted}
			]
		};
			
		if ($scope.list.options.sortOnClient)
		{
			// instruct FL to apply the new sorting clause without reloading the data
			$scope.list.change(v_orderby);
		}
		else
		{
			// instruct FL to reload data from server
			$scope.list.loadData(v_orderby);
		}
			
	}
}])
.directive('sortExample', function() {
	return {
		restrict: 'E',
		scope: {list: '='},
		controller: 'sortExCtrl',
		templateUrl: '/examples/sort-tpl.html'
	};
});