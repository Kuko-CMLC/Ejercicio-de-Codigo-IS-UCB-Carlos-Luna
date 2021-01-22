import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCollectionItemComponent } from './album-collection-item.component';

describe('AlbumCollectionItemComponent', () => {
  let component: AlbumCollectionItemComponent;
  let fixture: ComponentFixture<AlbumCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
