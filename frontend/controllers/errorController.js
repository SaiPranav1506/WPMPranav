angular.module('inventoryApp')
.controller('ErrorController', ['$scope', function($scope){
  $scope.message = 'An error occurred while calling the backend API.';
}]);
