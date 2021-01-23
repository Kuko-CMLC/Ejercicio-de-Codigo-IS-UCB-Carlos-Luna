import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AlbumCollectionComponent } from "src/app/components/album-collection/album-collection.component";
import { FilterFieldComponent } from "src/app/components/filter-field/filter-field.component";
import { NotFoundArtistComponent } from "src/app/components/not-found-artist/not-found-artist.component";
import { WelcomeMessageComponent } from "src/app/components/welcome-message/welcome-message.component";
import { NgxPaginationModule } from "ngx-pagination";
import { IndexPageComponent } from "./index-page.component";
import { FormsModule } from "@angular/forms";
import { AlbumCollectionItemComponent } from "src/app/components/album-collection-item/album-collection-item.component";
import { ItunesService } from "src/app/services/itunes.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("IndexPageComponent", () => {
  let component: IndexPageComponent;
  let fixture: ComponentFixture<IndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule, FormsModule, HttpClientTestingModule],
      providers: [ItunesService],
      declarations: [
        IndexPageComponent,
        AlbumCollectionComponent,
        AlbumCollectionItemComponent,
        FilterFieldComponent,
        WelcomeMessageComponent,
        NotFoundArtistComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
