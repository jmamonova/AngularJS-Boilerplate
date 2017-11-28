(function () {
    angular.module('swapi')
      .service('StarplanetService', ['$http', 'CONSTANTS', function ($http, config) {
  
  
        return {
          fetchPlanets: function () {
            return $http.get(config.API_URL + '/planets')
              .then(function (response) {
                  return response.data.results;
              });
          }
        };
      }]);
  })();