/// <reference path="../_references.js" />
app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('home');
    var about = {
        name: 'about',
        templateUrl: '/testing/Home/About',
        url: '/testing/about'
    };

    var home = {
        name: 'home',
        url: '/testing/home',
        templateUrl: '/testing/Home/Index'
    };
      
    var contact = {
        url: '/testing/contact',
        templateUrl: '/testing/Home/Contact',
        name : 'contact'
    };

    var register = {
        name: 'register',
        templateUrl: '/testing/Account/Register',
        url: '/testing/register'
    };

    var login = {
        name: 'login',
        templateUrl: '/testing/Account/Login',
        url: '/testing/login'
    };

    //Customer Registration
    var custReg = {
        name: 'customerRegistration',
        templateUrl: '/testing/Customer/Index',
        url: '/testing/customerRegistration'
    };
    $stateProvider.state(custReg);

    $stateProvider.state(about);
    $stateProvider.state(register);
    $stateProvider.state(home);
    $stateProvider.state(contact);
    $stateProvider.state(login);

});