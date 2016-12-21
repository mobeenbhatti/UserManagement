	
		app.controller("userAddController", function($scope,$http,$location,$stateParams,userService) {
			
				$scope.loadUser = function (index){
			
			userService.getUserByID(index).then(function(response){
				$scope.uid = response.data[0].u_id;
				$scope.name = response.data[0].Name;
				$scope.email = response.data[0].Email;
				$scope.age = parseInt(response.data[0].Age);
				$scope.gender = response.data[0].Gender;
				$scope.selectedQualification = response.data[0].Degree;
				
			});
			
			
		}	
			
			 
			  if($stateParams.id){
				//console.log("else");
				   //console.log($stateParams.id);
				   
				   $scope.loadUser($stateParams.id);
			  }
			 
		$scope.qualification=[{degree:"Matric"},{degree :"Intermediate"}];	
			$scope.add=function(form){

			if(form.$valid)
			{
				  var data = $.param({
                name: $scope.name,
                email: $scope.email,
				age: $scope.age,
                qualification: $scope.selectedQualification,
				gender: $scope.gender,
				uid: $scope.uid
            });
		
 var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
			
			userService.addUser(data,config).then(function(data){
					$scope.result = data;

			    $location.path( "users" );
			});

			}
			else
			{
			$scope.result = "Form is not valid.";
			}
				
			}
			
			$scope.sortBy = function(x) {
			$scope.sortByMe = x;
  }
		  
		  
		});