'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'app/partials/home.html', controller: 'homepage', caseInsensitiveMatch: true });
    $routeProvider.when('/animaladjectives', { templateUrl: 'app/partials/animaladjectives.html', controller: 'animaladjectives', caseInsensitiveMatch: true });
    $routeProvider.when('/mtgmirror', { templateUrl: 'app/partials/mtgmirror.html', controller: 'mtgmirror', caseInsensitiveMatch: true });
    $routeProvider.when('/librarians', { templateUrl: 'app/partials/librarians.html', controller: 'librarians', caseInsensitiveMatch: true });
    $routeProvider.when('/dissertation', { templateUrl: 'app/partials/dissertation.html', controller: 'dissertation', caseInsensitiveMatch: true });
    $routeProvider.when('/aboutsite', { templateUrl: 'app/partials/aboutsite.html', controller: 'aboutsite', caseInsensitiveMatch: true });
    $routeProvider.when('/aboutme', { templateUrl: 'app/partials/aboutme.html', controller: 'aboutme', caseInsensitiveMatch: true });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
