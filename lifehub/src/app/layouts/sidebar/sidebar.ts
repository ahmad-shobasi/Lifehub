import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isCollapsed: boolean = false;
  private router = inject(Router);
  @Output() resizeSidebar = new EventEmitter();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.resizeSidebar.emit();
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
