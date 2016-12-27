var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$scope','$http', function ($scope,$http){
  function empleados() {
    $http.get('http://localhost/proyectos/AngularJS-PHP/api/?a=listar').then(function (r) {
      $scope.empleados = r.data;
    });
  }
  empleados();

  function profesiones() {
    $http.get('http://localhost/proyectos/AngularJS-PHP/api/?a=profesiones').then(function (r) {
      $scope.profesiones = r.data;
    });
  }
  profesiones();
  $scope.eliminar = function (id) {
    if(confirm('Está seguro desea eliminar este empleado?')) {
      $http.get('http://localhost/proyectos/AngularJS-PHP/api/?a=eliminar&id='+id).then(function () {
        empleados();
      });
    }
  }

  $scope.registrar = function () {
  var nuevoEmpleado = {
      Correo : $scope.Correo,
      Nombre: $scope.Nombre,
      Apellido: $scope.Apellido,
      Sexo: $scope.Sexo,
      Sueldo: $scope.Sueldo,
      Profesion_id: $scope.Profesion_id,
      FechaNacimiento: $scope.FechaNacimiento
    }
    console.log(nuevoEmpleado);
    $http.post('http://localhost/proyectos/AngularJS-PHP/api/?a=registrar',nuevoEmpleado).then(function () {
      empleados();
      $scope.Correo = null;
      $scope.Nombre =null;
      $scope.Apellido=null;
      $scope.Sexo=null;
      $scope.Sueldo=null;
      $scope.Profesion_id=null
      $scope.FechaNacimiento=null;
    });
  }
}]);

empleadoControllers.controller('EmpleadoVerCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location,$http) {
  function empleado() {
    $http.get('http://localhost/proyectos/AngularJS-PHP/api/?a=obtener&id='+$routeParams.id).then(function (r) {
      $scope.empleado = r.data;
    });
  }
  empleado();
}]);
