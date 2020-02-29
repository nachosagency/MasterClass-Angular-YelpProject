import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultzoneComponent } from './resultzone/resultzone.component';
import { HotelsPageComponent } from './hotels-page/hotels-page.component';
import { VoituresPageComponent } from './voitures-page/voitures-page.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ResultzoneComponent,
    HotelsPageComponent,
    VoituresPageComponent,
    RestaurantsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
