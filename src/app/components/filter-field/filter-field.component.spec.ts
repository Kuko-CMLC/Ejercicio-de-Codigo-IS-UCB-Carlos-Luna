import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";

import { FilterFieldComponent } from "./filter-field.component";

describe("FilterFieldComponent", () => {
  let component: FilterFieldComponent;
  let fixture: ComponentFixture<FilterFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [FilterFieldComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit the artist name "Maroon 5" on click', () => {
    const fixture = TestBed.createComponent(FilterFieldComponent);
    const component = fixture.componentInstance;
    component.artistNameInput = "Maroon 5";
    spyOn(component.searchArtistAlbum, "emit");
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector("button");
    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    expect(component.searchArtistAlbum.emit).toHaveBeenCalledWith("Maroon 5");
  });
});
