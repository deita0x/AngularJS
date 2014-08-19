var myApp = angular.module('myApp', []);

myApp.factory('Fabrica', function() {
  var service = {
    objeto: {message: 'Saludos desde la fabrica!'},
    msjNuevo: function(msj) {
      service.objeto.message = msj;
    },
    msjInicial: function() {
      service.objeto['message'] = 'Saludos desde la fabrica!';
    }
  };
  return service;
});

myApp.controller('ControllerOne', function($scope, Fabrica) {
  $scope.nuevo = function() {
    Fabrica.msjNuevo($scope.newMessage);
  };

  $scope.data = Fabrica.objeto;
});

myApp.controller('ControllerTwo', function($scope, Fabrica) {
  $scope.nuevo = function() {
    Fabrica.msjNuevo($scope.newMessage);
  };

  $scope.data = Fabrica.objeto;
});

myApp.controller('ControllerThree', function($scope, Fabrica) {
  $scope.reset = function() {
    Fabrica.msjInicial();
  };
});