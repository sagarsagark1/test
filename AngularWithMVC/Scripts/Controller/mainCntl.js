/// <reference path="../_references.js" />
app.controller('AngularController', function ($scope,$http) {
    debugger;
    $scope.Login = function () {
        debugger;
        $http({
            'url': "/testing/Account/Login",
            'type': "POST",
            'data': $scope.user
        }).then(function (respnse) {
            debugger;
        }, function (err) {
            debugger;
        });
    }
});