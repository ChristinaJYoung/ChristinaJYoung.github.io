let app = angular.module("personalPortfolio", ["ngRoute"]);

app.config(($routeProvider) => {

		$routeProvider
			.when('/', {
				templateUrl: 'partials/mainPage.html',
				controller: 'mainCtrl'
			})
			.when('/main', {
				templateUrl: 'partials/mainPage.html',
				controller: 'mainCtrl'
			})
			.when("/bio", {
				templateUrl: 'partials/bioPage.html',
				controller: 'bioCtrl'
			})
			.when('/projects', {
        templateUrl: 'partials/projectsPage.html',
        controller: 'projectsCtrl'
      })
      .when('/logoDesigns', {
				templateUrl: 'partials/logoDesigns.html',
				controller: 'logoDesignsCtrl'
			})
			.when('/tech', {
				templateUrl: 'partials/techPage.html',
				controller: 'techCtrl'
			})
			.when('/designs', {
				templateUrl: 'partials/bioPage.html',
				controller: 'designsCtrl'
			})
			.otherwise('/main');
	});
