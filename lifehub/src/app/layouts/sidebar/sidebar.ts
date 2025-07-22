import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  isCollapsed:boolean = false;
  @Output() resizeSidebar = new EventEmitter()

  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed
    this.resizeSidebar.emit();
  }
}
