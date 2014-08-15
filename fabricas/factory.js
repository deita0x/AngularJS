var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
  return {message: 'Saludos desde la fabrica!'}
});

myApp.controller('ControllerOne', function($scope, Data) {
  $scope.data = Data;
});

myApp.controller('ControllerTwo', function($scope, Data) {
  $scope.data = Data;
});