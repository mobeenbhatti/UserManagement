
		app.controller("userListController", function($scope,$http,$location,userService) {
		
		$scope.getUser = function(){
			
			  userService.getUsers().then(function(response) {
                          $scope.userList = response;
    });
			
		
			
		  }
		  $scope.getsData = function(){
				userService.getData().then(function (response) {
					console.log(response);
					
				});
			}
		  $scope.init=function(){
			$scope.getUser();
			$scope.getsData();
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