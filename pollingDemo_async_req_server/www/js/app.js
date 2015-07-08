var pollingApp = angular.module('pollingApp', ['ionic', 'ngResource']);

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
//pollingApp.run end

pollingApp.controller('MainController', ['$scope', 'Order','$timeout', function($scope, Order,$timeout) {
    // Get all orders
    (function tick() {
        $scope.orders = Order.query(function() {
            $timeout(tick, 1000);
        });
        $scope.orders.$promise.then(function(result) {
            $scope.orders = result;
            console.log($scope.orders);
        });
    })();


    //NO POLLING
    // $scope.orders = Order.query();
    // $scope.orders.$promise.then(function(result) {
    //     $scope.orders = result;
    //     console.log($scope.orders);
    // });
    //NO POLLING END
}]);
// pollingApp.MainController end


pollingApp.factory('Order', ['$resource', function($resource) {
    return $resource("https://fodoo.herokuapp.com/orders.json");
}]);
// pollingApp.Order end
