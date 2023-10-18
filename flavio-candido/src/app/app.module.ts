import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPage } from './pages/main-page/main-page.component';

import { HeaderComponent } from './components/header-component/header-component.component';

import { IntroMainPageComponent } from './components/intro-main-page-component/intro-main-page.component';

import { OurServices } from './components/our-services-component/our-services';

import { SpecifiedServices } from './components/specified-services-component/specified-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    HeaderComponent,
    IntroMainPageComponent,
    OurServices,
    SpecifiedServices
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
