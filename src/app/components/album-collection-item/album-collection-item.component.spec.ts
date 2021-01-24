import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AlbumCollectionItemComponent } from "./album-collection-item.component";
import { albumCollectionModel } from "src/app/models/albumCollectionModel";

describe("AlbumCollectionItemComponent", () => {
  let component: AlbumCollectionItemComponent;
  let fixture: ComponentFixture<AlbumCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AlbumCollectionItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return default image when input is undefined", () => {
    const resultImage = component.validateHasAlbumImage(undefined);
    expect(resultImage).toEqual(component.defaultImage);
  });

  it("should return default image when input is null", () => {
    const resultImage = component.validateHasAlbumImage(null);
    expect(resultImage).toEqual(component.defaultImage);
  });

  it("should return default image when input is empty", () => {
    const resultImage = component.validateHasAlbumImage("");
    expect(resultImage).toEqual(component.defaultImage);
  });

  it("should return the image when input is not null,undefined or null", () => {
    const mockAlbumCollectionItem: albumCollectionModel = {
      artistName: "Ricardo Arjona",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/4b/ab/c6/4babc680-e3a2-cb42-f2c1-80af61305bb6/source/100x100bb.jpg",
      collectionName: "Independiente",
      collectionPrice: "9.99",
      artworkUrl60: "https://someImage.png",
    };
    const resultImage = component.validateHasAlbumImage(
      mockAlbumCollectionItem.artworkUrl100
    );
    expect(resultImage).toEqual(mockAlbumCollectionItem.artworkUrl100);
  });
});
