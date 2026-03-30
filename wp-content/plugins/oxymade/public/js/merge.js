(function ($) {
  let idOnlyProperties = [
    "ct_id",
    "ct_parent",
    "classes",
    "selector",
    "ct_content",
    "nicename",
  ];
  let idOnlyOriginls = [
    "src",
    "href",
    "globalConditionsResult",
    "globalconditions",
    "use-custom",
    "custom-code",
    "tag",
    "conditionsresult",
    "code-php",
    "code-css",
    "code-js",
    "full_shortcode",
    "embed_src",
  ];

  function doMerge(e) {
    mergeStyles();
  }

  function mergeStyles(myResetSource) {
    let mySourceClass = iframeScope.isEditing("class")
      ? iframeScope.currentClass
      : false;
    let myPromptMessage = "Class name:";

    if (mySourceClass && myResetSource === true) {
      myPromptMessage =
        `This will wipe off all the CSS properties in the  '${mySourceClass}' class and can affect any elements still having the '${mySourceClass}' class. Are you sure you want to 'move' instead of 'copy'?` +
        "\n\n" +
        myPromptMessage;
    }

    let myClassName = prompt(myPromptMessage);

    if (myClassName != null) {
      var valid = iframeScope.validateClassName(myClassName);

      if (!valid) {
        alert(
          "Wrong class name. Name must begin with an underscore (_), a hyphen (-), or a letter(a–z), followed by any number of hyphens, underscores or letters."
        );
        return false;
      }

      if (iframeScope.classes[myClassName]) {
        alert(
          "A class with this name already exists. Provide another name for a new class"
        );
        return false;
      }

      let newClassObject = {};

      let id = iframeScope.component.active.id;

      let existingClasses = iframeScope.componentsClasses[id];
      // console.log(existingClasses);

      var PATTERN = "grid",
        gridfiltered = existingClasses.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "col-",
        col_filtered = gridfiltered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "row-",
        row_filtered = col_filtered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "rows",
        rowsfiltered = row_filtered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "cols",
        colsfiltered = rowsfiltered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "gap-",
        gap_filtered = colsfiltered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "transform-",
        transform_filtered = gap_filtered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "cursor-",
        cursor_filtered = transform_filtered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      var PATTERN = "animate-",
        animate_filtered = cursor_filtered.filter(function (str) {
          return str.indexOf(PATTERN) === -1;
        });
      // var PATTERN = "hover-",
      //   hover_filtered = animate_filtered.filter(function (str) {
      //     return str.indexOf(PATTERN) === -1;
      //   });

      let presentClasses = animate_filtered;

      var fullOriginalObject = {};
      var fullHoverObject = {};
      var fullBeforeObject = {};
      var fullAfterObject = {};
      // new before after focus states
      var fullHoverBeforeObject = {};
      var fullFocusBeforeObject = {};
      var fullActiveBeforeObject = {};
      var fullFocusObject = {};
      var fullActiveObject = {};

      var fullOriginalPageWidth = {};
      var fullHoverPageWidth = {};
      var fullBeforePageWidth = {};
      var fullAfterPageWidth = {};
      // new before after focus states
      var fullHoverBeforePageWidth = {};
      var fullFocusBeforePageWidth = {};
      var fullActiveBeforePageWidth = {};
      var fullFocusPageWidth = {};
      var fullActivePageWidth = {};

      var fullOriginalTablet = {};
      var fullHoverTablet = {};
      var fullBeforeTablet = {};
      var fullAfterTablet = {};
      // new before after focus states
      var fullHoverBeforeTablet = {};
      var fullFocusBeforeTablet = {};
      var fullActiveBeforeTablet = {};
      var fullFocusTablet = {};
      var fullActiveTablet = {};

      var fullOriginalPhonePortrait = {};
      var fullHoverPhonePortrait = {};
      var fullBeforePhonePortrait = {};
      var fullAfterPhonePortrait = {};
      // new before after focus states
      var fullHoverBeforePhonePortrait = {};
      var fullFocusBeforePhonePortrait = {};
      var fullActiveBeforePhonePortrait = {};
      var fullFocusPhonePortrait = {};
      var fullActivePhonePortrait = {};

      var fullOriginalPhoneLandscape = {};
      var fullHoverPhoneLandscape = {};
      var fullBeforePhoneLandscape = {};
      var fullAfterPhoneLandscape = {};
      // new before after focus states
      var fullHoverBeforePhoneLandscape = {};
      var fullFocusBeforePhoneLandscape = {};
      var fullActiveBeforePhoneLandscape = {};
      var fullFocusPhoneLandscape = {};
      var fullActivePhoneLandscape = {};

      presentClasses.forEach(buildClassObject);

      function buildClassObject(item) {
        classObject = JSON.parse(JSON.stringify(iframeScope.classes[item]));
        //all sizes object
        originalObject = classObject["original"];
        hoverObject = classObject["hover"];
        beforeObject = classObject["before"];
        afterObject = classObject["after"];
        // new before after focus states
        hoverBeforeObject = classObject["hover:before"];
        focusBeforeObject = classObject["focus:before"];
        activeBeforeObject = classObject["active:before"];
        focusObject = classObject["focus"];
        activeObject = classObject["active"];

        //media object start
        if (classObject["media"]) {
          //page-width object all
          if (classObject["media"]["page-width"]) {
            pageMediaObject = classObject["media"]["page-width"];
            originalPageWidth = pageMediaObject["original"];
            hoverPageWidth = pageMediaObject["hover"];
            beforePageWidth = pageMediaObject["before"];
            afterPageWidth = pageMediaObject["after"];
            // new before after focus states
            hoverBeforePageWidth = pageMediaObject["hover:before"];
            focusBeforePageWidth = pageMediaObject["focus:before"];
            activeBeforePageWidth = pageMediaObject["active:before"];
            focusPageWidth = pageMediaObject["focus"];
            activePageWidth = pageMediaObject["active"];
          }

          //tablet object all
          if (classObject["media"]["tablet"]) {
            tabletMediaObject = classObject["media"]["tablet"];
            originalTablet = tabletMediaObject["original"];
            hoverTablet = tabletMediaObject["hover"];
            beforeTablet = tabletMediaObject["before"];
            afterTablet = tabletMediaObject["after"];
            // new before after focus states
            hoverBeforeTablet = tabletMediaObject["hover:before"];
            focusBeforeTablet = tabletMediaObject["focus:before"];
            activeBeforeTablet = tabletMediaObject["active:before"];
            focusTablet = tabletMediaObject["focus"];
            activeTablet = tabletMediaObject["active"];
          }

          //phone-portrait object all
          if (classObject["media"]["phone-portrait"]) {
            portraitMediaObject = classObject["media"]["phone-portrait"];
            originalPhonePortrait = portraitMediaObject["original"];
            hoverPhonePortrait = portraitMediaObject["hover"];
            beforePhonePortrait = portraitMediaObject["before"];
            afterPhonePortrait = portraitMediaObject["after"];
            // new before after focus states
            hoverBeforePhonePortrait = portraitMediaObject["hover:before"];
            focusBeforePhonePortrait = portraitMediaObject["focus:before"];
            activeBeforePhonePortrait = portraitMediaObject["active:before"];
            focusPhonePortrait = portraitMediaObject["focus"];
            activePhonePortrait = portraitMediaObject["active"];
          }

          //phone-landscape object all
          if (classObject["media"]["phone-landscape"]) {
            landscapeMediaObject = classObject["media"]["phone-landscape"];
            originalPhoneLandscape = landscapeMediaObject["original"];
            hoverPhoneLandscape = landscapeMediaObject["hover"];
            beforePhoneLandscape = landscapeMediaObject["before"];
            afterPhoneLandscape = landscapeMediaObject["after"];
            // new before after focus states
            hoverBeforePhoneLandscape = landscapeMediaObject["hover:before"];
            focusBeforePhoneLandscape = landscapeMediaObject["focus:before"];
            activeBeforePhoneLandscape = landscapeMediaObject["active:before"];
            focusPhoneLandscape = landscapeMediaObject["focus"];
            activePhoneLandscape = landscapeMediaObject["active"];
          }
        }

        function jsonConcat(o1, o2) {
          for (var key in o2) {
            o1[key] = o2[key];
          }
          return o1;
        }
        fullOriginalObject = jsonConcat(fullOriginalObject, originalObject);
        fullHoverObject = jsonConcat(fullHoverObject, hoverObject);
        fullBeforeObject = jsonConcat(fullBeforeObject, beforeObject);
        fullAfterObject = jsonConcat(fullAfterObject, afterObject);
        // new before after focus states
        fullHoverBeforeObject = jsonConcat(fullHoverBeforeObject, hoverBeforeObject);
        fullFocusBeforeObject = jsonConcat(fullFocusBeforeObject, focusBeforeObject);
        fullActiveBeforeObject = jsonConcat(fullActiveBeforeObject, activeBeforeObject);
        fullFocusObject = jsonConcat(fullFocusObject, focusObject);
        fullActiveObject = jsonConcat(fullActiveObject, activeObject);
        

        if (classObject["media"]) {
          if (classObject["media"]["page-width"]) {
            fullOriginalPageWidth = jsonConcat(
              fullOriginalPageWidth,
              originalPageWidth
            );
            fullHoverPageWidth = jsonConcat(fullHoverPageWidth, hoverPageWidth);
            fullBeforePageWidth = jsonConcat(
              fullBeforePageWidth,
              beforePageWidth
            );
            fullAfterPageWidth = jsonConcat(fullAfterPageWidth, afterPageWidth);
            // new before after focus states
            fullActivePageWidth = jsonConcat(fullActivePageWidth, activePageWidth);
            fullFocusPageWidth = jsonConcat(fullFocusPageWidth, focusPageWidth);
            fullHoverBeforePageWidth = jsonConcat(fullHoverBeforePageWidth, hoverBeforePageWidth);
            fullFocusBeforePageWidth = jsonConcat(fullFocusBeforePageWidth, focusBeforePageWidth);
            fullActiveBeforePageWidth = jsonConcat(fullActiveBeforePageWidth, activeBeforePageWidth);
          }

          if (classObject["media"]["tablet"]) {
            fullOriginalTablet = jsonConcat(fullOriginalTablet, originalTablet);
            fullHoverTablet = jsonConcat(fullHoverTablet, hoverTablet);
            fullBeforeTablet = jsonConcat(fullBeforeTablet, beforeTablet);
            fullAfterTablet = jsonConcat(fullAfterTablet, afterTablet);
            // new before after focus states
            fullActiveTablet = jsonConcat(fullActiveTablet, activeTablet);
            fullFocusTablet = jsonConcat(fullFocusTablet, focusTablet);
            fullHoverBeforeTablet = jsonConcat(fullHoverBeforeTablet, hoverBeforeTablet);
            fullFocusBeforeTablet = jsonConcat(fullFocusBeforeTablet, focusBeforeTablet);
            fullActiveBeforeTablet = jsonConcat(fullActiveBeforeTablet, activeBeforeTablet);
          }

          if (classObject["media"]["phone-portrait"]) {
            fullOriginalPhonePortrait = jsonConcat(
              fullOriginalPhonePortrait,
              originalPhonePortrait
            );
            fullHoverPhonePortrait = jsonConcat(
              fullHoverPhonePortrait,
              hoverPhonePortrait
            );
            fullBeforePhonePortrait = jsonConcat(
              fullBeforePhonePortrait,
              beforePhonePortrait
            );
            fullAfterPhonePortrait = jsonConcat(
              fullAfterPhonePortrait,
              afterPhonePortrait
            );
            // new before after focus states
            fullActivePhonePortrait = jsonConcat(fullActivePhonePortrait, activePhonePortrait);
            fullFocusPhonePortrait = jsonConcat(fullFocusPhonePortrait, focusPhonePortrait);
            fullHoverBeforePhonePortrait = jsonConcat(fullHoverBeforePhonePortrait, hoverBeforePhonePortrait);
            fullFocusBeforePhonePortrait = jsonConcat(fullFocusBeforePhonePortrait, focusBeforePhonePortrait);
            fullActiveBeforePhonePortrait = jsonConcat(fullActiveBeforePhonePortrait, activeBeforePhonePortrait);
          }

          if (classObject["media"]["phone-landscape"]) {
            fullOriginalPhoneLandscape = jsonConcat(
              fullOriginalPhoneLandscape,
              originalPhoneLandscape
            );
            fullHoverPhoneLandscape = jsonConcat(
              fullHoverPhoneLandscape,
              hoverPhoneLandscape
            );
            fullBeforePhoneLandscape = jsonConcat(
              fullBeforePhoneLandscape,
              beforePhoneLandscape
            );
            fullAfterPhoneLandscape = jsonConcat(
              fullAfterPhoneLandscape,
              afterPhoneLandscape
            );
            // new before after focus states
            fullActivePhoneLandscape = jsonConcat(fullActivePhoneLandscape, activePhoneLandscape);
            fullFocusPhoneLandscape = jsonConcat(fullFocusPhoneLandscape, focusPhoneLandscape);
            fullHoverBeforePhoneLandscape = jsonConcat(fullHoverBeforePhoneLandscape, hoverBeforePhoneLandscape);
            fullFocusBeforePhoneLandscape = jsonConcat(fullFocusBeforePhoneLandscape, focusBeforePhoneLandscape);
            fullActiveBeforePhoneLandscape = jsonConcat(fullActiveBeforePhoneLandscape, activeBeforePhoneLandscape);
          }
        }
      }

      let component = iframeScope.findComponentItem(
        iframeScope.componentsTree.children,
        id,
        iframeScope.getComponentItem
      );

      if (mySourceClass) {
        if (!iframeScope.classes[mySourceClass]) {
          alert("The source class does not exist");
          return false;
        }

        newClassObject["original"] = fullOriginalObject;
        if (Object.keys(fullHoverObject).length > 0) {
          newClassObject["hover"] = fullHoverObject;
        }
        if (Object.keys(fullBeforeObject).length > 0) {
          newClassObject["before"] = fullBeforeObject;
        }
        if (Object.keys(fullAfterObject).length > 0) {
          newClassObject["after"] = fullAfterObject;
        }
        // new before after focus states
        if (Object.keys(fullActiveObject).length > 0) {
          newClassObject["active"] = fullActiveObject;
        }
        if (Object.keys(fullFocusObject).length > 0) {
          newClassObject["focus"] = fullFocusObject;
        }
        if (Object.keys(fullHoverBeforeObject).length > 0) {
          newClassObject["hover:before"] = fullHoverBeforeObject;
        }
        if (Object.keys(fullFocusBeforeObject).length > 0) {
          newClassObject["focus:before"] = fullFocusBeforeObject;
        }
        if (Object.keys(fullActiveBeforeObject).length > 0) {
          newClassObject["active:before"] = fullActiveBeforeObject;
        }

        newClassObject["media"] = {};
        newClassObject["media"]["page-width"] = {};
        newClassObject["media"]["tablet"] = {};
        newClassObject["media"]["phone-portrait"] = {};
        newClassObject["media"]["phone-landscape"] = {};

        if (Object.keys(fullOriginalPageWidth).length > 0) {
          newClassObject["media"]["page-width"][
            "original"
          ] = fullOriginalPageWidth;
        }
        if (Object.keys(fullHoverPageWidth).length > 0) {
          newClassObject["media"]["page-width"]["hover"] = fullHoverPageWidth;
        }
        if (Object.keys(fullBeforePageWidth).length > 0) {
          newClassObject["media"]["page-width"]["before"] = fullBeforePageWidth;
        }
        if (Object.keys(fullAfterPageWidth).length > 0) {
          newClassObject["media"]["page-width"]["after"] = fullAfterPageWidth;
        }
        // new before after focus states
        if (Object.keys(fullActivePageWidth).length > 0) {
          newClassObject["media"]["page-width"]["active"] = fullActivePageWidth;
        }
        if (Object.keys(fullFocusPageWidth).length > 0) {
          newClassObject["media"]["page-width"]["focus"] = fullFocusPageWidth;
        }
        if (Object.keys(fullHoverBeforePageWidth).length > 0) {
          newClassObject["media"]["page-width"]["hover:before"] = fullHoverBeforePageWidth;
        }
        if (Object.keys(fullFocusBeforePageWidth).length > 0) {
          newClassObject["media"]["page-width"]["focus:before"] = fullFocusBeforePageWidth;
        }
        if (Object.keys(fullActiveBeforePageWidth).length > 0) {
          newClassObject["media"]["page-width"]["active:before"] = fullActiveBeforePageWidth;
        }
        

        if (Object.keys(fullOriginalTablet).length > 0) {
          newClassObject["media"]["tablet"]["original"] = fullOriginalTablet;
        }
        if (Object.keys(fullHoverTablet).length > 0) {
          newClassObject["media"]["tablet"]["hover"] = fullHoverTablet;
        }
        if (Object.keys(fullBeforeTablet).length > 0) {
          newClassObject["media"]["tablet"]["before"] = fullBeforeTablet;
        }
        if (Object.keys(fullAfterTablet).length > 0) {
          newClassObject["media"]["tablet"]["after"] = fullAfterTablet;
        }
        // new before after focus states
        if (Object.keys(fullActiveTablet).length > 0) {
          newClassObject["media"]["tablet"]["active"] = fullActiveTablet;
        }
        if (Object.keys(fullFocusTablet).length > 0) {
          newClassObject["media"]["tablet"]["focus"] = fullFocusTablet;
        }
        if (Object.keys(fullHoverBeforeTablet).length > 0) {
          newClassObject["media"]["tablet"]["hover:before"] = fullHoverBeforeTablet;
        }
        if (Object.keys(fullFocusBeforeTablet).length > 0) {
          newClassObject["media"]["tablet"]["focus:before"] = fullFocusBeforeTablet;
        }
        if (Object.keys(fullActiveBeforeTablet).length > 0) {
          newClassObject["media"]["tablet"]["active:before"] = fullActiveBeforeTablet;
        }

        if (Object.keys(fullOriginalPhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"][
            "original"
          ] = fullOriginalPhonePortrait;
        }
        if (Object.keys(fullHoverPhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"][
            "hover"
          ] = fullHoverPhonePortrait;
        }
        if (Object.keys(fullBeforePhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"][
            "before"
          ] = fullBeforePhonePortrait;
        }
        if (Object.keys(fullAfterPhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"][
            "after"
          ] = fullAfterPhonePortrait;
        }
        // new before after focus states
        if (Object.keys(fullActivePhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"]["active"] = fullActivePhonePortrait;
        }
        if (Object.keys(fullFocusPhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"]["focus"] = fullFocusPhonePortrait;
        }
        if (Object.keys(fullHoverBeforePhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"]["hover:before"] = fullHoverBeforePhonePortrait;
        }
        if (Object.keys(fullFocusBeforePhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"]["focus:before"] = fullFocusBeforePhonePortrait;
        }
        if (Object.keys(fullActiveBeforePhonePortrait).length > 0) {
          newClassObject["media"]["phone-portrait"]["active:before"] = fullActiveBeforePhonePortrait;
        }

        if (Object.keys(fullOriginalPhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"][
            "original"
          ] = fullOriginalPhoneLandscape;
        }
        if (Object.keys(fullHoverPhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"][
            "hover"
          ] = fullHoverPhoneLandscape;
        }
        if (Object.keys(fullBeforePhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"][
            "before"
          ] = fullBeforePhoneLandscape;
        }
        if (Object.keys(fullAfterPhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"][
            "after"
          ] = fullAfterPhoneLandscape;
        }
        // new before after focus states
        if (Object.keys(fullActivePhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"]["active"] = fullActivePhoneLandscape;
        }
        if (Object.keys(fullFocusPhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"]["focus"] = fullFocusPhoneLandscape;
        }
        if (Object.keys(fullHoverBeforePhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"]["hover:before"] = fullHoverBeforePhoneLandscape;
        }
        if (Object.keys(fullFocusBeforePhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"]["focus:before"] = fullFocusBeforePhoneLandscape;
        }
        if (Object.keys(fullActiveBeforePhoneLandscape).length > 0) {
          newClassObject["media"]["phone-landscape"]["active:before"] = fullActiveBeforePhoneLandscape;
        }
        

        if (
          Object.keys(newClassObject["media"]["phone-landscape"]).length == 0
        ) {
          delete newClassObject["media"]["phone-landscape"];
        }
        if (
          Object.keys(newClassObject["media"]["phone-portrait"]).length == 0
        ) {
          delete newClassObject["media"]["phone-portrait"];
        }
        if (Object.keys(newClassObject["media"]["tablet"]).length == 0) {
          delete newClassObject["media"]["tablet"];
        }
        if (Object.keys(newClassObject["media"]["page-width"]).length == 0) {
          delete newClassObject["media"]["page-width"];
        }
        if (Object.keys(newClassObject["media"]).length == 0) {
          delete newClassObject["media"];
        }
      } else {
        classObject = JSON.parse(JSON.stringify(component.options));

        // remove ID only properties
        for (let prop of idOnlyProperties) {
          if (classObject[prop]) {
            delete classObject[prop];
          }
        }

        newClassObject["original"] = fullOriginalObject;

        for (let prop of idOnlyOriginls) {
          if (classObject["original"][prop]) {
            delete classObject["original"][prop];
          }
        }
      }

      iframeScope.classes[myClassName] = newClassObject;

      component.options["classes"] = component.options["classes"] || [];
      component.options["classes"].push(myClassName);

      iframeScope.componentsClasses[id] =
        iframeScope.componentsClasses[id] || [];
      iframeScope.componentsClasses[id].push(myClassName);

      iframeScope.componentsClasses[id] =
        iframeScope.componentsClasses[id] || [];
      iframeScope.componentsClasses[id].slice(1, 1);

      iframeScope.setCurrentClass(myClassName);

      presentClasses.forEach(removeFilteredClasses);

      function removeFilteredClasses(item) {
        key = iframeScope.componentsClasses[id].indexOf(item);
        if (key > -1) {
          // remove this class
          iframeScope.componentsClasses[id].splice(key, 1);
          var remove = item;
        }

        iframeScope.findComponentItem(
          iframeScope.componentsTree.children,
          id,
          iframeScope.updateTreeComponentClasses,
          remove
        );
        iframeScope.unsavedChanges();
      }

      var oxyDynaList = iframeScope
        .getComponentById(id)
        .closest(".oxy-dynamic-list");

      if (oxyDynaList.length > 0) {
        iframeScope.rebuildDOM(oxyDynaList.attr("ng-attr-component-id"));
      } else if (iframeScope.component.active.name === "ct_span") {
        iframeScope.rebuildDOM(iframeScope.component.active.parent.id);
      } else {
        iframeScope.rebuildDOM(id);
      }
      iframeScope.$apply();
    }
  }

  $("document").ready(function () {
    let panelContainer = $(
      ".oxygen-media-query-and-selector-wrapper",
      parent.document
    );
    let position = 0;
    if (panelContainer.length < 1) {
      panelContainer = $(
        "#eeui-editor--active-selector-box-wrapper",
        parent.document
      );
      position = 1;
    }

    let mergeButton = $(
      `<div class="oxymade-merge-button oxymade-merge-onlyid" style="display: none;">Merge classes</div>`
    );
    
    
    let buttonContainer = $('<div class="oxymade-merge-wrapper"></div>');
    
    let utilContainer = $('<div class="oxymade-util-container"></div>');
        
    buttonContainer.append(mergeButton);
    
    buttonContainer.append(utilContainer);

    if (position === 0) {
      buttonContainer.insertAfter(panelContainer);
    } else {
      buttonContainer
        .css({ marginBottom: "14px" })
        .insertBefore(panelContainer.prev());
    }

    if (
      $("#eeui-styles-css", parent.document).length > 0 &&
      $("#eeui-styles-css", parent.document).attr("href").indexOf("light.css") >
        0
    ) {
      $(".oxymade-merge-button", parent.document).css({
        color: "#000",
        backgroundColor: "#bbb",
        border: "1px solid #ddd",
      });
    }

    mergeButton.on("click", doMerge);
    
    function clearUtilLock () {
      buttonContainer.children(".oxymade-merge-utilitywarning").hide();
      $(".oxygen-sidebar-tabs", parent.document).css({ display: "" });
      $("#oxygen-sidebar-control-panel-basic-styles", parent.document).css({
        display: "",
      });
      $(utilContainer).empty();
      $(utilContainer).hide();
    }

    let switchEditToId = iframeScope.switchEditToId;
    let setCurrentClass = iframeScope.setCurrentClass;
    let setCustomSelectorToEdit = iframeScope.setCustomSelectorToEdit;
    let activateComponent = iframeScope.activateComponent;

    iframeScope.switchEditToId = (prop) => {
      setTimeout(() => {
        if (iframeScope.isEditing("id")) {
          buttonContainer.children(".oxymade-merge-onlyid").hide();
          buttonContainer.children(".oxymade-merge-utilitywarning").hide();
          $(".oxygen-sidebar-tabs", parent.document).css({ display: "" });
          $("#oxygen-sidebar-control-panel-basic-styles", parent.document).css({
            display: "",
          });
          $(utilContainer).empty();
          $(utilContainer).hide();
        }
      }, 200);
      return switchEditToId(prop);
    };

    iframeScope.setCurrentClass = (prop) => {
      buttonContainer.children(".oxymade-merge-onlyid").show();

      setCurrentClass(prop);

      if (typeof iframeScope.classes[prop] == "undefined") {
        // console.log("undef");
      } else {
          clearUtilLock();
      }

      return setCurrentClass(prop);
    };

    iframeScope.setCustomSelectorToEdit = (prop) => {
      if (prop !== false) {
        buttonContainer.hide();
      }
      setCustomSelectorToEdit(prop);
    };
  });
})(jQuery);
