angular
  .module("PeterApp")
  .controller("MainController", MainController)

  function MainController($scope, $http, $state, $timeout) 
  { 
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    // $scope.firstVid = 'https://www.youtube.com/embed/gEt4u1C7F-k?ecver=1';
    $scope.secondVid = 'https://www.youtube.com/embed/ZZEc7B2rALM?ecver=1';
    $scope.thirdVid = 'https://www.youtube.com/embed/ff7nudbAKTc?ecver=1';
    $scope.fourthVid = 'https://www.youtube.com/embed/wsJ06bW4nsc?ecver=1';
    $scope.fifthVid = 'https://www.youtube.com/embed/luiFz9zeRTI?ecver=1';
  }