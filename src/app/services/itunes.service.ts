import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { itunesResponseModel } from "../models/itunesResponseModel";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ItunesService {
  ituneContentSearchUrl: string = "https://itunes.apple.com";
  searchParameter: string = "search?term=";
  entity: string = "album";
  constructor(private http: HttpClient) {}

  getAllContentForArtist(artistName: string): Observable<itunesResponseModel> {
    return this.http.post<itunesResponseModel>(
      `${this.ituneContentSearchUrl}/${this.searchParameter}${artistName}&entity=${this.entity}`,
      httpOptions
    );
  }
}
