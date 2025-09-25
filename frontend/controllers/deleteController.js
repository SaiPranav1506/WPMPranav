angular.module('inventoryApp')
.controller('DeleteController', ['$scope', '$routeParams', 'ApiService', '$location', function($scope, $routeParams, ApiService, $location) {
  $scope.item = null;
  ApiService.get($routeParams.id).then(function(res){
    if (res && res.data) $scope.item = res.data.item;
  });

  $scope.remove = function() {
    ApiService.remove($routeParams.id).then(function(res){
      $location.path('/');
    });
  };
}]);
