import { HttpClient, HttpClientModule } from "@angular/common/http";
import { async, inject, TestBed } from "@angular/core/testing";
import { ItunesService } from "./itunes.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("ItunesService", () => {
  let itunesService: ItunesService;
  let http: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    itunesService = new ItunesService(http);
    TestBed.configureTestingModule({
      providers: [ItunesService],
      imports: [HttpClientModule, HttpClientTestingModule],
    }).compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    itunesService = TestBed.get(ItunesService);
  });

  it("should get users", inject(
    [HttpClientTestingModule, ItunesService],
    (httpMock: HttpClientTestingModule, apiService: ItunesService) => {
      expect(apiService).toBeTruthy();
    }
  ));

  it("should return 50 when artist search is Maroon 5", async((done) => {
    const artistName = "Maroon 5";
    itunesService.getAllContentForArtist(artistName).subscribe((response) => {
      expect(response.resultCount).toBe(50);
      done();
    });
  }));

  it("should return 50 when artist search is Ffo cqc1", async((done) => {
    const artistName = "Ffo cqc1";
    itunesService.getAllContentForArtist(artistName).subscribe((response) => {
      expect(response.resultCount).toBe(0);
      done();
    });
  }));

  it("should return 0 when input search is empty", async((done) => {
    const artistName = "";
    itunesService.getAllContentForArtist(artistName).subscribe((response) => {
      expect(response.resultCount).toBe(0);
      done();
    });
  }));

  it("should return 7 when input search is Rob de Boer", async((done) => {
    const artistName = "Rob de Boer";
    itunesService.getAllContentForArtist(artistName).subscribe((response) => {
      expect(response.resultCount).toBe(7);
      done();
    });
  }));
});
