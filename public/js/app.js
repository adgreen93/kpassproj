var app = angular.module('kidsApp', []);



app.controller('mapController2', function PostsCtrlAjax($scope, $http) {

    $http.get('js/locationsResponse.json').then(function(response) {
        $scope.locations = response.data.data;
   
        console.log($scope.locations)
       
 	$scope.clickAlert = function clickAlert() {
      alert('it worked!')
    };

    });

  });
