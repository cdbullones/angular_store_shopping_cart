import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <span>Tienda</span>
    <span class="spacer"></span>
    <app-cart></app-cart>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent { }
