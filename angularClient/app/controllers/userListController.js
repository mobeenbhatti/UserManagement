
		app.controller("userListController", function($scope,$http,$location,userService) {
		
		$scope.getUser = function(){
			
		    userService.getUsers().then(function (response) {
		        console.log(response);
                          $scope.userList = response;
    });
			
		
			
		  }
		 
		  $scope.init=function(){
			$scope.getUser();

		  }
		  
		  
		  
			 $scope.remove = function(index){
				 userService.deleteUser(index).then(function(response) {
                          $scope.result = response;
                });
				$scope.getUser();
            }

			$scope.edit = function(index){
				$location.path("/addUser/" + index);	
			}
			
			
		
		});