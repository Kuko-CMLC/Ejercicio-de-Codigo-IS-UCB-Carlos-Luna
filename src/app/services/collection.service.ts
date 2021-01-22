import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { collectionResponseModel } from "../models/itunesResponseModel";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  entity: string = "album";
  onlyCollectionArtist: string = "https://itunes.apple.com";
  constructor(private http: HttpClient) {}

  getCollections(artistId: string): Observable<collectionResponseModel> {
    return this.http.get<collectionResponseModel>(
      `${this.onlyCollectionArtist}/lookup?id=${artistId}&entity=${this.entity}`
    );
  }
}
