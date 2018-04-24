(function() {
    'use strict';
                                         
    

var app = angular.module('application', []);//ชื่อโมดูล, โมดูลที่เกี่ยวข้อง(จะกล่าวถึงในภายหลัง) 

    app.controller('myCtrl', function ($scope) {
        $scope.count = 0;
        $scope.myFunc = function() {
          $scope.count++;
        };
       
    });

    app.controller('adminlogin', function ($scope) {
        $scope.adminLog =  {
        };
        $scope.baba = 0;
        $scope.adminStatus = true;
        $scope.adminLog = function() {
            $scope.adminStatus = !$scope.adminStatus;
        };
    });

     app.controller('sociallog', function ($scope) {
        $scope.faceLog = function() {
        
        };
        $scope.googleLog = function() {
        
        };
        $scope.adminSta = false;
        $scope.testy = true
    });


    app.controller('storeController', function ($scope) {
        $scope.sushi = {
            name: 'Maguro',
            price: 200,
            description: "Fat Tuna",
            canPurchase: true
        };
    });

})

(); // Best Practice For Javascript