import React, { Component } from 'react';
//import {ipcRenderer} from 'electron';
import {BrowserWindow} from 'electron';


class WindowIpc {
    minimize() {
        let window = BrowserWindow.getFocusedWindow();
        window.minimize();
    }

    maximize() {
        let window = browserWindow.getFocusedWindow();
        window.maximize();
    }

    restore() {
        let window = browserWindow.getFocusedWindow();
        window.restore();
    } 

    close() {
        let window = browserWindow.getFocusedWindow();
        window.close();
    }
}

let ipcHandler = new WindowIpc();
export default ipcHandler;