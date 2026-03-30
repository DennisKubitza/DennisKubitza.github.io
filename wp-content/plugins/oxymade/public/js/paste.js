window.addEventListener("load", function () {
  document.querySelector(".oxygen-toolbar-panels").insertAdjacentHTML(
    "afterend",
    `<div class="oxygen-dom-tree-button oxygen-toolbar-button" onClick="oxyMadePasteRouter();">
		<img></img>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" /><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" /></svg>
	</div>`
  );

const timer = ms => new Promise(res => setTimeout(res, ms))

async function task(i) { // 3
  await timer(3500);
  // console.log(`Task ${i} done!`);
}

  $scope.oxyMadePaste = function (arg) {
    if (arg == undefined) {
      return;
    }
    let copiedString;
    let copiedSet;
    let y = atob(arg);
    copiedString = JSON.parse(y);
    copiedSet = copiedString.set;
    copiedSections = copiedString.sections;
    
    $scope.iframeScope.getComponentsListFromSource(copiedSet + "-0", copiedSet);

    try {
      $scope.iframeScope.getComponentsListFromSource(
        copiedSet + "-0",
        copiedSet
      );
    } catch (err) {
      alert(
        "You have to insert " +
          copiedSet +
          " design set key inside Oxygen settings -> Library"
      );
    }
    
    jQuery("#ct-page-overlay").show();

    setTimeout(async function () {
      if (arg.length > 0) {
        
        for (j = 0; j < copiedSections.length; j++) {
          
          pasteArr = copiedSections[j];
          
          var comps = $scope.iframeScope.experimental_components[copiedSet].items[pasteArr.title].contents;

          var key = "url";
          var value = pasteArr.url;
          var theComp = comps.find(x=> x[key] == value);
                    
          let id = theComp.id;
          let page = theComp.page;
          let source = theComp.source;
          let designSet = copiedSet;
          // console.log(pasteArr.url);
          $scope.iframeScope.getComponentFromSource(
            id,
            source,
            designSet,
            page,
            $scope.iframeScope.addComponentFromSource
          );
          await task(j);
          $scope.iframeScope.closeAllFolders();
          $scope.iframeScope.activateComponent(0, 'root');
          
        }
      }
    }, 2500);
  };
});


function oxyMadePasteRouter() {
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    $scope.oxyMadePaste(prompt("Please paste the code you got from our page builder app. You need to add our design set in library to use this paste function.\r\n \r\nIf the paste is not working, please try to load the design set in the editor once and try again.", ""));
  } else {
    omPasteElement();
  }
}

function omPasteElement(ev) {
  if (location.protocol === "https:") {
    var txtClipboard = "";
    let temp = jQuery("<textarea id='oxymade-pastearea' style='display:none'>");
    jQuery("body").append(temp);
    let pasteText = document.querySelector("#oxymade-pastearea");
    pasteText.focus();
    if (imGonnaPaste()) {
      navigator.clipboard
        .readText()
        .then(function (clipText) {
          $scope.oxyMadePaste(clipText);
          temp.remove();
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  } else {
    $scope.oxyMadePaste(prompt("Please paste the code you got from our page builder app. You need to add our design set in library to use this paste function.\r\n \r\nIf the paste is not working, please try to load the design set in the editor once and try again.", ""));
  }
}

function imGonnaPaste() {
  return (
    navigator.clipboard &&
    typeof navigator.clipboard.readText === "function" &&
    (location.protocol == "https:" ||
      location.hostname == "localhost" ||
      location.hostname == "127.0.0.1")
  );
}
