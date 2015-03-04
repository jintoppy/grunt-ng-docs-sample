(function(angular){
'use strict';

/**
 * @ngdoc service
 * @name myapp.MyService
 *
 * @description
 * This is a custom service
 *
 * @example
   <example module="myservicesample">
     <file name="index.html">
		<div ng-controller="ServiceSampleCtrl">
			<button ng-click="getUsers()">Get Users</button>
			{{users | json}}
		</div>
			

     </file>
     <file name="script.js">
     	angular.module("myservicesample", ['myapp'])
     		.controller("ServiceSampleCtrl",["$scope", "MyService", 
	     		function($scope, MyService){
					  $scope.getUsers=function(){
						$scope.users = MyService.getUsers();
					  };
					  

	     		}]);
     </file>
   </example>
 */
	angular.module('myapp')
		.service('MyService', [function () {
			var users = [
				{
					name: 'User1',
					age: 10
				},
				{
					name: 'User2',
					age: 20
				}
			];

			/**
			 * @ngdoc method
			 * @name getUsers
			 * @methodOf myapp.MyService
			 * @description
			 * This method will return the list of users
			 *
			 * @param {Boolean=} shouldLog Boolean flag to indicate whethere
			 						the function call should be logged or not

			 * @returns {Array} List of Users
			*/
			this.getUsers = function(shouldLog){
				if(shouldLog){
					console.log("inside getUsers");

				}
				return users;
			};
		}]);
})(angular);