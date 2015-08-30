flExamples.controller('paginationBarCtrl', ['$scope', function($scope) {
	
	// You can add any specific functionality on your templates.
	
	$scope.pb = {};
	
	$scope.pb.pageChanged = function() {
		$scope.list.changePage($scope.list.pagination_info.currpage);
	};
	
}])
.directive('paginationBar', function() {
	return {
		restrict: 'E',
		controller: 'paginationBarCtrl',
		templateUrl: '/examples/pagination-bar-tpl.html'
	};
});