window.addEventListener("load", function () {
  document.querySelector(".oxygen-toolbar-panels").insertAdjacentHTML(
    "afterend",
    `<div class="oxygen-dom-tree-button oxygen-toolbar-button OxyMadeHoversBtn" id="oxymadeHoversBtn">
	<img></img>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
	</svg>
</div>`
  );

  var oxymadeHoversBtn = document.getElementById("oxymadeHoversBtn");

  var oxymadeHoversDiv = document.getElementById("oxymade-hoversidebar");
  oxymadeHoversDiv.classList.add("hoversidebar-collapsed");
  document.body.appendChild(oxymadeHoversDiv);

  oxymadeHoversBtn.addEventListener("click", (_) => {
	  
	  // if($scope.iframeScope.componentsClasses[id]){
	  if($scope.iframeScope.component.active.id){
		  
    document
      .getElementById("oxymade-hoversidebar")
      .classList.toggle("hoversidebar-collapsed");
    // document.getElementById("hoversidebardata").classList.toggle("hoversidebar-hide");
	 
	 } else {
		  alert("Please select an element before opening the hovers panel");
	  }
  });

  var oxymadeCloseBtn = document.getElementById("hoversidebar-closer");
  oxymadeCloseBtn.addEventListener("click", (_) => {
    document
      .getElementById("oxymade-hoversidebar")
      .classList.toggle("hoversidebar-collapsed");
    // document.getElementById("hoversidebardata").classList.toggle("hoversidebar-hide");
  });
  
  jQuery(document).keyup(function(e) {
		 if (e.key === "Escape") { // escape key maps to keycode `27`
	    	if (jQuery("#oxymade-hoversidebar").hasClass("hoversidebar-collapsed")) {
		 	} else {
			 oxymadeCloseBtn.click();
			 }
		 }
  });
  
	
	 
});


