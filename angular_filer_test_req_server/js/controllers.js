var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.controller('SimpleController', ['$scope', 'simpleFactory', function($scope, simpleFactory) {
    $scope.customers = simpleFactory.getCustomers();

    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
    }
}]);

demoApp.factory('simpleFactory', function() {
    var factory = {};
    var customers = [{
        name: 'Dave Jones',
        city: 'Phoenix'
    }, {
        name: 'Jamie Riley',
        city: 'Atlanta'
    }, {
        name: 'Heedy Wahlin',
        city: 'Chandler'
    }, {
        name: 'Thomas Winter',
        city: 'Seattle'
    }, {
        name: 'Leo Kiiski',
        city: 'Helsinki'
    }];
    factory.getCustomers = function() {
        return customers;
    }
    return factory;

});

demoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../Partials/View1.html',
            controller: 'SimpleController'
        })
        .when('/view2', {
            templateUrl: '../Partials/View2.html',
            controller: 'SimpleController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
