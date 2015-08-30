flExamples.controller('basicExampleCtrl', ['$scope', function($scope) {
	// Here we can add custom features to our template by extending $scope.list 
}])
.directive('basicExample', function() {
	return {
		restrict: 'E',
		scope: {list: '='},
		controller: 'basicExampleCtrl',
		templateUrl: '/examples/basic-tpl.html'
	};
});