require('electron-reload')('../');

const { app: App, app } = require('electron');
const createWindow = require('./BrowserWindow');

App.whenReady().then(() => {
  createWindow();
});
app.setAppUserModelId('App Model Id Here');
