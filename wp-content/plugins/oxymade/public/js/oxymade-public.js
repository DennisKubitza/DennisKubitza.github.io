(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

})( jQuery );

// window.addEventListener("load", function () {
// 
// 	$scope.iframeScope.switchEditToId(true);
// 
// });


//  
//  window.addEventListener("load", function() {
// 	 
// 	 // const myUtilityArray = ["OxyMadeFramework", "OxyMadeHoverStyles"];
// 	 // let switchEditToId = $scope.iframeScope.switchEditToId;
// 	  let setCurrentClass = $scope.iframeScope.setCurrentClass;
// 
// 		
// 		// if ($scope.iframeScope.isEditing("id")) {
// 		// 	console.log("id edit");
// 		// }
// 		
// 	 
// 	 $scope.iframeScope.setCurrentClass = (prop) => {
// 
// 			console.log("step 1");
// 			
// 			setCurrentClass(prop);
// 			
// 			// if ($scope.iframeScope.classes[prop].locked == !0) {
// 			// 	console.log("step x");
// 			// }
// 			// 
// 			// if ($scope.iframeScope.classes[prop].locked == !1) {
// 			// 	console.log("step y");
// 			// }
// 			// 
// 			
// 			
// 			
// 		 if (typeof $scope.iframeScope.classes[prop] == "undefined") {
// 			console.log("undef");
// 			// return switchEditToId(prop);
// 		 } else {
// 			 
// 			console.log("step 2");
// 			
// 			console.log("status below");
// 			console.log($scope.iframeScope.classes[prop].locked);
// 			
// 			console.log("status above");
// 			 
// 			if ($scope.iframeScope.classes[prop].locked) {
// 			console.log("step 3");
// 			  // let parentOfClass = $scope.iframeScope.classes[prop]["parent"];
// 			  // let locked = myUtilityArray.includes(parentOfClass);
// 			  
// 			  // if (locked) {
// 				  // setTimeout(() => {
// 				 console.log("lockeds");
// 				 // return switchEditToId(prop);
// 				 setTimeout(() => {
// 				 	// $scope.iframeScope.switchEditToId(true);
// 				 }, 2000);
// 				 // }, 200);
// 				 console.log("locked");
// 			  }
// 			  else {
// 				 console.log("not lockeds");
// 			    return setCurrentClass(prop);
// 				 console.log("not locked");
// 			  }
// 			  console.log("step 6");
// 			// } else {
// 			//   console.log("step 7");
// 		 	//  	return setCurrentClass(prop);
// 			//   console.log("step 8");
// 			// }
// 		 }
//  
// 	  }
// 	  
// 	  
// 	});

// (function($) {
// 
// 	 $('.om-bz-hp37 .oxy-posts').infiniteScroll({
// 		  path: '.om-bz-hp37 .next',
// 		  append: '.om-bz-hp37 .oxy-post',
// 		  history: false,
// 		  hideNav: '.om-bz-hp37 .oxy-easy-posts-pages',
// 		// remove below two lines if you want to load more posts without scrolling. 
// 		// also remove he load more button.
// 		  button: '.om-bz-hp37 .blogzine-load-more',
// 		  scrollThreshold: false
// 	 });
// 
// })(jQuery);
// 
// function blogzine_infyscroll(parent, autoscroll){
// 	$('.'+parent+' .oxy-posts').infiniteScroll({
// 		  path: '.'+parent+' .next',
// 		  append: '.'+parent+' .oxy-post',
// 		  history: false,
// 		  hideNav: '.'+parent+' .oxy-easy-posts-pages',
// 		if(autoscroll != "autoscroll"){
// 		  button: '.'+parent+' .blogzine-load-more',
// 		  scrollThreshold: false
// 	  }
// 	 });
// }