'use strict'

var angCtrlCom = angular.module('angCtrlCom', ['ngCookies', 'ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/login',
            {
                templateUrl:'login/loginForm.html',
                controller: 'loginController'
            })
            .when('/userDetails',{
                templateUrl : '/userDetails/userDetails.html',
                controller : 'userDetailsController'
            });

        $locationProvider.html5Mode(true);
    });


