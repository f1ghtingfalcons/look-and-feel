import { Component } from '@angular/core';

const PAGES: string[] = [
    'BROWSE',
    'SEARCH',
    'ABOUT',
    'CONTACT'
];

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.sass']
})
export class NavbarComponent {
    pages: string[] = PAGES;
    selectedPage = this.pages[0];
    collapse = true;

    onSelect( page: string): void {
        this.selectedPage = page;
    }
}
