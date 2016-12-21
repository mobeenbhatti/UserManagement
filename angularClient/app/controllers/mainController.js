		app.controller("mainController", function($scope,userService) {
		
		
		 $scope.init = function(){
  userService.getUsers().then(function(response) {
				 
                          $scope.TotalRegisteredUsers = response.length;
	});
		  }
		  
			
		
		});