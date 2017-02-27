'use strict';

/**
 * @ngdoc overview
 * @name msgProcessorApp
 * @description
 * # msgProcessorApp
 *
 * Main module of the application.
 */
angular
  .module('msgProcessorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
