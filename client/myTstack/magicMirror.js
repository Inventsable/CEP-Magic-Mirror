// Migrate to magic mirror
// Reorganize master object for data and color, match variables from root

var cs = new CSInterface();
var docExist;
var appUI;
var appInfo = {
  system : 'none'
};

window.onload = init;
// window.onload = logSkin;

function init(){
  var appSkin = cs.hostEnvironment.appSkinInfo;
  logSkin(appSkin);
  loadBorderWidth();
  cs.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);
  // cs.addEventListener('documentAfterActivate', callDoc);
  cs.addEventListener('applicationActive', onActive);
  appInfo.name = cs.hostEnvironment.appName;
  if (navigator.platform.indexOf('Win') > -1) {
    appUI.data.os = 'Win';
  } else if (navigator.platform.indexOf('Mac') > -1) {
    appUI.data.os = 'Mac';
  }
  if (cs.hostEnvironment.appName === 'ILST') {
    cs.evalScript('app.documents[0].name', function(e){
      appUI.data.doc = e;
      cs.evalScript('app.documents[0].path', function(i){
        appUI.data.docPath = i;
      })
    })
  }
  buildUI();
}

function onActive(){
  console.log("activated");
}


function updateThemeWithAppSkinInfo() {
    reColorUI();
  }


var appUI = {
  color : {
    PanelBG: "#323232",
    Border: "#3e3e3e",
    Icon: "#b4b4b4",
    Font: "#b7b7b7",
    Hover: "green",
    Active: "#1f1f1f",
    Focus: "#46a0f5",
    Disabled: "#393939",
    FontDisabled: "#525252",
    FontActive: "#b7b7b7",
    InputIdle: "#262626",
    InputActive: "#fcfcfc",
  },
  btn : {
    Padding: ".0625rem .5rem",
    Margin: "auto .035rem",
    Height: "1.75rem",
    Width: "1.25rem",
    Border: "1.5px solid transparent",
  },
  input : {
    Height: "2rem",
    WidthMD : "3rem",
    WidthLG : "4rem",
    Width1X : "100%"
  },
  font: {
    Family: "Adobe Clean",
    Size: "10px"
  },
  data : {
    name: cs.hostEnvironment.appName,
    doc: "none",
    docPath: "none",
    theme: "none",
    extPath: cs.getSystemPath(SystemPath.EXTENSION),
    panelWidth: window.innerWidth,
    panelHeight: window.innerHeight,
    system: cs.getOSInformation('--user-agent'),
    version: cs.hostEnvironment.appVersion,
    os: "none"
  }
};

console.log(appUI);



function reColorUI(){
  for (let [key, value] of Object.entries(appUI)) {
    if (key === 'data') continue;
    for (let [index, data] of Object.entries(appUI[key])) {
      document.documentElement.style.setProperty('--' + key + index, data);
    }
  }
}

function buildUI(){
  var btnToggles = ['switch', 'switch-on', 'switch-off'];
  for (var i = 0; i < btnToggles.length; i++) {
    var toggleBtn = [].slice.call(document.getElementsByClassName('adobe-btn-' + btnToggles[i]));
    toggleBtn.forEach(function(v,i,a) {
      v.addEventListener("click", function(e){
        var classN;
        if (e.target.classList.contains('adobe')) {
          classN = e.target.classList;
        } else {
          classN = e.target.parentNode.classList;
        }
        if (classN.contains('adobe-btn-switch-on')) {
          classN.remove('adobe-btn-switch-on');
          classN.add('adobe-btn-switch-off')
        } else {
          classN.remove('adobe-btn-switch-off', 'adobe-btn-switch');
          classN.add('adobe-btn-switch-on');
        }
        // for (let elem of .body.children) {
        //   alert(elem); // DIV, UL, DIV, SCRIPT
        // }
        // var t = findToolbar(e);
        // console.log(t);
      }, false);
    });
  }
}

  // function findToolbar(e){
  //   var count = 0;
  //   while (e.target.classList.contains('adobe-toolbar') !== true) {
  //     console.log(count++);
  //       el = e.target.parentNode;
  //       if (el.classList.contains('adobe-toolbar') == true)
  //           return el;
  //   }
  // }


  // function findUpTag(el, tag) {

      // return null;
  // }

  // function findUpTag(el, tag) {
  //     while (el.parentNode) {
  //         el = el.parentNode;
  //         if (el.tagName === tag)
  //             return el;
  //     }
  //     return null;
  // }

  // function parents(node) {
  //   var nodes = []
  //   for (; node; node = node.parentNode) {
  //     nodes.push(node)
  //   }
  //   return nodes
  // }
  //
  // function commonAncestor(node1, node2) {
  //   var parents1 = parents(node1)
  //   var parents2 = parents(node2)
  //
  //   for (var i = 0; i < parents1.length; i++) {
  //     if (parents2.indexOf(parents1[i]) > -1) return parents1[i]
  //   }

    // throw "No common ancestor!"
  // }





