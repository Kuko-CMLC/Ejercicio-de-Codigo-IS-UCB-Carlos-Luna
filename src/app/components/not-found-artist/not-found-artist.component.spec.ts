import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundArtistComponent } from './not-found-artist.component';

describe('NotFoundArtistComponent', () => {
  let component: NotFoundArtistComponent;
  let fixture: ComponentFixture<NotFoundArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
