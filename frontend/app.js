angular.module('inventoryApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'templates/list.html', controller: 'ListController' })
    .when('/create', { templateUrl: 'templates/create.html', controller: 'CreateController' })
    .when('/edit/:id', { templateUrl: 'templates/edit.html', controller: 'EditController' })
    .when('/delete/:id', { templateUrl: 'templates/delete.html', controller: 'DeleteController' })
    .when('/error', { templateUrl: 'templates/error.html', controller: 'ErrorController' })
    .otherwise({ redirectTo: '/' });
}]);
