(function () {
  angular.module('swapi')
    .service('StarshipService', ['$http', 'CONSTANTS', function ($http, config) {


      return {
        fetchShips: function () {
          return $http.get(config.API_URL + '/starships')
            .then(function (response) {
                return response.data.results;
            });
        }
      };
    }]);
})();
