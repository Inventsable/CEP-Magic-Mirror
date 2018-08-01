var appName = csInterface.hostEnvironment.appName;

console.log(`Loading for ${appName}`);
loadJSX(`${appName}.jsx`);

// This is the resulting object with all info, can be accessed by any JavaScript proceeding magicMirror:
console.log(appUI);

console.log(`The panel background is ${appUI.color.PanelBG}`);
