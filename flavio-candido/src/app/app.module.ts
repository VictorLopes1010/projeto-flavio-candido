import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPage } from './pages/main-page/main-page.component';

import { HeaderComponent } from './components/header-component/header-component.component';

import { IntroMainPageComponent } from './components/intro-main-page-component/intro-main-page.component';

import { OurServices } from './components/our-services-component/our-services.component';

import { SpecifiedServices } from './components/specified-services-component/specified-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CarouselPortfolioComponent } from './components/carousel-portfolio/carousel-portfolio.component';
import { PortfolioComponentComponent } from './components/portfolio-component/portfolio-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PartnershipComponent } from './components/partnership-component/partnership-component.component';
import { ContactComponent } from './components/contact-component/contact-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    HeaderComponent,
    IntroMainPageComponent,
    OurServices,
    SpecifiedServices,
    CarouselPortfolioComponent,
    PortfolioComponentComponent,
    PartnershipComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