(function($) {
	var hoverElements = {};
	var hoverEffect = [];
	var applyStatus = {};
	
	function checkApplyStatus() {
		 (applyStatus.bg && applyStatus.borders && applyStatus.colors) ? $('#apply-hover-effect').removeClass("hidden") : $('#apply-hover-effect').addClass("hidden");
		 (!applyStatus.bg || !applyStatus.borders || !applyStatus.colors) ? $('#apply-hover-effect-text').removeClass("hidden") : $('#apply-hover-effect-text').addClass("hidden") ;	
	}
	
	$('.hover-effects').click(function(){
		required = $(this).data("required");
		optional = $(this).data("optional");
		current = $(this).data("hover");
		
		if (required || optional) {
			var req = required.split(" ");
			var opt = optional.split(" ");
			
			if(req.includes("bg") || opt.includes("bg")){
				$('#hover-backgrounds-section').removeClass("hidden");
				
				(req.includes("bg")) ? $('#oxymade-hover-backgrounds-section #oxymade-hovers-required').removeClass("hidden") : $('#oxymade-hover-backgrounds-section #oxymade-hovers-optional').removeClass("hidden");
				applyStatus.bg = opt.includes("bg") ? true : false;
				hoverElements.bg = true;
			} else {
				$('#oxymade-hover-backgrounds-section #oxymade-hovers-not-applicable').removeClass("hidden");
				$('#oxymade-hover-backgrounds-section').addClass("opacity-25");
				applyStatus.bg = true;
				checkApplyStatus();
			}
			if(req.includes("borders") || opt.includes("borders")){
				$('#hover-borders-section').removeClass("hidden");
				(req.includes("borders")) ? $('#oxymade-hover-borders-section #oxymade-hovers-required').removeClass("hidden") : $('#oxymade-hover-borders-section #oxymade-hovers-optional').removeClass("hidden");
				applyStatus.borders = opt.includes("borders") ? true : false;
				hoverElements.borders = true;
			} else {
				$('#oxymade-hover-borders-section #oxymade-hovers-not-applicable').removeClass("hidden");
				$('#oxymade-hover-borders-section').addClass("opacity-25");
				applyStatus.borders = true;
				checkApplyStatus();
			}
			if(req.includes("colors") || opt.includes("colors")){
				$('#hover-colors-section').removeClass("hidden");
				(req.includes("colors")) ? $('#oxymade-hover-colors-section #oxymade-hovers-required').removeClass("hidden") : $('#oxymade-hover-colors-section #oxymade-hovers-optional').removeClass("hidden");
				applyStatus.colors = opt.includes("colors") ? true : false;
				hoverElements.colors = true;
			} else {
				$('#oxymade-hover-colors-section #oxymade-hovers-not-applicable').removeClass("hidden");
				$('#oxymade-hover-colors-section').addClass("opacity-25");
				applyStatus.colors = true;
				checkApplyStatus();
			}
				hoverEffect.push(current);
				$('#oxymade-hover-effects-section #oxymade-hovers-required').addClass("hidden");
				$('#oxymade-hover-effects-section #oxymade-hovers-selected').removeClass("hidden");
				$('#oxymade-hover-effects-section #oxymade-hovers-cancel').removeClass("hidden");
				$('#oxymade-hover-effects-section .hover-effect').text(current);
				$('#hover-effects-section').addClass("hidden");
	
		} else {
			$('#oxymade-hover-effects-section #oxymade-hovers-required').addClass("hidden");
			$('#oxymade-hover-effects-section #oxymade-hovers-selected').removeClass("hidden");
			$('#oxymade-hover-effects-section #oxymade-hovers-cancel').removeClass("hidden");
			$('#oxymade-hover-effects-section .hover-effect').text(current);
			$('#hover-effects-section').addClass("hidden");
			$('#oxymade-hover-backgrounds-section #oxymade-hovers-not-applicable').removeClass("hidden");
			$('#oxymade-hover-backgrounds-section').addClass("opacity-25");
			$('#oxymade-hover-borders-section #oxymade-hovers-not-applicable').removeClass("hidden");
			$('#oxymade-hover-borders-section').addClass("opacity-25");
			$('#oxymade-hover-colors-section #oxymade-hovers-not-applicable').removeClass("hidden");
			$('#oxymade-hover-colors-section').addClass("opacity-25");
			hoverEffect.push(current);
			applyStatus.bg = true;
			applyStatus.borders = true;
			applyStatus.colors = true;
			checkApplyStatus();
		}
		
		checkApplyStatus();
	});
	
	
	$('.hover-backgrounds').click(function(){
		current = $(this).data("background");
		if(hoverElements.borders){
			$('#hover-backgrounds-section').addClass("hidden");
			$('#hover-borders-section').removeClass("hidden");
		} else {
			$('#hover-backgrounds-section').addClass("hidden");
			$('#oxymade-hover-backgrounds-section #oxymade-hovers-required').addClass("hidden");
			$('#oxymade-hover-borders-section #oxymade-hovers-not-applicable').removeClass("hidden");
			$('#oxymade-hover-borders-section').addClass("opacity-25");
			}
			
			if(!hoverElements.borders && !hoverElements.colors) {
				// $('#apply-hover-effect').removeClass("hidden");
			$('#oxymade-hover-colors-section #oxymade-hovers-not-applicable').removeClass("hidden");
			$('#oxymade-hover-colors-section').addClass("opacity-25");
			}
			$('#oxymade-hover-backgrounds-section #oxymade-hovers-required').addClass("hidden");
			$('#oxymade-hover-backgrounds-section #oxymade-hovers-optional').addClass("hidden");
			$('#oxymade-hover-backgrounds-section #oxymade-hovers-selected').removeClass("hidden");
			$('#oxymade-hover-backgrounds-section .hover-effect').text(current);
			hoverEffect.push(current);
			applyStatus.bg = true;
			checkApplyStatus();
	});
	
	$('.hover-borders').click(function(){
		current = $(this).data("border");
		if(hoverElements.colors){
			$('#hover-colors-section').removeClass("hidden");
		} else {
			$('#oxymade-hover-borders-section #oxymade-hovers-required').addClass("hidden");
			$('#oxymade-hover-colors-section #oxymade-hovers-not-applicable').removeClass("hidden");
			$('#oxymade-hover-colors-section').addClass("opacity-25");
			// $('#apply-hover-effect').removeClass("hidden");
			}
			$('#hover-borders-section').addClass("hidden");
			$('#oxymade-hover-borders-section #oxymade-hovers-required').addClass("hidden");
			$('#oxymade-hover-borders-section #oxymade-hovers-optional').addClass("hidden");
			$('#oxymade-hover-borders-section #oxymade-hovers-selected').removeClass("hidden");
			$('#oxymade-hover-borders-section .hover-effect').text(current);
			hoverEffect.push(current);
			applyStatus.borders = true;
			checkApplyStatus();
	});
	
	$('.hover-colors').click(function(){
		current = $(this).data("color");
			// $('#apply-hover-effect').removeClass("hidden");
			$('#oxymade-hover-colors-section #oxymade-hovers-required').addClass("hidden");
			$('#hover-colors-section').addClass("hidden");
			$('#oxymade-hover-colors-section #oxymade-hovers-required').addClass("hidden");
			$('#oxymade-hover-colors-section #oxymade-hovers-optional').addClass("hidden");
			$('#oxymade-hover-colors-section #oxymade-hovers-selected').removeClass("hidden");
			$('#oxymade-hover-colors-section .hover-effect').text(current);
			hoverEffect.push(current);
			applyStatus.colors = true;
			checkApplyStatus();
	});
	
	$('#oxymade-hovers-cancel').click(function(){
			$('#oxymade-hover-effects-section #oxymade-hovers-required').removeClass("hidden");
			$('#hover-effects-section').removeClass("hidden");
			
			$('#oxymade-hover-backgrounds-section #oxymade-hovers-not-applicable, #oxymade-hover-colors-section #oxymade-hovers-not-applicable, #oxymade-hover-borders-section #oxymade-hovers-not-applicable, #oxymade-hover-effects-section #oxymade-hovers-cancel, #oxymade-hover-effects-section #oxymade-hovers-selected, #oxymade-hover-backgrounds-section #oxymade-hovers-selected, #oxymade-hover-borders-section #oxymade-hovers-selected, #oxymade-hover-colors-section #oxymade-hovers-selected, #oxymade-hover-backgrounds-section #oxymade-hovers-required, #oxymade-hover-borders-section #oxymade-hovers-required, #oxymade-hover-colors-section #oxymade-hovers-required, #hover-backgrounds-section, #hover-borders-section, #hover-colors-section').addClass("hidden");
			
			$('#oxymade-hover-backgrounds-section, #oxymade-hover-borders-section, #oxymade-hover-colors-section').removeClass("opacity-25");
			
			$('#oxymade-hover-effects-section .hover-effect').text("Select effect");
			$('#oxymade-hover-backgrounds-section .hover-effect').text("Select background");
			$('#oxymade-hover-borders-section .hover-effect').text("Select border");
			$('#oxymade-hover-colors-section .hover-effect').text("Select color");
			
			hoverEffect = [];
			applyStatus = {};
			hoverElements = {};
			checkApplyStatus();
	});
	
	
	
	
	const timer = ms => new Promise(res => setTimeout(res, ms))
	
	async function task(i) { // 3
	  await timer(1000);
	  // console.log(`Task ${i} done!`);
	}

		
	
	$('#apply-hover-effect').click(function(){
		
		$('#apply-hover-effect').text("Hover effect applied to the selected element.");
		$('#apply-hover-effect').removeClass("bg-red-200 text-red-800 hover:bg-yellow-100 hover:text-gray-900");
		$('#apply-hover-effect').addClass("bg-indigo-200 text-indigo-800 hover:bg-indigo-100 hover:text-indigo-900");
		
		var hoverJsonUrl = oxymadeHovers.pluginsUrl + 'js/hovers.json';

		var hoversObj;
		fetch(hoverJsonUrl)
		  .then(response => response.json())
		  .then(data => hoversObj = data)
		  .then(() => addHoverClasses(hoverEffect, hoversObj));
		
		
		async function addHoverClasses (hoverEffect, hoversObj) {
			
			for (i=1; i<=hoverEffect.length; i++)  
			{  
				index = i-1;
				let hoverClassName = hoverEffect[index];
				$scope.iframeScope.classes[hoverClassName] = hoversObj[hoverClassName];
				
				let id = $scope.iframeScope.component.active.id;
				let component = $scope.iframeScope.findComponentItem(
					  $scope.iframeScope.componentsTree.children,
					  id,
					  $scope.iframeScope.getComponentItem
					);
				
				component.options["classes"] = component.options["classes"] || [];
				
				if(!component.options["classes"].includes(hoverClassName)){
					component.options["classes"].push(hoverClassName);
				}
				
				$scope.iframeScope.componentsClasses[id] =
				  $scope.iframeScope.componentsClasses[id] || [];
				  
				  if(!component.options["classes"].includes(hoverClassName)){
				$scope.iframeScope.componentsClasses[id].push(hoverClassName);
			}
				console.log(hoverClassName + " applied succesfully.");
				if(i == 1){
					$scope.iframeScope.setCurrentClass(hoverClassName);
				}
				
				// let presentClasses = $scope.iframeScope.componentsClasses[id];
				// console.log(presentClasses);
		
					$scope.iframeScope.rebuildDOM(id);
				  $scope.iframeScope.$apply();
				await task(i);
				}
		}
		
		setTimeout(function() {
		
		$('#oxymade-hover-effects-section #oxymade-hovers-required').removeClass("hidden");
		$('#hover-effects-section').removeClass("hidden");
		
		$('#oxymade-hover-backgrounds-section #oxymade-hovers-not-applicable, #oxymade-hover-colors-section #oxymade-hovers-not-applicable, #oxymade-hover-borders-section #oxymade-hovers-not-applicable, #oxymade-hover-effects-section #oxymade-hovers-cancel, #oxymade-hover-effects-section #oxymade-hovers-selected, #oxymade-hover-backgrounds-section #oxymade-hovers-selected, #oxymade-hover-borders-section #oxymade-hovers-selected, #oxymade-hover-colors-section #oxymade-hovers-selected, #oxymade-hover-backgrounds-section #oxymade-hovers-required, #oxymade-hover-borders-section #oxymade-hovers-required, #oxymade-hover-colors-section #oxymade-hovers-required, #hover-backgrounds-section, #hover-borders-section, #hover-colors-section').addClass("hidden");
		
		$('#oxymade-hover-backgrounds-section, #oxymade-hover-borders-section, #oxymade-hover-colors-section').removeClass("opacity-25");
		
		$('#oxymade-hover-effects-section .hover-effect').text("Select effect");
		$('#oxymade-hover-backgrounds-section .hover-effect').text("Select background");
		$('#oxymade-hover-borders-section .hover-effect').text("Select border");
		$('#oxymade-hover-colors-section .hover-effect').text("Select color");
		
		$('#apply-hover-effect').text("Apply the hover effect");
		$('#apply-hover-effect').removeClass("bg-green-200 text-indigo-800 hover:bg-indigo-100 hover:text-indigo-900");
		$('#apply-hover-effect').addClass("bg-indigo-400 text-indigo-800 hover:bg-indigo-100 hover:text-gray-900");
		
		hoverEffect = [];
		applyStatus = {};
		hoverElements = {};
		checkApplyStatus();
	}, 3000); });
})(jQuery);