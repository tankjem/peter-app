angular
  .module("PeterApp")
  .controller("MainController", MainController)

  function MainController($scope, $http, $state, $timeout) 
  { 
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    
  }