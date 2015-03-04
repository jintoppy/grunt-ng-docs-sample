(function(angular){
'use strict';

/**
 * @ngdoc controller
 * @name myapp.controller:MyCtrl
 *
 * @description
 * This is MyCtrl description
 */
	angular.module('myapp')
		.controller('MyCtrl', ['MyService',
			function (MyService) {
			var model = this;

			model.users = MyService.getUsers();

			/**
			 * @ngdoc method
			 * @name selectUser
			 * @methodOf myapp.controller:MyCtrl
			 * @description
			 * This method will set the selected user
			 *
			 * @param {Object} user user object to be set as the selected user

			*/
			model.selectUser = function(user){
				model.selectedUser = user;
			}
		}]);
})(angular);
