var app = angular.module('viewsApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/todo', {
      controller: 'TodoController',
      templateUrl: 'todo.html'
    })
    .when('/filter', {
      controller: 'FilterController',
      templateUrl: 'filter.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('Todo', function () {
  return [{text: 'Ser super heroico con AngularJS', done: true},
          {text: 'Aprender AngularJS', done: false}];
});

app.factory('Filter', function () {
  return [
  {
    name:'Ana', lastName: 'Guzman', motherName: 'Guzman', firstDay: new Date(),
    salary: 12000, phone:'5587687687', bonus: 1.456789
  },
  {
    name:'Adrian', lastName: 'Romero', motherName: 'Paez', firstDay:  new Date(),
    salary: 12000, phone:'5512345678', bonus: 9.654321
  },
  {
    name:'Rodolfo', lastName: 'Solares', motherName: 'Madero', firstDay:  new Date(),
    salary: 14000, phone:'5587654321', bonus: 7.333333
  },
  {
    name:'Manuel', lastName: 'Perez', motherName: 'Solin', firstDay:  new Date(),
    salary: 11000, phone:'5518273645', bonus: 5.272727
  },
  {
    name:'Dana', lastName: 'Roman', motherName: 'Herrera', firstDay:  new Date(),
    salary: 20000, phone:'5581726354', bonus: 1.444444
  },
  {
    name:'Alejandro', lastName: 'Mena', motherName: 'Morales', firstDay:  new Date(),
    salary: 5000, phone:'5512312312', bonus: 12.989898
  }
  ];
});

app.controller('TodoController', function($scope, Todo) {
  $scope.todos = Todo;

  /**
   * Agrega una nueva tarea si el texto del input no esta vacio
   */
  $scope.addTodo = function() {
    if ($scope.todoText) {
      $scope.todos.push({text: $scope.todoText, done: false});
      $scope.todoText = '';
    }
  };

  /**
   * Retorna las tareas que aun no se han marcado
   * @return {number}
   */
  $scope.remaining = function() {
    var count = 0;

    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  /**
   * Elimina las tareas que ya estan completadas
   */
  $scope.remove = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];

    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) {
        $scope.todos.push(todo);
      }
    });
  };
});

app.controller('FilterController', function($scope, Filter) {
  $scope.employees = Filter;

  $scope.orderByExample = function(param) {
    $scope.selectedOrder = param;
  }
});