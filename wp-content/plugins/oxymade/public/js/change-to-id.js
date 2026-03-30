window.addEventListener("load", function() {

	 let setCurrentClass = $scope.iframeScope.setCurrentClass;
	 
	 $scope.iframeScope.setCurrentClass = (prop) => {
			
		 setCurrentClass(prop);
			
		 if (typeof $scope.iframeScope.classes[prop] == "undefined") {
			// console.log(prop);
		 } else {
			// console.log(prop);
			 
			if ($scope.iframeScope.classes[prop]["original"]["selector-locked"] == "true") {

				 setTimeout(() => {
					 $scope.iframeScope.switchEditToId(true);
				 }, 1500);

			  }
			  else {
				 return setCurrentClass(prop);
			  }
		 }
		 
	  }
	  
	});