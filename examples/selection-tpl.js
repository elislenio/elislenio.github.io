flExamples.controller('selectExCtrl', ['$scope', function($scope) {
	
	// You can add any specific functionality on your templates.
	
	$scope.list.getCheckedStr = function() {
		if ($scope.list.getToggleSelNextState())	return 'Uncheck all rows';
		
		return 'Check all rows';
	}
}])
.directive('selectExample', function() {
	return {
		restrict: 'E',
		scope: {list: '='},
		controller: 'selectExCtrl',
		templateUrl: '/examples/selection-tpl.html'
	};
});