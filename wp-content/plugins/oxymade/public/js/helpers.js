window.addEventListener("load", function() {
	$scope.oxymadeAddHelpers = function(e) {
		 $scope.iframeScope.addComponentFromSource(atob(e), false, "", "made");
		 };
  });