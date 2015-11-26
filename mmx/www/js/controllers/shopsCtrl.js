define(function() {
    'use strict';
    function shopsCtrl($scope) {
        $scope.name = 'this is shop';
    }
    shopsCtrl.$inject = ['$scope'];
    return shopsCtrl;
});