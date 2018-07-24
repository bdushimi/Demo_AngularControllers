
(function () {
    angCtrlCom.factory('userService', function ($cookieStore) {

        // the usersList models the list of users in the db

        var usersList = {
            user: [{
                username: 'bdushimi',
                password: '123',
                firstName: 'Bernard',
                lastName: 'Dushimimana',
                age: 24,
                job: 'Web Developer',
                address: 'Kigali/Kacyiru',
                imgUrl: '../img/pic_angular.jpg'

            }, {
                username: 'Gil',
                password: '1234',
                firstName: 'Gilbert',
                lastName: 'Harerimana',
                age: 24,
                job: 'Mechanical Engineer',
                address: 'Kibuye/Ville',
                imgUrl: '../img/mechanical.jpg'
            }, {
                username: 'cadet',
                firstName: 'cadet',
                lastName: 'Cedric',
                age: 14,
                job: 'High School Student',
                address: 'Butare/Tumba',
                imgUrl: '../img/student.png'
            }]
        };

        var removeUserCookies = function () {
            $cookieStore.remove('authenticatedUser');
        };


        var getUserDetails = function () {

            console.log($cookieStore.get('authenticatedUser'));
            return ($cookieStore.get('authenticatedUser'));
        };



        // returns the user object and the matching status
        var authenticate = function(username, password) {
            for (var i in usersList.user) {
                var user = usersList.user[i];
                if ((user.username == username) && (user.password == password)) {

                    $cookieStore.put('authenticatedUser', user);

                    return true;
                }
            }
            return false;
        };

        return {
            api_authenticate : authenticate,
            api_getUserDetails : getUserDetails,
            api_cleanSession : removeUserCookies
        };
    });

}());