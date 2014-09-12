angular.module('directiveApp', [])
  .controller('directiveController', function($scope) {
    $scope.textOne = {title: 'Directive', subTitle: 'AngularJS'};
    $scope.textTwo = {title: 'Directive Two', subTitle: 'AngularJS Two'};
  })
  .directive('myHeader', function () {
    return {
      restrict: 'E',
      scope: {
        varText: '=text'
      },
      templateUrl: 'my-header.html'
    };
  })
  