function loadBorderWidth() {
  if (appUI.data.name === 'PHXS') {
    appUI.borderWidth = "1.25px";
  } else {
    appUI.data.borderWidth = "1.5px";
  }
}



function logSkin(params) {
    var csInterface = new CSInterface();
    var appSkin = params;
    appUI.data.system = csInterface.getOSInformation('--user-agent');
    appUI.data.name = csInterface.hostEnvironment.appName;
    appUI.data.version = csInterface.hostEnvironment.appVersion;
    // appUI.color.PanelBG = toHex(appSkin.panelBackgroundColor.color);
    var baseColor = appSkin.panelBackgroundColor.color;
    // appUI.color.Font = appSkin.baseFontFamily;
    appInfo.baseFontSize = appSkin.baseFontSize;

    if (appSkin.panelBackgroundColor.color.red > 220) {
      appInfo.theme = 'Lightest';
      switch(appInfo.name) {
        case 'PHXS':
          appInfo.disableColor = toHex(baseColor, -10);
          appInfo.baseFontDisabledColor = toHex(baseColor, -72);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(baseColor, -168);
          appInfo.borderDisabledColor = toHex(baseColor, -18);
          appInfo.borderActiveColor = toHex(baseColor, -72);
          appInfo.borderColor = toHex(baseColor, -36);
          appInfo.color = toHex(baseColor, -190);
          appInfo.highlightColor = toHex(baseColor, 12);
          appInfo.selectColor = toHex(baseColor, -49);
          appInfo.inputBGColorIdle = toHex(baseColor, 15);
          appInfo.inputBGColorActive = toHex(baseColor, 15);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.disableColor = toHex(baseColor, -10);
          appInfo.baseFontDisabledColor = toHex(baseColor, -42);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(baseColor, -168);
          appInfo.borderColor = toHex(baseColor, -20);
          appInfo.color = toHex(baseColor, -153);
          appInfo.highlightColor = toHex(baseColor, 9);
          appInfo.selectColor = toHex(baseColor, -51);
          appInfo.inputBGColorIdle = toHex(baseColor, 15);
          appInfo.inputBGColorActive = toHex(baseColor, 15);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        default:

          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          break;
      }
    } else if (appSkin.panelBackgroundColor.color.red > 150) {
      appInfo.theme = 'Light';
      switch(appInfo.name) {
        case 'PHXS':

          appInfo.disableColor = toHex(baseColor, 5);
          appInfo.baseFontDisabledColor = toHex(baseColor, -74);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(baseColor, -128);
          appInfo.borderDisabledColor = toHex(baseColor, -11);
          appInfo.borderActiveColor = toHex(baseColor, -72);
          appInfo.borderColor = toHex(baseColor, -36);
          appInfo.color = toHex(baseColor, -158);
          appInfo.highlightColor = toHex(baseColor, 25);
          appInfo.selectColor = toHex(baseColor, -56);
          appInfo.inputBGColorIdle = toHex(baseColor, 25);
          appInfo.inputBGColorActive = toHex(baseColor, 25);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.disableColor = toHex(baseColor, -8);
          appInfo.baseFontDisabledColor = toHex(baseColor, -32);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(baseColor, -168);
          appInfo.borderColor = toHex(baseColor, -16);
          appInfo.color = toHex(baseColor, -107);
          appInfo.highlightColor = toHex(baseColor, 36);
          appInfo.selectColor = toHex(baseColor, -34);
          appInfo.inputBGColorIdle = toHex(baseColor, 43);
          appInfo.inputBGColorActive = toHex(baseColor, 43);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        default:
          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          break;
      }
    } else if (appSkin.panelBackgroundColor.color.red > 100) {
      appInfo.theme = 'Dark';
      appInfo.disableColor = toHex(baseColor, 6);
      switch(appInfo.name) {
        case 'PHXS':
          appInfo.baseFontDisabledColor = toHex(baseColor, 69);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(baseColor, 133);
          appInfo.borderColor = toHex(baseColor, 19);
          appInfo.color = toHex(baseColor, 135);
          appInfo.highlightColor = toHex(baseColor, -14);
          appInfo.selectColor = toHex(baseColor, -27);
          appInfo.inputBGColorIdle = toHex(baseColor, -14);
          appInfo.inputBGColorActive = toHex(baseColor, -14);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.baseFontDisabledColor = toHex(baseColor, 30);
          appInfo.activeColor = '#46a0f5';
          appInfo.baseFontColor = toHex(baseColor, 133);
          appInfo.borderColor = toHex(baseColor, 12);
          appInfo.selectColor = toHex(baseColor, -35);
          appInfo.highlightColor = toHex(baseColor, -22);
          appInfo.color = toHex(baseColor, 104);
          appInfo.inputBGColorIdle = toHex(baseColor, -14);
          appInfo.inputBGColorActive = toHex(baseColor, 202);
          appInfo.baseFontActiveColor = toHex(baseColor, -255);
          break;
        default:
          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          break;
      }
    } else {
      appInfo.theme = 'Darkest';
      appInfo.baseFontDisabledColor = toHex(baseColor, 32);
      appInfo.highlightColor = toHex(baseColor, -9);
      appInfo.disableColor = toHex(baseColor, 7);
      appInfo.selectColor = toHex(baseColor, -19);
      switch(appInfo.name) {
        case 'PHXS':
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(baseColor, 162);
          appInfo.borderColor = toHex(baseColor, 21);
          appInfo.color = toHex(baseColor, 162);
          appInfo.inputBGColorIdle = toHex(baseColor, -9);
          appInfo.inputBGColorActive = appInfo.inputBGColorIdle;
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.activeColor = '#46a0f5';
          appInfo.baseFontColor = toHex(baseColor, 133);
          appInfo.borderColor = toHex(baseColor, 12);
          appInfo.color = toHex(baseColor, 130);
          appInfo.inputBGColorIdle = toHex(baseColor, -12);
          appInfo.inputBGColorActive = toHex(baseColor, 202);
          appInfo.baseFontActiveColor = toHex(baseColor, -255);
          break;
        default:
          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          // appInfo.activeColor = '#46a0f5';
          appInfo.baseFontColor = toHex(baseColor, 133);
          appInfo.borderColor = toHex(baseColor, 12);
          appInfo.color = toHex(baseColor, 130);
          appInfo.inputBGColorIdle = toHex(baseColor, -12);
          appInfo.inputBGColorActive = toHex(baseColor, 202);
          appInfo.baseFontActiveColor = toHex(baseColor, -255);
          break;
      }
    }
    updateThemeWithAppSkinInfo();
}



