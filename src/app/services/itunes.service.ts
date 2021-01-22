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
  ituneContentSearchUrl: string =
    "https://itunes.apple.com/";
  searchParameter: string = 
    "search?term="
  constructor(private http: HttpClient) {}

  getAllContentForArtist(artistName:string): Observable<itunesResponseModel> {
    console.log(`${this.ituneContentSearchUrl}/${this.searchParameter}${artistName}`)
    return this.http.post<itunesResponseModel>(`${this.ituneContentSearchUrl}/${this.searchParameter}${artistName}`,httpOptions);
  }
}
