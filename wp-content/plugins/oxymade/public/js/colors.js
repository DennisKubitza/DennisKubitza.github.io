window.addEventListener("load", function () {
  document.querySelector(".oxygen-toolbar-panels").insertAdjacentHTML(
    "afterend",
    `<div class="oxygen-dom-tree-button oxygen-toolbar-button OxyMadeColorsBtn" id="oxymadeColorsBtn">
	<img></img>
	<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
	  <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
	</svg>
</div>`
  );

  var oxymadeColorsBtn = document.getElementById("oxymadeColorsBtn");

  var oxymadeDiv = document.createElement("div");
  oxymadeDiv.id = "oxymade-sidebar";
  oxymadeDiv.classList.add("sidebar-collapsed");
  document.body.appendChild(oxymadeDiv);

  oxymadeDiv.innerHTML = `
	 <button id="sidebar-closer" class="border-none mt-3 mr-3 bg-trans cursor-pointer"><svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
	   <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
	 </svg></button>
	<div id="sidebardata" class="sidebar-hide">
	
	<div class="p-4">
	  <p class="text-xl font-semibold mb-2 text-white mt-0">OxyMade Color System</p>
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white">Click on the color name to copy and paste it into the editor. You can edit colors from the OxyMade Framework plugin dashboard area</p>
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Primary color shades</p>
		
	  <div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
	  
	  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--primary-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--primary-color)" title="Primary Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Primary</span>
		</div>
	
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--primary-hover-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--primary-hover-color)" title="Primary Hover Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Hover</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--primary-alt-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--primary-alt-color)" title="Primary Alt Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Alt</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--primary-alt-hover-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--primary-alt-hover-color)" title="Primary Alt Hover Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Alt hover</span>
		</div>
		</div>
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Secondary color shades</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--secondary-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--secondary-color)" title="Secondary Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Secondary</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--secondary-hover-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--secondary-hover-color)" title="Secondary Hover Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Hover</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--secondary-alt-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--secondary-alt-color)" title="Secondary Alt Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Alt</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--secondary-alt-hover-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--secondary-alt-hover-color)" title="Secondary Alt Hover Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Alt hover</span>
		</div>
		
		</div>
		
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Background color shades</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--background-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--background-color)" title="Background Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Background</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--background-alt-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--background-alt-color)" title="Background Alt Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">BG Alt</span>
		</div>
		
		</div>
		
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Typography Colors</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--dark-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--dark-color)" title="Dark Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Dark</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--paragraph-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--paragraph-color)" title="Paragraph Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Paragraph</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--border-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--border-color)" title="Border Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Border</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--placeholder-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--placeholder-color)" title="Placeholder Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Placeholder</span>
		</div>
		
		</div>
		
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Alt Typography Colors for Dark Backgrounds</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--light-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--light-color)" title="Light Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Light</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--paragraph-alt-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--paragraph-alt-color)" title="Paragraph Alt Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Paragraph Alt</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--border-alt-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--border-alt-color)" title="Border Alt Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Border Alt</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--placeholder-alt-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--placeholder-alt-color)" title="Placeholder Alt Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Placeholder Alt</span>
		</div>
		
		</div>
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Generic color shades</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--black-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--black-color)" title="Black Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Black</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--white-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--white-color)" title="White Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">White</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--transparent-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--transparent-color)" title="Transparent Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Transparent</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--tertiary-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--tertiary-color)" title="Tertiary Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Tertiary</span>
		</div>
		
		</div>
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Alert dark colors</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--success-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--success-color)" title="Success Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Success</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--warning-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--warning-color)" title="Warning Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Warning</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--error-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--error-color)" title="Error Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Error</span>
		</div>
		
		</div>
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Alert light colors</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--success-light-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--success-light-color)" title="Success light Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Success</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--warning-light-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--warning-light-color)" title="Warning light Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Warning</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--error-light-color)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--error-light-color)" title="Error light Color">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Error</span>
		</div>
		
		</div>
		
		<p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">Extra User colors</p>
		
		<div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--extra-color-1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--extra-color-1)" title="Extra Color 1">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Extra 1</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--extra-color-2)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--extra-color-2)" title="Extra Color 2">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Extra 2</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--extra-color-3)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--extra-color-3)" title="Extra Color 3">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Extra 3</span>
		</div>
		
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: var(--extra-color-4)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="var(--extra-color-4)" title="Extra Color 4">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Extra 4</span>
		</div>

	  </div>
	  
	  <p class="mb-4 flex-shrink min-w-0 text-sm text-white omColorsHeading">RGBA based utility colors with opacity</p>
	  
	  <div class="mt-3 grid grid-cols-4 gap-5 oxymadecolors">
	  
	  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
	  <button type="button" style="background: rgba(var(--primary-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--primary-rgb-vals), 1)" title="Primary rgba Values">
		 <div class="w-6">
		 </div>
		  <div class="pr-2">
			  <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
			  </svg>
		  </div>
	  </button>
	  <span class="text-gray-300 text-xs">Primary rgba Vals</span>
	  </div>
	  
	  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
	  <button type="button" style="background: rgba(var(--secondary-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--secondary-rgb-vals), 1)" title="Secondary RGBA Values">
		 <div class="w-6">
		 </div>
		  <div class="pr-2">
			  <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
			  </svg>
		  </div>
	  </button>
	  <span class="text-gray-300 text-xs">Secondary rgba Vals</span>
	  </div>
	  
	  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		 <button type="button" style="background: rgba(var(--tertiary-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--tertiary-rgb-vals), 1)" title="Tertiary RGBA Values">
			<div class="w-6">
			</div>
			 <div class="pr-2">
				 <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				 </svg>
			 </div>
		 </button>
		 <span class="text-gray-300 text-xs">Tertiary rgba Vals</span>
		 </div>
		 
		 
		 <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
			<button type="button" style="background: rgba(var(--dark-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--dark-rgb-vals), 1)" title="Dark RGBA Values">
			  <div class="w-6">
			  </div>
				<div class="pr-2">
					<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
					</svg>
				</div>
			</button>
			<span class="text-gray-300 text-xs">Dark rgba Vals</span>
			</div>
			
			<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
			  <button type="button" style="background: rgba(var(--paragraph-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--paragraph-rgb-vals), 1)" title="Paragraph RGBA Values">
				 <div class="w-6">
				 </div>
				  <div class="pr-2">
					  <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
					  </svg>
				  </div>
			  </button>
			  <span class="text-gray-300 text-xs">Paragraph rgba Vals</span>
			  </div>
			  
			  
	  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		 <button type="button" style="background: rgba(var(--black-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--black-rgb-vals), 1)" title="Black RGBA Values">
			<div class="w-6">
			</div>
			 <div class="pr-2">
				 <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				 </svg>
			 </div>
		 </button>
		 <span class="text-gray-300 text-xs">Black rgba Vals</span>
		 </div>
		 
		 
	 <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: rgba(var(--success-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--success-rgb-vals), 1)" title="Success RGBA Values">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Success rgba Vals</span>
		</div>
		
		
	<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
	  <button type="button" style="background: rgba(var(--warning-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--warning-rgb-vals), 1)" title="Warning RGBA Values">
		 <div class="w-6">
		 </div>
		  <div class="pr-2">
			  <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
			  </svg>
		  </div>
	  </button>
	  <span class="text-gray-300 text-xs">Warning rgba Vals</span>
	  </div>
	  
  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
	 <button type="button" style="background: rgba(var(--error-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--error-rgb-vals), 1)" title="Error RGBA Values">
		<div class="w-6">
		</div>
		 <div class="pr-2">
			 <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
			 </svg>
		 </div>
	 </button>
	 <span class="text-gray-300 text-xs">Error rgba Vals</span>
	 </div>
	 
	 <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		<button type="button" style="background: rgba(var(--extra-color-1-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--extra-color-1-rgb-vals), 1)" title="Extra color 1 RGBA Values">
		  <div class="w-6">
		  </div>
			<div class="pr-2">
				<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				</svg>
			</div>
		</button>
		<span class="text-gray-300 text-xs">Extra 1 rgba Vals</span>
		</div>
							
							
		<div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		  <button type="button" style="background: rgba(var(--extra-color-2-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--extra-color-2-rgb-vals), 1)" title="Extra color 2 RGBA Values">
			 <div class="w-6">
			 </div>
			  <div class="pr-2">
				  <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				  </svg>
			  </div>
		  </button>
		  <span class="text-gray-300 text-xs">Extra 2 rgba Vals</span>
		  </div>
		  
		  
	  <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
		 <button type="button" style="background: rgba(var(--extra-color-3-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--extra-color-3-rgb-vals), 1)" title="Extra color 3 RGBA Values">
			<div class="w-6">
			</div>
			 <div class="pr-2">
				 <svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
				 </svg>
			 </div>
		 </button>
		 <span class="text-gray-300 text-xs">Extra 3 rgba Vals</span>
		 </div>
								 
								 
		 <div class="omColorsLi flex cursor-pointer p-0 border-none oxymade-copy-btn text-center">
			<button type="button" style="background: rgba(var(--extra-color-4-rgb-vals), 1)" class="omColorsBtn flex shadow-sm rounded-md cursor-pointer p-0 border-none oxymade-copy-btn shadow hover:text-white" data-clipboard-text="rgba(var(--extra-color-4-rgb-vals), 1)" title="Extra color 4 RGBA Values">
			  <div class="w-6">
			  </div>
				<div class="pr-2">
					<svg class="w-4 h-8 cursor-pointer hover:text-white text-gray-400" "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
					</svg>
				</div>
			</button>
			<span class="text-gray-300 text-xs">Extra 4 rgba Vals</span>
			</div>
	  
	  </div>
	  
	</div>
	</div>
  `;

  oxymadeColorsBtn.addEventListener("click", (_) => {
    document
      .getElementById("oxymade-sidebar")
      .classList.toggle("sidebar-collapsed");
    document.getElementById("sidebardata").classList.toggle("sidebar-hide");
  });

  var oxymadeCloseBtn = document.getElementById("sidebar-closer");
  oxymadeCloseBtn.addEventListener("click", (_) => {
    document
      .getElementById("oxymade-sidebar")
      .classList.toggle("sidebar-collapsed");
    document.getElementById("sidebardata").classList.toggle("sidebar-hide");
  });
  
  jQuery(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			if (jQuery("#oxymade-sidebar").hasClass("sidebar-collapsed")) {
			} else {
			oxymadeCloseBtn.click();
			}
		}
 });

  new ClipboardJS(".oxymade-copy-btn");
});
