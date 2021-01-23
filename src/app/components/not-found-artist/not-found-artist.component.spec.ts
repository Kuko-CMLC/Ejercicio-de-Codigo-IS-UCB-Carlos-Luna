import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NotFoundArtistComponent } from "./not-found-artist.component";

describe("NotFoundArtistComponent", () => {
  let component: NotFoundArtistComponent;
  let fixture: ComponentFixture<NotFoundArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundArtistComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h2 tag", () => {
    const fixture = TestBed.createComponent(NotFoundArtistComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain(
      "Artist not found, please try another name"
    );
  });

  it("should render content a in h6 tag ", () => {
    const fixture = TestBed.createComponent(NotFoundArtistComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h6").textContent).toContain(
      "Example: Maroon 5, Jack Johnson, Dio, Lauv"
    );
  });

  it("should render content a in p tag ", () => {
    const fixture = TestBed.createComponent(NotFoundArtistComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      "Be careful about spelling and tildes."
    );
  });
});
