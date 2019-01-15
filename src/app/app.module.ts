import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule, MatDividerModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

import { NavbarComponent } from './components/navbar/navbar';

import { AppComponent } from './app.component';

const COMPONENTS = [
  NavbarComponent
];

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    FlexModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
