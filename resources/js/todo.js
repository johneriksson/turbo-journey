var todoApp = angular.module("todoApp", []);

todoApp.controller("todoCtrl", ["$scope", function($scope) {
    
    $scope.items = [
        { label: "Create a todo-list", checked: true },
        { label: "Learn AngularJS", checked: false }
    ];
    
    $scope.doneAdding = function() {
        $scope.addingNew = false;
        
        if($scope.newItem != undefined && $scope.newItem.length > 0) {
            $scope.items.push({
                label: $scope.newItem,
                checked: false
            });   
        }
        
        $scope.newItem = "";
    };
    
    $scope.clear = function() {
        $scope.items = $scope.items.filter(function(item) {
            return !item.checked;
        });
    };
    
}]);