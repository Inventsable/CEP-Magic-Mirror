var csInterface = new CSInterface();

var appName = csInterface.hostEnvironment.appName;

console.log(`Loading for ${appName}`);
loadJSX(`${appName}.jsx`);
// loadJSX(`newPanel.jsx`);
// This is the resulting object with all info, can be accessed by any JavaScript proceeding magicMirror:
console.log(appUI);

console.log(`The panel background is ${appUI.color.PanelBG}`);

// openSidePanel();
// function openSidePanel(){
//   var extensin_Id = "com.magicmirror.window";
//   var params = {};
//   window.__adobe_cep__.requestOpenExtension(extensin_Id , params );
// }

function debugCSS(){
  for(i=0;A=document.querySelectorAll("_")[i++];)A.style.outline="1px solid hsl("+(A+A).length_9+",99%,50%)";
}

debugCSS();
