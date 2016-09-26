PersonalInfoApp.controller("MainController", ["$scope", function($scope) {

	$scope.Fname = "";
	$scope.Lname = "";
	$scope.email = "";
	$scope.accept = "";
	$scope.phone = ""; 
	$scope.address = "";
	$scope.city = "";
	
	$scope.names = ["USA", "Canada", "Mexico"];
	
	$scope.state = [ "AL", "AK", "AZ", "AR", "CA", "CO", 
					 "CT", "DE", "FL", "GA", "HI", "ID", "IL", 
					 "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
					 "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", 
					 "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", 
					 "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", 
					 "WA", "WV", "WI", "WY"];

}]);



 