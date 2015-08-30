'use strict';

flExamples
.controller('apiCtrl', ['$scope', '$routeParams', '$location', '$anchorScroll', function($scope, $routeParams, $location, $anchorScroll) {
	
	if ($routeParams.anchor)
		$anchorScroll($routeParams.anchor);
	else
		window.scrollTo(0,0);
	
	$scope.goToHash = function(hash)
	{
		$location.url('/api/' + hash);
	};
	
	$scope.opt_data = '.controller(\'myCtrl\', [\'$scope\', function($scope) { \n\
	\n\
	$scope.list = {}; \n\
	$scope.list.options = { \n\
		data: [	\n\
			{	\n\
				"age": 0, \n\
				"id": "motorola-xoom-with-wi-fi", \n\
				"imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", \n\
				"name": "Motorola XOOM\u2122 with Wi-Fi" \n\
			}, \n\
			{ \n\
				"age": 1, \n\
				"id": "motorola-xoom", \n\
				"imageUrl": "img/phones/motorola-xoom.0.jpg", \n\
				"name": "MOTOROLA XOOM\u2122" \n\
			}, \n\
			{ \n\
				"age": 2, \n\
				"carrier": "AT&T", \n\
				"id": "motorola-atrix-4g", \n\
				"imageUrl": "img/phones/motorola-atrix-4g.0.jpg", \n\
				"name": "MOTOROLA ATRIX\u2122 4G" \n\
			} \n\
		] \n\
	}; \n\
	\n\
}])';
}])