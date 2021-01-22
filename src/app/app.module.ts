import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumCollectionItemComponent } from './components/album-collection-item/album-collection-item.component';
import { AlbumCollectionComponent } from './components/album-collection/album-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AlbumCollectionItemComponent,
    AlbumCollectionComponent,
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
