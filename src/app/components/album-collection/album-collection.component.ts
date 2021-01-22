import { Component, OnInit } from "@angular/core";
import { albumCollectionModel } from "src/app/models/albumCollectionModel";
import { itunesModel } from "src/app/models/itunesModel";
import { collectionResponseModel } from "src/app/models/itunesResponseModel";
import { CollectionService } from "src/app/services/collection.service";
import { ItunesService } from "src/app/services/itunes.service";

@Component({
  selector: "app-album-collection",
  templateUrl: "./album-collection.component.html",
  styleUrls: ["./album-collection.component.css"],
})
export class AlbumCollectionComponent implements OnInit {
  itunesResponse: collectionResponseModel;
  albumCollection: itunesModel[];
  constructor(
    private collectionService: CollectionService,
    private itunesService: ItunesService
  ) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.itunesService.getAllContentForArtist().subscribe((itunesResponse) => {
      this.albumCollection = itunesResponse.results;
    });
  }
}
