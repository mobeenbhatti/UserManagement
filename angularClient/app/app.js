
var app = angular.module("userApp", ["ui.router"]);
app.config(function($stateProvider){
	$stateProvider
	.state("/",{
		url : "/",
		templateUrl : "view/main.html",
		controller  : "mainController"
		
	})
	.state("users",{
		url : "/users",
		templateUrl : "view/usersList.html",
		controller  : "userListController"
	})
	.state("about",{
		url : "/about",
		templateUrl : "view/about.html",
		controller  : "aboutController"
	})
	.state("login",{
		url : "/login",
		templateUrl : "view/login.html",
		controller  : "loginController"
	})
	.state("addUser",{
		url : "/addUser/:id",
		templateUrl : "view/userAdd.html",
		controller  : "userAddController"
	});
	
});