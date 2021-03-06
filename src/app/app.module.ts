import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexPageComponent } from "./pages/index-page/index-page.component";
import { HttpClientModule } from "@angular/common/http";
import { AlbumCollectionItemComponent } from "./components/album-collection-item/album-collection-item.component";
import { AlbumCollectionComponent } from "./components/album-collection/album-collection.component";
import { FilterFieldComponent } from "./components/filter-field/filter-field.component";
import { FormsModule } from "@angular/forms";
import { NotFoundArtistComponent } from "./components/not-found-artist/not-found-artist.component";
import { NgxPaginationModule } from "ngx-pagination";
import { WelcomeMessageComponent } from "./components/welcome-message/welcome-message.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AlbumCollectionItemComponent,
    AlbumCollectionComponent,
    FilterFieldComponent,
    NotFoundArtistComponent,
    WelcomeMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
