angular.module('inventoryApp')
.controller('EditController', ['$scope', '$routeParams', 'ApiService', '$location', function($scope, $routeParams, ApiService, $location) {
  $scope.item = null;
  ApiService.get($routeParams.id).then(function(res){
    if (res && res.data) $scope.item = res.data.item;
  });

  $scope.save = function() {
    ApiService.update($routeParams.id, $scope.item).then(function(res){
      if (res && res.data) $location.path('/');
    });
  };
}]);
