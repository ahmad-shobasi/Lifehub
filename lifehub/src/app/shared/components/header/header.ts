import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div>
      <h3>{{ pageTitle }}</h3>
      <p class="text-muted txt-success">{{ subtitle }}</p>
    </div>
  `,
  styleUrl: './header.scss',
})
export class Header {
  @Input() pageTitle: string = '';
  @Input() subtitle: string = '';
}
