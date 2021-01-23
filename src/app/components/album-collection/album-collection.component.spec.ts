import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxPaginationModule } from "ngx-pagination";
import { AlbumCollectionComponent } from "./album-collection.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { albumCollectionModel } from "src/app/models/albumCollectionModel";

describe("AlbumCollectionComponent", () => {
  let component: AlbumCollectionComponent;
  let fixture: ComponentFixture<AlbumCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule, FormsModule, HttpClientTestingModule],
      declarations: [AlbumCollectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return true when album artist name is Lauv and artist searched is Lauv too", () => {
    const albumArtist = "Lauv";
    const artistSearched = "Lauv";
    const result = component.validateSameArtist(albumArtist, artistSearched);
    expect(result).toEqual(true);
  });

  it("should return false when album artist name is Ricardo Arjona and artist searched filter is Lauv", () => {
    const albumArtist = "Ricardo Arjona";
    const artistSearched = "Lauv";
    const result = component.validateSameArtist(albumArtist, artistSearched);
    expect(result).toEqual(false);
  });

  it("should return true if there is enough elements to paginate with input higher than 8", () => {
    const numberOfItems = 10;
    const result = component.validateEnoughElementsToPaginate(numberOfItems);
    expect(result).toEqual(true);
  });

  it("should return false if there is not enough elements to paginate with input lower than 8", () => {
    const numberOfItems = 7;
    const result = component.validateEnoughElementsToPaginate(numberOfItems);
    expect(result).toEqual(false);
  });

  it("should return 3 when input for artist is Lauv and the Album Collection has only 3 items", () => {
    let mockListCollection: albumCollectionModel[] = [];
    const mockAlbum1: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "collectionName",
      collectionPrice: "1.0",
    };
    const mockAlbum2: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "collectionNameAlbum2",
      collectionPrice: "4.0",
    };
    const mockAlbum3: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "collectionNameAlbum3",
      collectionPrice: "12.0",
    };
    mockListCollection.push(mockAlbum1, mockAlbum2, mockAlbum3);
    const artistName = "Lauv";
    const result = component.getOnlyAlbumCollectionOfAnArtist(
      artistName,
      mockListCollection
    );
    expect(result).toEqual(3);
  });

  it("should return 2 when input for artist is Lauv and the Album Collection has only 3 items but one is not Lauv's album", () => {
    let mockListCollection: albumCollectionModel[] = [];
    const mockAlbum1: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "collectionName",
      collectionPrice: "1.0",
    };
    const mockAlbum2: albumCollectionModel = {
      artistName: "Ricardo Arjona",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "collectionNameAlbum2",
      collectionPrice: "4.0",
    };
    const mockAlbum3: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "collectionNameAlbum3",
      collectionPrice: "12.0",
    };
    mockListCollection.push(mockAlbum1, mockAlbum2, mockAlbum3);
    const artistName = "Lauv";
    const result = component.getOnlyAlbumCollectionOfAnArtist(
      artistName,
      mockListCollection
    );
    expect(result).toEqual(2);
  });

  it("should sort from Lower to Higher (Z-A)", () => {
    let mockListCollection: albumCollectionModel[] = [];
    const mockAlbum1: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "AlbumCollection",
      collectionPrice: "1.0",
    };
    const mockAlbum2: albumCollectionModel = {
      artistName: "Ricardo Arjona",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "CollectionNameAlbum2",
      collectionPrice: "4.0",
    };
    const mockAlbum3: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "Z-Name",
      collectionPrice: "12.0",
    };
    mockListCollection.push(mockAlbum1,mockAlbum2,mockAlbum3);
    component.albumCollection = mockListCollection;
    component.onSortList('Z-A');
    const result = component.albumCollection[0];
    expect(result).toEqual(mockAlbum3)
  });
  
  it("should sort from Higher to Lower (A-Z)", () => {
    let mockListCollection: albumCollectionModel[] = [];
    const mockAlbum1: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "MisucNameCollection",
      collectionPrice: "1.0",
    };
    const mockAlbum2: albumCollectionModel = {
      artistName: "Ricardo Arjona",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "~DRIVING VIBES~ - EP",
      collectionPrice: "4.0",
    };
    const mockAlbum3: albumCollectionModel = {
      artistName: "Lauv",
      artworkUrl100: "anyImage",
      artworkUrl60: "anyImage",
      collectionName: "~how i'm feeling~",
      collectionPrice: "12.0",
    };
    mockListCollection.push(mockAlbum1,mockAlbum2,mockAlbum3);
    component.albumCollection = mockListCollection;
    component.onSortList('A-Z');
    const result = component.albumCollection[0];
    expect(result).toEqual(mockAlbum2)
  });
});
