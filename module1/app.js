(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope", "$filter"];

function LunchCheckController ($scope, $filter) {

  $scope.itemListValue = "";
  $scope.message = "";
  $scope.messageColor = "black"
  $scope.itemCount = 0;

  $scope.checkItems = function() {
    var itemList = $scope.itemListValue.split(',');
    var validItemCount = 0;
    var msg = "";
    var color;

    for (var i=0; i < itemList.length; i++) {
      if ( itemList[i].length > 0 ) {
        validItemCount++;
      }
    }

    if ( $scope.itemListValue.length == 0 ) {
      msg = "Please enter data first";
      color = "red";
    } else if ( validItemCount < 4 ) {
      msg = "Enjoy!";
      color = "green";
    } else {
      msg = "Too much!";
      color = "green";
    }

    $scope.message = msg;
    $scope.messageColor = color;
    $scope.itemCount = validItemCount;
  }
}

})();
