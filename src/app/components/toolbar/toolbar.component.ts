import { Component, OnInit } from '@angular/core';
const electron = require("electron")
const { BrowserWindow } = require("electron")
const app = electron.app

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public isMac: boolean = (process.platform == 'darwin') ? true : false    
  constructor() {
  }

  ngOnInit() {
  }

  closeApp() {
      electron.remote.app.quit()
  }

  minimizeApp() {
      electron.remote.app.hide()
  }

  fullScreen() {

  }

}
