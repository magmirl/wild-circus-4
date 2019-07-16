import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerformancesComponent } from './performances/performances.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerformancesComponent,
    AboutUsComponent,
    PricesComponent,
    ContactComponent
    ContactComponent,
    MapComponent
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
