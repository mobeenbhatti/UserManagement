app.service('userService', function userService($http) {
  var self = this;

  self.getUsers = function() {
      return $http.get('server/rest.php')
	  .then(function(response) {

        return response.data;
      });
    }
	
	self.deleteUser = function(userid) {
	return $http.delete("server/rest.php?id="+ userid)
					.success(function (data, status) {
				return data;
					}) 
					.error(function (data, status) {
			   return data;
            });
       }
	   
	   
	   
	   self.getUserByID = function(userid){
		   return $http.get("server/rest.php?id=" + userid)
				.then(function (response) {
				//console.log(response.data);
				return response;
				});
		   
		   
	   }
	   
	     self.addUser = function(data,config){
		   return     $http.post('server/rest.php', data,config)
            .success(function (data, status, headers, config) {
                
				return data;
			   
            })
            .error(function (data, status, header, config) {
			return data;
            });
		   
		   
	   }
	   self.getData = function(){
		   return $http.get("http://localhost:61526/api/student")
		   .then(function (response) {
			   return response.data;
		   });
	   }
	   
	   
});
