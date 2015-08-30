flExamples.controller('searchExCtrl', ['$scope', function($scope) {
	
	// You can add any specific functionality on your templates. 
	
	$scope.list.search = function () {
		$scope.list.change({
			where: [{
				field: 'name', 
				condition: 'like_b', 
				value: $scope.list.search_value,
				option: true
			}]
		});
	};
}])
.directive('searchExample', function() {
	return {
		restrict: 'E',
		scope: {list: '='},
		controller: 'searchExCtrl',
		templateUrl: '/examples/search-tpl.html'
	};
});