import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WelcomeMessageComponent } from "./welcome-message.component";

describe("WelcomeMessageComponent", () => {
  let component: WelcomeMessageComponent;
  let fixture: ComponentFixture<WelcomeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeMessageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h2 tag", () => {
    const fixture = TestBed.createComponent(WelcomeMessageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain("Welcome.");
  });

  it("should render content a in h6 tag ", () => {
    const fixture = TestBed.createComponent(WelcomeMessageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h6").textContent).toContain(
      "This page will help you to find Albums of your favorite artist."
    );
  });
});
