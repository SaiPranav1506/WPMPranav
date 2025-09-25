angular.module('inventoryApp')
.controller('ListController', ['$scope', 'ApiService', function($scope, ApiService) {
  $scope.items = [];
  ApiService.list().then(function(res) {
    if (res && res.data) $scope.items = res.data.items || [];
  });
}]);
