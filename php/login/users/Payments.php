<?php
	session_start();

	if (isset($_SESSION['loggedin']) && ($_SESSION['loggedin'] == true) && ($_SESSION['Lvl'] == 3)) {
	} else {
	   //echo "Esta pagina es solo para usuarios registrados.<br>";
	   //echo "<br><a href='login.html'>Login</a>";
	   //echo "<br><br><a href='index.html'>Registrarme</a>";
		header("Location: ../../../html/system/login.html");

	exit;
	}

	$now = time();

	if($now > $_SESSION['expire']) {
		session_destroy();

		//echo "Su sesion a terminado,
		//<a href='login.html'>Necesita Hacer Login</a>";
		header("Location: ../../../html/system/login.html");
	exit;
	}
?>

<!DOCTYPE html>
<html>

  <head>
    <title>Pagos</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel='stylesheet' href="https://material.angularjs.org/latest/angular-material.min.css" type='text/css'/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel='stylesheet' href="https://material.angularjs.org/latest/angular-material.min.css" type='text/css'/>

    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular.js"></script>
    <!--<script type="text/javascript" src="js/libraries/angular-animate.min.js"></script>-->
    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-animate.min.js"></script>
    <!--<script type="text/javascript" src="js/libraries/angular-aria.min.js"></script>-->
    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-aria.min.js"></script>
    <!--<script type="text/javascript" src="js/libraries/angular-material.min.js"></script>-->
    <script type="text/javascript" src="https://material.angularjs.org/latest/angular-material.min.js"></script>
    <!--<script type="text/javascript" src="js/libraries/angular-messages.min.js"></script>-->
    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-messages.min.js"></script>
    <!--<script type="text/javascript" src="js/libraries/angular-route.min.js"></script>-->
    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-route.min.js"></script>
    <!--<script type="text/javascript" src="js/libraries/angular-sanitize.min.js"></script>-->
    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-sanitize.min.js"></script>
    <!--https://code.angularjs.org/1.4.8/angular-touch.js-->
    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-touch.js"></script>
  </head>
  <body id="Players">

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand"><?php echo $_SESSION['username']; ?></a>
        </div>
        <ul class="nav navbar-nav">
          <li><a class="glyphicon glyphicon-search" href="#Players"> Jugadores</a></li>
          <li><a  class="glyphicon glyphicon-off" href=../logout.php> Cerrar Sesion</a>
        </ul>
    </nav>
    <br>
    <br>
    <br>
    <div id="Payments" class="container" ng-app="ListPlayers" ng-controller="PlayersController">
      <div class="">
        <span class="glyphicon glyphicon-search"></span>
        <input type="text" ng-model="info.IDPlayer" class="form-control" ng-change="find()" placeholder="ID de Jugador" required>
      </div>

      <table class="" align="right">
        <thead class="thead-default">
          <tr>
            <th>Total a pagar</th>
            <th>Debe</th>
            </tr>          
        </thead>
        <tbody>
          <tr ng-repeat="foundplayer in foundplayers">
            <td>{{foundplayer.CostInscription}}</td>
            <td>{{foundplayer.Debt}}</td>
            </tr>
        </tbody>
      </table> 
      <div>
        <br>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>ID de Jugador</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Fecha de Pago</th>
              <th>Pagos</th>
            </tr>          
          </thead>
          <tbody>
            <tr ng-repeat="player in players | filter:info.IDPlayer">
              <td>{{ player.ID}}</td>
              <td>{{ player.nom_J}}</td>
              <td>{{ player.apellido_pj}}</td>
              <td>{{ player.apellido_Mj}}</td>
              <td>{{ player.PayDate}}</td>
              <td>{{ player.Amount}}</td>
            </tr>
          </tbody>
        </table> 
      </div>
       
      <br>
      <div align="center">
        <button type="submit" name="submit" value="submit" class="btn btn-success" ng-click="showPayment($event)">Realizar Nuevo Pago</button>
      </div>
      <br>
      <br>
      <br>
    </div>

    <script type="text/javascript">
      var app = angular.module('ListPlayers', ['ngMaterial']);
      app.controller('PlayersController', function($scope, $http, $mdDialog) {
        
      //muestra el jugador que se busca
        $scope.find = function(){
          finding($http,$scope,$scope.info);
        }
      //----------------------------------------------

      //obtiene la lista de jugadores
        $http.get("GetPlayers.php").then(function(response) {
          $scope.players = response.data;
        });
      //--------------------------------

      //muestra la seccion donde se introducen los pagos
        $scope.showPayment = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'DoPayment.php',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
        }
      //--------------------------------------------------

      });

      function finding($http,$scope,IDPlayer){
        //alert('Variable enviada:' + JSON.stringify(info));
        $http({
          method  : 'POST',
          url     : 'FindPlayer.php',
          data    : IDPlayer
        }).then(function(response) {
            $scope.foundplayers = response.data;
            console.log($scope.foundplayers);
        });
      }
    </script>
  </body>
</html>