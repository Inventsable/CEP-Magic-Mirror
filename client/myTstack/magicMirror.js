// Migrate to magic mirror
// Reorganize master object for data and color, match variables from root

var cs = new CSInterface();
var docExist;
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
}

function onActive(){
  console.log("activated");
}


function updateThemeWithAppSkinInfo() {
    document.body.style.backgroundColor = appInfo.panelBG;
    var htmlBody = document.getElementsByTagName("html");
    // htmlBody[0].style.backgroundColor = appInfo.panelBG;
    // htmlBody[0].style.fontSize = appInfo.baseFontSize;
    // htmlBody[0].style.fontFamily = appInfo.baseFontFamily;
    // htmlBody[0].style.color = appInfo.baseFontColor;
    // htmlBody[0].style.setProperty('--colorPanelBG', '#ff0000');

    // var html = document.getElementsByTagName('html')[0];
    // html.style.cssText = "--colorPanelBG: red";
    reColorUI();
  }

function reColorUI(){
  document.documentElement.style.setProperty('--colorHover', 'red');
  // YESSSSSS
}


var sheets = [].slice.call(document.styleSheets);
sheets.forEach(function(e){
  if (e.href.includes('adobeStyle.css')) {
    var style = e.cssRules.style;
    e.cssRules[1].style.setProperty('--colorPanelBG', 'red');
    // console.log(e.cssRules[1].style);
    // console.log(e.cssRules.style[0]);

    // e.cssRules[1].style.setProperty('--colorPanelBG', '#ff0000')
  }

})

  // var jsSheet = document.styleSheets[7];
  // var jsRules = jsSheet.cssRules;
  // console.log(sheet);
//   for (var i = 0; i < document.styleSheets.length; i++){
//
//   }
// }



function loadBorderWidth() {
  if (appInfo.name === 'ILST') {
    appInfo.borderWidth = "1.5px";
  } else if (appInfo.name === 'PHXS') {
    appInfo.borderWidth = "1.25px";
  } else if (appInfo.name === 'AEFT') {
    appInfo.borderWidth = "1.5px";
  }
}



function logSkin(params) {
    var csInterface = new CSInterface();
    var appSkin = params;
    appInfo.system = csInterface.getOSInformation('--user-agent');
    appInfo.name = csInterface.hostEnvironment.appName;
    appInfo.version = csInterface.hostEnvironment.appVersion;
    appInfo.panelBG = toHex(appSkin.panelBackgroundColor.color);
    appInfo.baseFont = appSkin.baseFontFamily;
    appInfo.baseFontSize = appSkin.baseFontSize;

    if (appSkin.panelBackgroundColor.color.red > 220) {
      appInfo.theme = 'Lightest';
      switch(appInfo.name) {
        case 'PHXS':
          appInfo.disableColor = toHex(appSkin.panelBackgroundColor.color, -10);
          appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, -72);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, -168);
          appInfo.borderDisabledColor = toHex(appSkin.panelBackgroundColor.color, -18);
          appInfo.borderActiveColor = toHex(appSkin.panelBackgroundColor.color, -72);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, -36);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, -190);
          appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, 12);
          appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -49);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, 15);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 15);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.disableColor = toHex(appSkin.panelBackgroundColor.color, -10);
          appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, -42);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, -168);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, -20);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, -153);
          appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, 9);
          appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -51);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, 15);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 15);
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
          appInfo.disableColor = toHex(appSkin.panelBackgroundColor.color, 5);
          appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, -74);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, -128);
          appInfo.borderDisabledColor = toHex(appSkin.panelBackgroundColor.color, -11);
          appInfo.borderActiveColor = toHex(appSkin.panelBackgroundColor.color, -72);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, -36);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, -158);
          appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, 25);
          appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -56);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, 25);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 25);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.disableColor = toHex(appSkin.panelBackgroundColor.color, -8);
          appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, -32);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, -168);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, -16);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, -107);
          appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, 36);
          appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -34);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, 43);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 43);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        default:
          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          break;
      }
    } else if (appSkin.panelBackgroundColor.color.red > 100) {
      appInfo.theme = 'Dark';
      appInfo.disableColor = toHex(appSkin.panelBackgroundColor.color, 6);
      switch(appInfo.name) {
        case 'PHXS':
          appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, 69);
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, 133);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, 19);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, 135);
          appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, -14);
          appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -27);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, -14);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, -14);
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, 30);
          appInfo.activeColor = '#46a0f5';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, 133);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, 12);
          appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -35);
          appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, -22);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, 104);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, -14);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 202);
          appInfo.baseFontActiveColor = toHex(appSkin.panelBackgroundColor.color, -255);
          break;
        default:
          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          break;
      }
    } else {
      appInfo.theme = 'Darkest';
      appInfo.baseFontDisabledColor = toHex(appSkin.panelBackgroundColor.color, 32);
      appInfo.highlightColor = toHex(appSkin.panelBackgroundColor.color, -9);
      appInfo.disableColor = toHex(appSkin.panelBackgroundColor.color, 7);
      appInfo.selectColor = toHex(appSkin.panelBackgroundColor.color, -19);
      switch(appInfo.name) {
        case 'PHXS':
          appInfo.activeColor = '#0f64d2';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, 162);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, 21);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, 162);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, -9);
          appInfo.inputBGColorActive = appInfo.inputBGColorIdle;
          appInfo.baseFontActiveColor = appInfo.baseFontColor;
          break;
        case 'ILST':
          appInfo.activeColor = '#46a0f5';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, 133);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, 12);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, 130);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, -12);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 202);
          appInfo.baseFontActiveColor = toHex(appSkin.panelBackgroundColor.color, -255);
          break;
        default:
          appInfo.activeColor = toHex(appSkin.systemHighlightColor);
          // appInfo.activeColor = '#46a0f5';
          appInfo.baseFontColor = toHex(appSkin.panelBackgroundColor.color, 133);
          appInfo.borderColor = toHex(appSkin.panelBackgroundColor.color, 12);
          appInfo.color = toHex(appSkin.panelBackgroundColor.color, 130);
          appInfo.inputBGColorIdle = toHex(appSkin.panelBackgroundColor.color, -12);
          appInfo.inputBGColorActive = toHex(appSkin.panelBackgroundColor.color, 202);
          appInfo.baseFontActiveColor = toHex(appSkin.panelBackgroundColor.color, -255);
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
