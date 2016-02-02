var todoApp = angular.module("todoApp", []);

todoApp.controller("todoCtrl", ["$scope", function($scope) {
    
    $scope.items = [
        { label: "Create a todo-list", checked: true },
        { label: "Learn AngularJS", checked: false }
    ];
    
    $scope.addItem = function() {
        if($scope.newItem != undefined && $scope.newItem.length > 0) {
            $scope.items.push({
                label: $scope.newItem,
                checked: false
            });
            $scope.newItem = "";
        }
    };
    
    
}]);