import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from "ngx-pagination";
import { AlbumCollectionComponent } from './album-collection.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumCollectionComponent', () => {
  let component: AlbumCollectionComponent;
  let fixture: ComponentFixture<AlbumCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxPaginationModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ AlbumCollectionComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
