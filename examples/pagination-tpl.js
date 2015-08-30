flExamples.controller('paginationExCtrl', ['$scope', function($scope) {
	// You can add any specific functionality on your templates. 
	$scope.list.pagesizes = [5,10,20];
}])
.directive('paginationExample', function() {
	return {
		restrict: 'E',
		scope: {list: '='},
		controller: 'paginationExCtrl',
		templateUrl: '/examples/pagination-tpl.html'
	};
});