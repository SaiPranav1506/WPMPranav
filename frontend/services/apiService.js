const token = '<your_jwt_here>';
angular.module('inventoryApp')
.factory('ApiService', ['$http', '$location', function($http, $location) {
  const base = 'http://localhost:4000/api/inventory';

  function handleError(err) {
    console.error('API error', err);
    $location.path('/error');
  }
  return {
    list: function() { return $http.get(base).catch(handleError); },
    get: function(id) { return $http.get(base + '/' + id).catch(handleError); },
    create: function(item) { return $http.post(base, item).catch(handleError); },
    update: function(id, item) { return $http.put(base + '/' + id, item).catch(handleError); },
    remove: function(id) { return $http.delete(base + '/' + id).catch(handleError); }
  };
}]);
