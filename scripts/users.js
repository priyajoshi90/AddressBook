angular.module("addressbook", [])
		.controller("users", function($scope){
			$scope.persons = [{name: "Priya", contact: "9876787656", address: "sector 22"}];
			$scope.addDetails = function(){
					$scope.persons.push({name: $scope.nameText, contact: $scope.contactText, address: $scope.addressText});
					$scope.nameText="";
					$scope.contactText="";
					$scope.addressText="";
			};
		});