(function() {
    'use strict';
  
    angular
      .module('swapi')
      .directive('starplanets', ['StarplanetService', function (StarplanetService) {
          return {
            restrict: 'E',
            templateUrl: './views/ships.html',
            link: function ($scope) {
              StarplanetService.fetchPlanets()
                .then(function (planets) {
                    $scope.planets = planets;
                });
            }
          };
      }]);
  })();
  