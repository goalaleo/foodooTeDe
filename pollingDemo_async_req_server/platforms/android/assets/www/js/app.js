var pollingApp = angular.module('pollingApp', ['ionic']);

pollingApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
// End of pollingApp.run

pollingApp.controller('MainController', ['$scope', 'ordersService', function($scope, ordersService) {

    var promise = ordersService.getOrders();

    promise.then(function(data) {
        $scope.orders = data;
        console.log($scope.orders);
    });
}]);
// pollingApp.MainController end


pollingApp.service('ordersService', ['$http', '$q', function($http, $q) {
    var deferred = $q.defer();
    $http.get("https://fodoo.herokuapp.com/orders.json").then(function(data) {
        deferred.resolve(data);
    });

    this.getOrders = function() {
        return deferred.promise;
    }
}]);
