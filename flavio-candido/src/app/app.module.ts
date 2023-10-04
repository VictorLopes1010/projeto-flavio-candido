import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPage } from './pages/main-page/main-page.component';

import { HeaderComponent } from './components/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
