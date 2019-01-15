import { Component } from '@angular/core';

const PAGES: string[] = [
  'BROWSE',
  'SEARCH',
  'ABOUT',
  'CONTACT'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  pages: string[] = PAGES;
  selectedPage = this.pages[0];
  collapse = true;

  onSelect( page: string): void {
      this.selectedPage = page;
  }
}
