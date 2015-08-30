'use strict';

var flExamples = angular.module('flExamples',[
	'flexiList',
	'crudTable',
	'thumbs',
	'ui.bootstrap'
	//'gettext', 
	//'treasure-overlay-spinner'
]);

flExamples.controller('exTutorial', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
	
	if ($routeParams.anchor) $location.hash($routeParams.anchor);
	
	if ($routeParams.resource)
		$scope.tut_include = '/examples/' + $routeParams.resource + '.html';
	else
		$scope.tut_include = '/examples/first_steps.html';
	
}])
.controller('exFirstSteps', ['$scope', function($scope) {
	
	$scope.step1_1 = '<script src="/assets/flexi-list/flexi-list.min.js"></script>';
	
	$scope.step1_2 = '<div ng-controller="csBasicPhonesCtrl"> \n\
	<basic-example list="phones"></basic-example> \n\
</div>';

	$scope.step2_1 = "angular.module('myModule', ['flexiList']);";
	
	$scope.step2_2 = '.controller(\'csBasicPhonesCtrl\', [\'$scope\', function($scope) { \n\
	\n\
	$scope.phones = {}; \n\
	$scope.phones.options = { \n\
		jsonFile: \'/examples/phones.json\', \n\
		limit: 4 \n\
	}; \n\
	\n\
}])';

	$scope.step3 = '.controller(\'basicExampleCtrl\', [\'$scope\', function($scope) { \n\
	// Here we can add custom features to our template by extending $scope.list \n\
}]) \n\
.directive(\'basicExample\', function() { \n\
	return { \n\
		restrict: \'E\', \n\
		scope: {list: \'=\'}, \n\
		controller: \'basicExampleCtrl\', \n\
		templateUrl: \'/examples/basic-tpl.html\' \n\
	}; \n\
})';

	$scope.step4 = '<fl-main list="list"></fl-main> \n\
<ul> \n\
	<li data-ng-repeat="rec in list.records">{{rec[\'name\']}}</li> \n\
</ul>';

	$scope.exbasic = [
		{ title: 'HTML', code: $scope.step1_2, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/basic.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/basic-tpl.js', brush: 'js'},
		{ title: 'basic-tpl.html', url: '/examples/basic-tpl.html', brush: 'xml'},
		{ title: 'phones.json', url: '/examples/phones.json', brush: 'json'}
	];
	
	$scope.exbasicss_html = '<div ng-controller="ssBasicPhonesCtrl"> \n\
	<basic-example list="phones2"></basic-example> \n\
</div>';

	$scope.exbasicss = [
		{ title: 'HTML', code: $scope.exbasicss_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/basic-ss.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/basic-tpl.js', brush: 'js'},
		{ title: 'basic-tpl.html', url: '/examples/basic-tpl.html', brush: 'xml'}
	];
}])
.controller('exSortingCtrl', ['$scope', function($scope) {
	
	$scope.ex1_html = '<div ng-controller="sortPhonesCtrl"> \n\
	<sort-example list="phones"></sort-example> \n\
</div>';

	$scope.ex1 = [
		{ title: 'HTML', code: $scope.ex1_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/sorting.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/sort-tpl.js', brush: 'js'},
		{ title: 'sort-tpl.html', url: '/examples/sort-tpl.html', brush: 'xml'}
	];
	
	$scope.ex2_html = '<div ng-controller="sortPhonesServerCtrl"> \n\
	<sort-example list="phones2"></sort-example> \n\
</div>';

	$scope.ex2 = [
		{ title: 'HTML', code: $scope.ex2_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/sorting-ss.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/sort-tpl.js', brush: 'js'},
		{ title: 'sort-tpl.html', url: '/examples/sort-tpl.html', brush: 'xml'}
	];
	
	$scope.ex3_html = '<div ng-controller="sortPhonesMixedCtrl"> \n\
	<sort-example list="phones3"></sort-example> \n\
</div>';

	$scope.ex3 = [
		{ title: 'HTML', code: $scope.ex3_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/sorting-mixed.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/sort-tpl.js', brush: 'js'},
		{ title: 'sort-tpl.html', url: '/examples/sort-tpl.html', brush: 'xml'}
	];
	
}])
.controller('exSearchCtrl', ['$scope', '$location', function($scope, $location) {
	
	$scope.ex1_html = '<div ng-controller="searchPhonesCtrl"> \n\
	<search-example list="phones1"></search-example> \n\
</div>';

	$scope.ex1 = [
		{ title: 'HTML', code: $scope.ex1_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/search.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/search-tpl.js', brush: 'js'},
		{ title: 'search-tpl.html', url: '/examples/search-tpl.html', brush: 'xml'}
	];
	
	$scope.ex2_html = '<div ng-controller="searchPhonesServerCtrl"> \n\
	<advsearch-example list="phones2"></advsearch-example> \n\
</div>';

	$scope.ex2 = [
		{ title: 'HTML', code: $scope.ex2_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/search-server.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/search-adv-tpl.js', brush: 'js'},
		{ title: 'search-adv-tpl.html', url: '/examples/search-adv-tpl.html', brush: 'xml'}
	];
	
	$scope.ex3_html = '<div ng-controller="searchPhonesMixedCtrl"> \n\
	<advsearch-example list="phones3"></advsearch-example> \n\
</div>';

	$scope.ex3 = [
		{ title: 'HTML', code: $scope.ex3_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/search-mixed.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/search-adv-tpl.js', brush: 'js'},
		{ title: 'search-adv-tpl.html', url: '/examples/search-adv-tpl.html', brush: 'xml'}
	];
}])
.controller('exSelectingCtrl', ['$scope', function($scope) {
	
	$scope.ex1_html = '<div ng-controller="selectPhonesExCtrl"> \n\
	<select-example list="phones1"></select-example> \n\
</div>';

	$scope.exselecting = [
		{ title: 'HTML', code: $scope.ex1_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/selecting.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/selection-tpl.js', brush: 'js'},
		{ title: 'selection-tpl.html', url: '/examples/selection-tpl.html', brush: 'xml'}
	];
	
	$scope.ex2_html = '<div ng-controller="multiselectPhonesExCtrl"> \n\
	<select-example list="phones2"></select-example> \n\
</div>';

	$scope.exselectingmultiple = [
		{ title: 'HTML', code: $scope.ex2_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/selecting-multiple.js', brush: 'js', active: true},
		{ title: 'template.js', url: '/examples/selection-tpl.js', brush: 'js'},
		{ title: 'selection-tpl.html', url: '/examples/selection-tpl.html', brush: 'xml'}
	];
}])
.controller('exPaginationCtrl', ['$scope', function($scope) {
	
	$scope.ex1_html = '<div ng-controller="paginationPhonesExCtrl"> \n\
	<pagination-example list="phones1"></pagination-example> \n\
</div>';

	$scope.expagination = [
		{ title: 'HTML', code: $scope.ex1_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/pagination.js', brush: 'js', active: true},
		{ title: 'pagination-tpl.js', url: '/examples/pagination-tpl.js', brush: 'js'},
		{ title: 'pagination-tpl.html', url: '/examples/pagination-tpl.html', brush: 'xml'},
		{ title: 'pagination-bar.js', url: '/examples/pagination-bar.js', brush: 'js'},
		{ title: 'pagination-bar.html', url: '/examples/pagination-bar-tpl.html', brush: 'xml'}
	];
	
	$scope.ex2_html = '<div ng-controller="paginationPhones2ExCtrl"> \n\
	<pagination-example list="phones2"></pagination-example> \n\
</div>';

	$scope.expagination2 = [
		{ title: 'HTML', code: $scope.ex2_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/pagination2.js', brush: 'js', active: true},
		{ title: 'pagination-tpl.js', url: '/examples/pagination-tpl.js', brush: 'js'},
		{ title: 'pagination-tpl.html', url: '/examples/pagination-tpl.html', brush: 'xml'},
		{ title: 'pagination-bar.js', url: '/examples/pagination-bar.js', brush: 'js'},
		{ title: 'pagination-bar.html', url: '/examples/pagination-bar-tpl.html', brush: 'xml'}
	];
	
	$scope.ex3_html = '<div ng-controller="paginationPhones3ExCtrl"> \n\
	<pagination-example list="phones3"></pagination-example> \n\
</div>';

	$scope.expagination3 = [
		{ title: 'HTML', code: $scope.ex3_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/pagination3.js', brush: 'js', active: true},
		{ title: 'pagination-tpl.js', url: '/examples/pagination-tpl.js', brush: 'js'},
		{ title: 'pagination-tpl.html', url: '/examples/pagination-tpl.html', brush: 'xml'},
		{ title: 'pagination-bar.js', url: '/examples/pagination-bar.js', brush: 'js'},
		{ title: 'pagination-bar.html', url: '/examples/pagination-bar-tpl.html', brush: 'xml'}
	];
}])
.controller('exTemplatesCtrl', ['$scope', function($scope) {
	
	$scope.ex_ct_html = '<div ng-controller="ctPhonesExCtrl"> \n\
	<crud-table list="phones.fl" ct="phones.ct" template="/assets/flexi-list/templates/crud-table/crud-table.html"></crud-table> \n\
</div>';

	$scope.ex_ct = [
		{ title: 'HTML', code: $scope.ex_ct_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/templates-ct.js', brush: 'js'},
		{ title: 'crud-table.js', url: '/assets/flexi-list/templates/crud-table/crud-table.js', brush: 'js'},
		{ title: 'crud-table.html', url: '/assets/flexi-list/templates/crud-table/crud-table.html', brush: 'xml'},
		{ title: 'crud-table.css', url: '/assets/flexi-list/templates/crud-table/crud-table.css', brush: 'css'},
		{ title: 'PHP', url: '/examples/db/get_phones.php.txt', brush: 'php'}
	];
	
	$scope.ex_th_html = '<div ng-controller="thPhonesExCtrl"> \n\
	<thumbs list="phones2.fl" ct="phones2.ct" template="/assets/flexi-list/templates/thumbs/thumbs.html"></thumbs> \n\
</div>';

	$scope.ex_th = [
		{ title: 'HTML', code: $scope.ex_th_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/templates-th.js', brush: 'js'},
		{ title: 'thumbs.js', url: '/assets/flexi-list/templates/thumbs/thumbs.js', brush: 'js'},
		{ title: 'thumbs.html', url: '/assets/flexi-list/templates/thumbs/thumbs.html', brush: 'xml'},
		{ title: 'thumbs.css', url: '/assets/flexi-list/templates/thumbs/thumbs.css', brush: 'css'}
	];
}])
.controller('quickDemoExCtrl', ['$scope', function($scope) {
	
	$scope.ex_html = '<div ng-controller="demoCtrl"> \n\
	<crud-table list="phones.fl" ct="phones.ct" template="/assets/crud-table/crud-table.html"></crud-table> \n\
</div>';

	$scope.extblfull = [
		{ title: 'HTML', code: $scope.ex_html, brush: 'xml'},
		{ title: 'JavaScript', url: '/examples/quick-demo.js', brush: 'js'}
	];
	
}]);

flExamples.directive('exTabs', function() {
	return {
		restrict: 'E',
		scope: {
			tabs: '='
		},
		templateUrl: '/ex-tabs-tpl.html'
	};
})
.directive('shCode', ['$q', '$http', function($q, $http) {
	
	function link(scope, element) {
		
		function highlight()
		{
			var brush;
			
			switch(scope.brush) {
				case 'xml':
					brush = new SyntaxHighlighter.brushes.Xml();
					break;
				case 'css':
					brush = new SyntaxHighlighter.brushes.CSS();
					break;
				case 'php':
					brush = new SyntaxHighlighter.brushes.Php();
					break;
				case 'json':
					brush = new SyntaxHighlighter.brushes.JScript();
					scope.code = JSON.stringify(scope.code, null, '\t');
					break;
				case 'plain':
					brush = new SyntaxHighlighter.brushes.Plain();
					break;
				default:
					brush = new SyntaxHighlighter.brushes.JScript();
			}
			
			brush.init({ toolbar: false });
			element.html(brush.getHtml(scope.code));
		}
		
		function requestFile(file)
		{
			var deferred = $q.defer();
			
			$http({
				method: 'GET',
				url: file
			}).success(function(data, status) {
				deferred.resolve(data);
			}).error(function(data, status){
				deferred.reject('ERROR: ' + status);
			});
			
			return deferred.promise;
		}
		
		function loadContents()
		{
			var promise = requestFile(scope.url);
			
			promise.then(
				function(data){
					scope.code = data;
					highlight();
				}, 
				function(reason) {
					scope.code = "Data load error.";
				}
			);
		}
		
		if (scope.url)
			loadContents();
		else
			highlight();
		
	}
		
	return {
		restrict: 'E',
		scope: {
			url: '=',
			code: '=',
			brush: '='
		},
		link: link
	};
}]);