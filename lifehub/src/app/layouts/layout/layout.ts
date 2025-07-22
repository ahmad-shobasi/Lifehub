import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as LayoutTree from '../index'
@Component({
  selector: 'app-layout',
  imports: [LayoutTree.Sidebar, LayoutTree.Topbar, LayoutTree.Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  isCollpase:boolean = false;
  toggleSidebar(){
    this.isCollpase = !this.isCollpase
  }
}