/**
 * Convert the Color object to string in hexadecimal format;
 */
function toHex(color, delta) {
    function computeValue(value, delta) {
        var computedValue = !isNaN(delta) ? value + delta : value;
        if (computedValue < 0) {
            computedValue = 0;
        } else if (computedValue > 255) {
            computedValue = 255;
        }

        computedValue = Math.round(computedValue).toString(16);
        return computedValue.length == 1 ? "0" + computedValue : computedValue;
    }

    var hex = "";
    if (color) {
        with (color) {
             hex = computeValue(red, delta) + computeValue(green, delta) + computeValue(blue, delta);
        };
    }
    return "#" + hex;
}

function onAppThemeColorChanged(event) {
    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
    logSkin(skinInfo);
    console.log(`Theme changed to ${appInfo.theme}`);
}



// for (value in appUI.color) {
//   console.log('--color' + value, appUI.color);
// }

// $$$ // document.documentElement.style.setProperty('--color' + value, 'red');

// var sheets = [].slice.call(document.styleSheets);
// sheets.forEach(function(e){
//   if (e.href.includes('adobeStyle.css')) {
//     var style = e.cssRules.style;
//     e.cssRules[1].style.setProperty('--colorPanelBG', 'red');
//     // console.log(e.cssRules[1].style);
//     // console.log(e.cssRules.style[0]);
//
//     // e.cssRules[1].style.setProperty('--colorPanelBG', '#ff0000')
//   }
//
// })

  // var jsSheet = document.styleSheets[7];
  // var jsRules = jsSheet.cssRules;
  // console.log(sheet);
//   for (var i = 0; i < document.styleSheets.length; i++){
//
//   }
// }
