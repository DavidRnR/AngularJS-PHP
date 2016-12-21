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

  $scope.eliminar = function (id) {
    console.log(id);
    $http.get('http://localhost/proyectos/AngularJS-PHP/api/?a=eliminar&id='+id).then(function () {
      empleados();
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
