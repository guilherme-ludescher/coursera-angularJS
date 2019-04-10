(function () {
'use strict';

angular.module('LunchCheck', [])

  .controller ('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "Please insert comma separated dishes you usually eat for lunch";

    //activated when button is clicked
    $scope.checkTooMuch = function () {
      console.log($scope.lunch);
      var nDishes = countDishes($scope.lunch);
      sayMessage(nDishes);      
    }

    //defines the message
    var sayMessage = function (nDishes) { 
      if (nDishes <= 0){
        $scope.message = "Please enter data first";
      }
      
      else if (nDishes <= 3){
        $scope.message = "Enjoy!";
      }

      else if (nDishes > 3){
        $scope.message = "Too much!"
      }
    }
  }

  //counts number of dishes if not null
  var countDishes = function (lunch) {
    if (lunch != null && lunch != ""){
      var dishesArray = lunch.split(',');
      return dishesArray.length;
    }
    else {
      return 0;
    }
  }

})();
