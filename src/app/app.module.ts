import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultzoneComponent } from './resultzone/resultzone.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ResultzoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
