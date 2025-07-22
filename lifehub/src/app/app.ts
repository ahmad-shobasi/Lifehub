import { Component, inject, OnInit, signal } from '@angular/core';
import { Layout } from './layouts/layout/layout';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  themeService = inject(ThemeService)
  ngOnInit(): void {
    this.themeService.initalTheme()
  }
}
