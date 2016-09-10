var app = angular.module('kidsApp', []);



app.controller('mapController2', function PostsCtrlAjax($scope, $http) {


	// This is where we get the JSON. if this was live, it'd be a real request.
    $http.get('js/locationsResponse.json').then(function(response) {
		var values = response.data.data;
		$scope.cleanmacros = values

	//This was an alternative solution that I left in the code - basically it loops through the JSON, pushing borough names, 
	//macro names, and neighborhood names into an array. the weakness here is that while yes, you get an organized view in the UI
	//this is all it's really goood for. the angular solution is way cleaner and easier to dig through.

	//so this could be a solution if it was completely vanilla javascript.
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

	//this is what that massive array looks like. i had also tested this a few different ways - adding them to different arrays
	//trying to rebuild the object, but for cleanliness it felt that angular was most effective.
	console.log(bucket);
	 
	//this is the function that'll change colors in the UI. it's not smart - it's a once a page load thing. continue to tinker or
	//this and id make it another ng-hide/show most likely.
 	$scope.popClock = function popClock() {
      document.getElementById("boro-level").style.color = "green";
    };

    });

  });
