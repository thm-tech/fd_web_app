define(function() {
    'use strict';
    function personalCtrl($scope) {
        $scope.name = 'this is personal';
    }
    personalCtrl.$inject = ['$scope'];
    return personalCtrl;
});