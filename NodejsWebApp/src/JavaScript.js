const urlBase = 'https://jsonplaceholder.typicode.com/posts';

angular.module('app', [])
    .controller('appCtrl', function ($scope, $http) {
        $scope.titulo = 'Mantenimiento';

        $scope.posts = [];
        $scope.estado = "add";


        $scope.get = function () {
            $http({
                method: 'GET',
                url: urlBase
            }).then(function (d) {
                $scope.posts = d.data;
                $scope.OrdenarLista();
            }, function (error) {

            });
        }
        $scope.OrdenarLista = function () {
            $scope.ListaFinal = [];
            angular.forEach($scope.posts, function (value, key) {
                if (value.body.includes('dolorem')) {
                    $scope.ListaFinal.push(value);
                } else if (value.body.includes('aut')) {
                    $scope.ListaFinal.push(value);
                } else if (value.body.includes('doloremque')) {
                    $scope.ListaFinal.push(value)
                }
            })
            $scope.cantidad = $scope.ListaFinal.length;
        }



        $scope.get();
        $scope.add = function () {

            console.log($scope.app);
            $http({
                method: 'POST',
                url: urlBase,
                data: $scope.app

            }).then(function (d) {
                console.log(d);
                $scope.app = { nombre: '', primer_apellido: '', segundo_apellido: '', edad: '', estudiante_id: 0 }
                $scope.get();
            }, function (error) {

            });

        }
        $scope.get();
        $scope.delete = function (d) {
            $scope.app = d;
            console.log(d);
            $http({
                method: 'DELETE',
                url: urlBase,
                data: d,
                headers: {
                    'Accept': 'application/vnd.hal+json',
                    'Content-Type': 'application/json'
                },

            }).then(function (d) {
                console.log(d);
                $scope.app = { nombre: '', primer_apellido: '', segundo_apellido: '', edad: '', estudiante_id: 0 }
                $scope.estado = "add";
                $scope.get();
            }, function (error) {

            });


        }
        $scope.initObjeto = function (d) {
            $scope.app = d;
            $scope.estado = "edit";
        }
        $scope.reset = function (d) {
            $scope.app = { nombre: '', primer_apellido: '', segundo_apellido: '', edad: '', estudiante_id: 0 }

            $scope.estado = "add";
        }
        $scope.edit = function () {

            $http({
                method: 'PUT',
                url: urlBase,
                data: $scope.app,
                headers: {
                    'Accept': 'application/vnd.hal+json',
                    'Content-Type': 'application/json'
                },

            }).then(function (d) {
                console.log(d);
                $scope.app = { nombre: '', primer_apellido: '', segundo_apellido: '', edad: '', estudiante_id: 0 }
                $scope.estado = "add";
                $scope.get();
            }, function (error) {

            });
        }


     


    })
