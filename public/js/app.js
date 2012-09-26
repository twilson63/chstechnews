function EmailCtrl($scope, $http) {
  $scope.error = false;
  $scope.success = false;

  $scope.NotifyMe = function (){
    $http.post('/prospects', { email: $scope.email})
      .success(function(){
        $scope.success = true;
        $scope.email = '';
      })
      .error(function(){
        $scope.error = true;
      });
  }
}