import { app, BrowserWindow } from "electron";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: true,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Load web app INSIDE the Electron desktop window
  mainWindow.loadURL("https://rahulshettyacademy.com/client");

  // Open DevTools only in non-production environments
  if (process.env.NODE_ENV !== "production") {
    mainWindow.webContents.openDevTools();
  }
}

// Electron app lifecycle handling (industry standard)
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  // macOS convention
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
