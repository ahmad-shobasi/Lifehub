import { Component, inject, ViewChild } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-topbar',
  imports: [MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule],
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
  search(search: HTMLInputElement) {
    console.log(search.value);
  }
}
