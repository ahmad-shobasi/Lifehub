import { Injectable, signal } from '@angular/core';

export type Mode = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly isDarkSchema = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  private mode = signal<Mode>('dark');
  constructor() {}
  initalTheme() {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDarkSchema ? 'dark' : 'light'
    );
  }

  setThemeMode(mode: Mode) {
    this.mode.set(mode);
    document.documentElement.setAttribute('data-theme', mode);
  }
}
