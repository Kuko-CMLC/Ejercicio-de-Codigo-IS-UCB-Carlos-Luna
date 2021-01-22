import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItunesItemComponent } from './components/itunes-item/itunes-item.component';
import { ItunesComponent } from './components/itunes/itunes.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItunesItemComponent,
    ItunesComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
