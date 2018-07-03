var csInterface = new CSInterface();
var appSkin = csInterface.hostEnvironment.appSkinInfo;
var sysPath = csInterface.getSystemPath(SystemPath.EXTENSION);
var logPath = sysPath + "/log/";
var hostPath = sysPath + "/host/";
var appName = csInterface.hostEnvironment.appName;

// callDoc();
// buildUI();
logSkin(appSkin);
loadBorderWidth();
loadUniversalJSXLibraries();
console.log(`Loading for ${appName}`);
loadJSX(`${appName}.jsx`);

console.log(appInfo);
