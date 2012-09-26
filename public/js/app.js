function EmailCtrl($scope, $http) {
  $scope.error = false;

  $scope.NotifyMe = function (){
    $http.post('/prospects', { email: $scope.email})
      .success(function(){
        $scope.email = '';
      })
      .error(function(){
        $scope.error = true;
      });
  }
}