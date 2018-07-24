
    angCtrlCom.controller('loginController',
        function loginController($scope, userService, $window) {


            $scope.master = {};

            $scope.onFormSubmit = function (credentials) {

                $scope.master = angular.copy(credentials);

                    console.log($scope.master.username +' .... '+$scope.master.password);

                    var isUserAuthenticated = userService.api_authenticate($scope.master.username, $scope.master.password);
                    if(isUserAuthenticated){
                            console.log('isUserAuthenticated '+isUserAuthenticated);

                           // since the user has been successfully logged, redirect them to user details page

                           $window.location.href = '/userDetails';
                    }else
                    {
                            console.log("Invalid username or password");
                    }
            };


    });

