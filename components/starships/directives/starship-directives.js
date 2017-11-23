(function() {
  'use strict';

  angular
    .module('swapi')
    .directive('starships', ['StarshipService', function (StarshipService) {
        return {
          restrict: 'E',
          template: '<ul><li ng-repeat="ship in ships">{{ship.name}}</li></ul>',
          link: function ($scope) {
            StarshipService.fetchShips()
              .then(function (ships) {
                  $scope.ships = ships;
              });
          }
        };
    }]);
})();
