app.controller("bombcontroller", function ($scope, bombfactory) {
    $scope.bomb = function () {
        if ($scope.number.toString().length == 10) {
            if ($scope.count >= 1 && $scope.count <= 20) {
                for (let i = 0; i < $scope.count; i++) {
                    var promise = bombfactory.naptol($scope.number);
                }

            } else {
                alert("Count should be less than 20!");

            }
        }
        else{
            alert("Enter number properly!");
            console.log($scope.number.toString().length);
        }
    }
});
