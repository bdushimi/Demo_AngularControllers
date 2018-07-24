
(function () {

    angCtrlCom.controller('userDetailsController',
        function userDetailsController($scope, userService, $window) {

            //query the logged user details
            //this models retrieving info about the user from  their session on server

            $scope.user = userService.api_getUserDetails();

            // remove the user data when they logout
            //this models the destruction of the user session on server
            $scope.onLogout = function () {
                userService.api_cleanSession();

                $window.location.href = '/';
            };



        });

}());

