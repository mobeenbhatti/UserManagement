app.service('userService', function userService($http) {
  var self = this;

  self.getUsers = function() {
      return $http.get('http://localhost:61526/api/user')
	  .then(function(response) {

        return response.data;
      });
    }
	
	self.deleteUser = function(userid) {
	    return $http.delete("http://localhost:61526/api/user?id=" + userid)
					.success(function (data, status) {
				return data;
					}) 
					.error(function (data, status) {
			   return data;
            });
       }
	   
	   
	   
	   self.getUserByID = function(userid){
	       return $http.get("http://localhost:61526/api/user?id=" + userid)
				.then(function (response) {
				//console.log(response.data);
				return response;
				});
		   
		   
	   }
	   
	     self.addUser = function(data,config){
	         return $http.post('http://localhost:61526/api/user', JSON.stringify(data), config)
            .success(function (data, status, headers, config) {
                
				return data;
			   
            })
            .error(function (data, status, header, config) {
			return data;
            });
		   
		   
	     }

	 
	
	   
	   
});
