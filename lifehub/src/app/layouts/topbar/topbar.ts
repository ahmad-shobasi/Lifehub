import { Component, inject, ViewChild } from '@angular/core';
import { Mode, ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  themeService = inject(ThemeService);
  @ViewChild('darkBtn') dark: any;
  @ViewChild('lightBtn') light: any;
  isDarkTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)')
    .matches;
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setThemeMode(this.isDarkTheme ? 'dark' : 'light');
  }
}
