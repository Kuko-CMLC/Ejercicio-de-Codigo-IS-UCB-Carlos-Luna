import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AlbumCollectionItemComponent } from './components/album-collection-item/album-collection-item.component';
import { AlbumCollectionComponent } from './components/album-collection/album-collection.component';
import { FilterFieldComponent } from './components/filter-field/filter-field.component';
import { NotFoundArtistComponent } from './components/not-found-artist/not-found-artist.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ItunesService } from './services/itunes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxPaginationModule,
        FormsModule,
      ],
      providers: [
        ItunesService
      ],
      declarations: [
        AppComponent,    
        IndexPageComponent,
        AlbumCollectionItemComponent,
        AlbumCollectionComponent,
        FilterFieldComponent,
        NotFoundArtistComponent,
        WelcomeMessageComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TruextentExercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TruextentExercise');
  });
});
