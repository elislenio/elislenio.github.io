'use strict';

flExamples.controller('advsearchExCtrl', ['$scope', function($scope) {
	
	// You can add any specific functionality on your templates.
	
	$scope.list.setSearch = function (field) {
		$scope.list.search_field = field;
		$scope.list.search_filter = '';
	};
	
	$scope.list.setFilter = function (filter) {
		$scope.list.search_filter = filter;
	};
	
	$scope.list.search = function () {
		if(! $scope.list.search_field) return false;
		
		var v_where = {
			where: [{
				field: $scope.list.search_field.field,
				condition: $scope.list.search_filter.condition,
				options: $scope.list.search_filter.options,
				value: $scope.list.search_value
			}]
		};
		
		if ($scope.list.options.searchOnClient)
		{
			// instruct FL to apply the new where clause without reloading the data
			$scope.list.change(v_where);
		}
		else
		{
			// instruct FL to reload data from server
			$scope.list.loadData(v_where);
		}
	};
	
}]).directive('advsearchExample', function() {
	return {
		restrict: 'E',
		scope: {list: '='},
		controller: 'advsearchExCtrl',
		templateUrl: '/examples/search-adv-tpl.html'
	};
});