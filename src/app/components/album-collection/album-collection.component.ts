import { Component, OnInit } from "@angular/core";
import { itunesModel } from "src/app/models/itunesModel";
import { collectionResponseModel } from "src/app/models/itunesResponseModel";
import { ItunesService } from "src/app/services/itunes.service";

@Component({
  selector: "app-album-collection",
  templateUrl: "./album-collection.component.html",
  styleUrls: ["./album-collection.component.css"],
})
export class AlbumCollectionComponent implements OnInit {
  itunesResponse: collectionResponseModel;
  albumCollection: itunesModel[];
  notFound: boolean = false;
  constructor(private itunesService: ItunesService) {}

  ngOnInit() {
    this.getAllAlbumsCollection("Lauv");
  }

  getAllAlbumsCollection(artistName: string) {
    this.itunesService.getAllContentForArtist(artistName)
      .subscribe((itunesResponse) => {
        this.validateEmptyNotEmptyAlbum(itunesResponse.resultCount)
        this.albumCollection = itunesResponse.results;
      });
  }

  validateEmptyNotEmptyAlbum(resultCount: number) {
    if (resultCount == 0) 
      this.notFound = true;
    else 
      this.notFound = false;
  }

  searchArtistAlbum(word: string) {
    this.getAllAlbumsCollection(word);
  }
}
