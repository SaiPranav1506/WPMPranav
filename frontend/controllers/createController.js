angular.module('inventoryApp')
.controller('CreateController', ['$scope', 'ApiService', '$location', function($scope, ApiService, $location) {
  $scope.item = { name: '', quantity: 0, price: 0 };
  $scope.create = function() {
    ApiService.create($scope.item).then(function(res) {
      if (res && res.data) $location.path('/');
    });
  };
}]);
