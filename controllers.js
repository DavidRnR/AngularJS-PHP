var empleadoControllers = angular.module('empleadoControllers', []);

empleadoControllers.controller('EmpleadoListadoCtrl', ['$scope','$http', function ($scope,$http){
  function empleados() {
    $http.get('http://localhost/proyectos/AngularJS-PHP/api/?a=listar').then(function (r) {
      $scope.empleados = r.data;
    });
  }
  empleados();

  function profesiones() {
    $http.get('http://localhost/proyectos/AngularJS-PHP/?a=profesiones').then(function (r) {
      $scope.profesiones = r.data;
    });
  }
  profesiones();
}]);

empleadoControllers.controller('EmpleadoVerCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {

}]);
