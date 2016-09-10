var app = angular.module('kidsApp', []);



app.controller('mapController2', function PostsCtrlAjax($scope, $http) {

    $http.get('js/locationsResponse.json').then(function(response) {
		var values = response.data.data;
		$scope.cleanmacros = values

	var bucket = [];
	var macros = [];
	var insides = [];
	var hoods = [];

	var a;
	var b;
	var c;

	for (a = 0; a < values.length; a++) {

		bucket.push(values[a].borough.name)
		
		for (b = 0; b < values[a].mappings.length; b++) {
			
			bucket.push(values[a].mappings[b].macro.name)

			for (c = 0; c < values[a].mappings[b].neighborhoods.length; c++) {
			
			bucket.push(values[a].mappings[b].neighborhoods[c].name)

			}		
		}
	}

	console.log(bucket);
	       
 	$scope.popClock = function popClock() {
      document.getElementById("boro-level").style.color = "green";
    };

    });

  });
