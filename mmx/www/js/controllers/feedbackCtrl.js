define(['angular','ionic'], function(angular,ionic) {
    'use strict';
    function feedbackCtrl($rootScope,$scope,$http,$ionicFrostedDelegate,$ionicScrollDelegate) {
        var self = this;
        self.feedback = $scope.feedback = {};
        self.feedback.message = '';
        var msgOptions = [
            {content: '<p>亲爱的用户,您好,欢迎来到意见反馈中心</p>'},
            {content: '<p>意见反馈1</p>'},
            {content: '<p>请输入您要反馈的内容</p>'},
            {content:  '<p>意见反馈2</p>'},
            {content:  '<p>能说人话吗?</p>'},
            {content:  '<p>人话</p>'}
        ];
        var messageIter = 0;
         self.feedback.messages = msgOptions.slice(0, msgOptions.length);

         self.feedback.add = function() {
           var nextMessage = msgOptions[messageIter++ % msgOptions.length];
           self.feedback.messages.push(angular.extend({}, nextMessage));

           // Update the scroll area and tell the frosted glass to redraw itself
           $ionicFrostedDelegate.update();
           $ionicScrollDelegate.scrollBottom(true);
         };

         self.feedback.sendMsg = function() {
            
         };
    }
    feedbackCtrl.$inject = ['$rootScope','$scope','$http','$ionicFrostedDelegate', '$ionicScrollDelegate'];
    return feedbackCtrl;
});