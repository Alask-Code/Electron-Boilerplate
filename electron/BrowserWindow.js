const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');

function createWindow () {
  const win = new BrowserWindow({
    icon,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    title: 'App Name Here'
  });
  win.removeMenu();
  win.loadFile('src/index.html');
  return win;
}

module.exports = createWindow;
