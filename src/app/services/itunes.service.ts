import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itunesResponseModel } from '../models/itunesResponseModel';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  ituneContentSearchUrl: string = "https://itunes.apple.com/search?term=lauv";
  constructor(private http:HttpClient) { }

  getContentForOneArtist(): Observable<itunesResponseModel> {
    return this.http.get<itunesResponseModel>(`${this.ituneContentSearchUrl}`);
  }
}
