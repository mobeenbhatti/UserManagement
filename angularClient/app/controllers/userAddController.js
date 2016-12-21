	
		app.controller("userAddController", function($scope,$http,$location,$stateParams,userService) {
			
				$scope.loadUser = function (index){
			
				    userService.getUserByID(index).then(function (response) {
				        console.log(response);
				$scope.uid = response.data.u_Id;
				$scope.name = response.data.Name;
				$scope.email = response.data.Email;
				$scope.age = parseInt(response.data.Age);
				$scope.gender = response.data.Gender;
				$scope.selectedQualification = response.data.Degree;
				
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
			    //var data = { "Name": 3, "Email": "Test@Test.com", "Age": 67,"Degree":"Matric","Gender": "male", "u_Id": ""};
			    var data = {
			        "Name": $scope.name,
			        "Email": $scope.email,
			        "Age": $scope.age,
			        "Degree": $scope.selectedQualification,
			        "Gender": $scope.gender,
			        "u_Id": $scope.uid
			    }
 var config = {
                headers : {
                    'Content-Type': 'application/json'
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