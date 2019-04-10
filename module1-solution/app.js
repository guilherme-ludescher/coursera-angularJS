(function () {
'use strict';

angular.module('LunchCheck', [])

// .controller('NameCaculatorController', function ($scope) {
//   $scope.name = "";
//   $scope.totalValue = 0;

//   $scope.displayNumeric = function () {
//     var totalNameValue = calculatNumericForString($scope.name);
//     $scope.totalValue = totalNameValue;
//   };


//   function calculatNumericForString(string) {
//     var totalStringValue = 0;
//     for (var i = 0; i < string.length; i++) {
//       totalStringValue += string.charCodeAt(i);
//     }

//     return totalStringValue;
//   }

// });

  .controller ('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "qualquer coisa";

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

    $scope.checkTooMuch = function () {
      console.log($scope.lunch);
      var nDishes = countDishes($scope.lunch);
      sayMessage(nDishes);
      
      console.log("Checked");
      
    }

    // var countDishes = function (lunch) {

    //   if (lunch != null){
    //     var dishesArray = lunch.split(',');
    //     return dishesArray.length;
    //   }
    //   else {
    //     return 0;
    //   }
      
    // }
  }

  var countDishes = function (lunch) {
    console.log("lunch="+lunch);
    if (lunch != null && lunch != ""){
      var dishesArray = lunch.split(',');
      return dishesArray.length;
    }
    else {
      return 0;
    }
  }

})();
