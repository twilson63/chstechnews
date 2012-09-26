function EmailCtrl($scope, $http) {
  $scope.NotifyMe = function (){
    $http.post('/prospects', { email: $scope.email}).success(function(){
      $scope.email = '';
    });
  }
}