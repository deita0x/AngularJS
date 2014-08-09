function TodoController($scope) {
  $scope.todos = [{text: 'Ser super heroico con AngularJS', done: true},
                 {text: 'Aprender AngularJS', done: false}];

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
}