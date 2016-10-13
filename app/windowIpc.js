import React, { Component } from 'react';
import {remote} from 'electron';


class WindowIpc {
    minimize() {
        let window = remote.BrowserWindow.getFocusedWindow();
        if ( window ) {
                window.minimize();
        }
    }

    maximize() {
        let window = remote.BrowserWindow.getFocusedWindow();
        window.maximize();
    }

    restore() {
        let window = remote.BrowserWindow.getFocusedWindow();
        window.restore();
    } 

    close() {
        let window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    }
}

let ipcHandler = new WindowIpc();
export default ipcHandler;