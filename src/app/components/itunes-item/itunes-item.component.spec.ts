import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesItemComponent } from './itunes-item.component';

describe('ItunesItemComponent', () => {
  let component: ItunesItemComponent;
  let fixture: ComponentFixture<ItunesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItunesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
