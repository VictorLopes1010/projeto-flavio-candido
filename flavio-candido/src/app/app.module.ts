import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPage } from './pages/main-page/main-page.component';

import { HeaderComponent } from './components/header-component/header-component.component';

import { IntroMainPageComponent } from './components/intro-main-page-component/intro-main-page.component';

import { OurServices } from './components/our-services-component/our-services';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    HeaderComponent,
    IntroMainPageComponent,
    OurServices
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
