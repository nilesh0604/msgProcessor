'use strict';

/**
 * @ngdoc function
 * @name msgProcessorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the msgProcessorApp
 */
angular.module('msgProcessorApp')
    .controller('MainCtrl', function($scope) {
        var selectedMsgIndex;

        $scope.gifts = ['Pen', 'Perfume', 'Chocolates', 'Watch', 'Teddy', 'Soft Toys'];

        $scope.msgs = [{
            'id': 1,
            'msgStatus': 1,
            'type': 1,
            'name': 'Donald',
            'date': '',
            'babyName': '',
            'gift': null
        }, {
            'id': 2,
            'msgStatus': 1,
            'type': 2,
            'name': 'Jack',
            'date': '',
            'babyName': '',
            'gift': null
        }, {
            'id': 3,
            'msgStatus': 2,
            'type': 1,
            'name': 'John',
            'date': '',
            'babyName': '',
            'gift': null
        }, {
            'id': 4,
            'msgStatus': 2,
            'type': 2,
            'name': 'Jane',
            'date': '',
            'babyName': '',
            'gift': null
        }, ];

        $scope.showModal = function(index) {
            selectedMsgIndex = index;
            $scope.selectedMsg = $scope.msgs[index];
        };

        $scope.saveMsg = function() {
            if ($scope.selectedMsg.gift) {
                $scope.selectedMsg.msgStatus = 2;
                $scope.msgs[selectedMsgIndex] = $scope.selectedMsg;
            }
        };

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });