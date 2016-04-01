var jettairlines = angular.module('jettairlines', ['ngRoute']);

jettairlines.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: '../partials/projects.html',
        controller: 'TabController'
      }).when('/freelance', {
        templateUrl: '../partials/freelance.html',
        controller: 'TabController'
      }).when('/art', {
        templateUrl: '../partials/art.html',
        controller: 'TabController'
      }).when('/leisure', {
        templateUrl: '../partials/leisure.html',
        controller: 'TabController'
      }).otherwise({
        redirectTo: '/'
      });
  }]);


jettairlines.controller('TabController', function($scope) {});
jettairlines.controller('jettairlines', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
