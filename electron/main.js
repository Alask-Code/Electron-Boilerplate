require('electron-reload')('../');

const { app: App } = require('electron');
const createWindow = require('./BrowserWindow');

App.whenReady().then(() => {
  createWindow();
});
