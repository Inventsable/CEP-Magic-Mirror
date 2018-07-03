// Migrate to magic mirror

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
    htmlBody[0].style.fontSize = appInfo.baseFontSize;
    htmlBody[0].style.fontFamily = appInfo.baseFontFamily;
    htmlBody[0].style.color = appInfo.baseFontColor;
    reColorUI();
  }

function reColorUI(){
  document.documentElement.style.setProperty('--colorPanelBG', '#ff0000');
}



// var sheets = [].slice.call(document.styleSheets);
// sheets.forEach(function(e){
//   if (e.href.includes('adobeStyle.css')) {
//     var style = e.cssRules.style;
//     console.log(e.cssRules[1].style);
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









var btns = document.getElementsByClassName('adobe-btn');
btns = [].slice.call(btns);
var btnTools = document.getElementsByClassName('adobe-btn-tool');
btnTools = [].slice.call(btnTools);
var inputNums = document.getElementsByClassName('adobe-inputGroup-num');
inputNums = [].slice.call(inputNums);
var inputs = document.getElementsByClassName('adobe-input');
inputs = [].slice.call(inputs);
var hideBtn = document.getElementsByClassName('adobe-hide');
hideBtn = [].slice.call(hideBtn);
var focusBtn = document.getElementsByClassName('adobe-focus');
focusBtn = [].slice.call(focusBtn);
var hoverBtn = document.getElementsByClassName('adobe-hover');
hoverBtn = [].slice.call(hoverBtn);

var btnCorner = document.getElementsByClassName('adobe-btn-corner');
btnCorner = [].slice.call(btnCorner);
var btnUpDown = document.getElementsByClassName('adobe-upDown');
btnUpDown = [].slice.call(btnUpDown);

function buildUI_OLD(){
  btns.forEach(function(v,i,a) {
    v.addEventListener("mouseover", function(event){
      this.style.backgroundColor = appInfo.highlightColor;
      this.style.borderColor = appInfo.borderColor;
    }, false);
    v.addEventListener("mouseout", function(event){
      this.style.backgroundColor = 'transparent';
      this.style.borderColor = 'transparent';
    }, false);
  });
  btnTools.forEach(function(v,i,a) {
    v.addEventListener("mouseover", function(event){
      this.style.backgroundColor = appInfo.highlightColor;
      this.style.borderColor = appInfo.borderColor;
    }, false);
    v.addEventListener("mouseout", function(event){
      this.style.backgroundColor = 'transparent';
      this.style.borderColor = 'transparent';
    }, false);

    var dropDown = document.createElement("div");
    dropDown.classList.add("adobe-btn-corner");
    dropDown.style.borderColor = appInfo.color;
    dropDown.style.borderLeftColor = 'transparent';
    dropDown.style.borderRightColor = 'transparent';
    v.appendChild(dropDown);
  });

  inputNums.forEach(function(v,i,a) {
    var upDown = document.createElement("div");
    upDown.classList.add("adobe-upDown");
    upDown.style.borderColor = appInfo.borderColor;
    upDown.style.backgroundColor = appInfo.inputBGColorIdle;
    var upDown_Up = document.createElement("div");
    upDown_Up.classList.add("adobe-upDown-Up");
    upDown_Up.style.color = appInfo.baseFontColor;
    var iconUp = document.createElement("span");
    iconUp.classList.add("fa");
    iconUp.classList.add("fa-angle-up");
    upDown_Up.appendChild(iconUp);
    upDown.appendChild(upDown_Up);
    var upDown_Down = document.createElement("div");
    upDown_Down.classList.add("adobe-upDown-Down");
    upDown_Down.style.color = appInfo.baseFontColor;
    var iconDown = document.createElement("span");
    iconDown.classList.add("fa");
    iconDown.classList.add("fa-angle-down");
    upDown_Down.appendChild(iconDown);
    upDown.appendChild(upDown_Down);
    v.appendChild(upDown);

    var inputV = v.children;
    inputV[0].addEventListener("focus", function(e){
      var parent = e.target.parentNode;
      var upDownLight = parent.children;
      upDownLight[1].style.borderColor = appInfo.activeColor;
    }, false);
    inputV[0].addEventListener("blur", function(e){
      var parent = e.target.parentNode;
      var upDownLight = parent.children;
      upDownLight[1].style.borderColor = appInfo.borderColor;
    }, false);
  });

  inputs.forEach(function(v,i,a) {
    v.addEventListener("focus", function(event){
      this.style.backgroundColor = appInfo.inputBGColorActive;
      this.style.borderColor = appInfo.activeColor;
      this.style.color = appInfo.baseFontActiveColor;
    }, false);
    v.addEventListener("blur", function(event){
      this.style.backgroundColor = appInfo.inputBGColorIdle;
      this.style.borderColor = appInfo.borderColor;
      this.style.color = appInfo.baseFontColor;
    }, false);
  });
}




function reColorUI_OLD(){
  btns.forEach(function(v,i,a) {
      v.style.borderWidth = appInfo.borderWidth;
      v.style.color = appInfo.color;
  });

  btnCorner.forEach(function(v,i,a) {
    dropDown.style.borderColor = appInfo.color;
    dropDown.style.borderLeftColor = 'transparent';
    dropDown.style.borderRightColor = 'transparent';
  });

  btnUpDown.forEach(function(v,i,a) {
      v.style.color = appInfo.color;
      v.style.borderColor = appInfo.borderColor;
      v.style.backgroundColor = appInfo.inputBGColorIdle;
  });

  btnTools.forEach(function(v,i,a) {
      v.style.borderWidth = appInfo.borderWidth;
      v.style.color = appInfo.color;
  });

  inputs.forEach(function(v,i,a) {
      v.style.borderWidth = appInfo.borderWidth;
      v.style.backgroundColor = appInfo.inputBGColorIdle;
      v.style.borderColor = appInfo.borderColor;
      v.style.color = appInfo.baseFontColor;
  });

  hideBtn.forEach(function(v,i,a) {
      v.style.borderColor = appInfo.borderColor;
      v.style.backgroundColor = appInfo.disableColor
      v.style.color = appInfo.baseFontDisabledColor;
  });
  focusBtn.forEach(function(v,i,a) {
      v.style.borderColor = appInfo.borderColor;
      v.style.backgroundColor = appInfo.selectColor;
      v.style.color = appInfo.color;
  });
  hoverBtn.forEach(function(v,i,a) {
      // console.log(v);
      v.style.borderColor = appInfo.borderColor;
      v.style.backgroundColor = appInfo.highlightColor;
      v.style.color = appInfo.color;
  });
}

// function callDoc() {
// 	cs.evalScript(`doesExist()`, function(e){
// 		if (e) {
//       docExist = true;
//       console.log(e);
// 			cs.evalScript(`docName()`, function(b){
//         console.log(b);
//         var newData = b.split(",");
// 				appInfo.doc = newData[0];
//         appInfo.path = newData[1];
// 			});
// 		} else {
//       docExist = false;
// 			console.log(`No file is open yet`);
// 		}
// 	});
// }
