function FiltersController($scope) {
  $scope.employees = [
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

  $scope.orderByExample = function(param) {
    $scope.selectedOrder = param;
  }
}
