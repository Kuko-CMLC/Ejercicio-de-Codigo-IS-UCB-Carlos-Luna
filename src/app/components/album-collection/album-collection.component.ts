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
  albumCollectionNotFound: boolean = false;
  showSortButtons:boolean = false;

  //Pagination Variables
  DEFAULT_ITEMS_PER_PAGE: number = 8;
  totalItems: number;
  totalItemsPerPage: number = 8;
  displayButtonShowAll: boolean = true;
  enoughElementsToPaginate: boolean;
  acutalPage: number = 1;
  constructor(private itunesService: ItunesService) {}

  ngOnInit() {
    this.getAllAlbumsCollection("Lauv");
  }

  getAllAlbumsCollection(artistName: string) {
    this.itunesService
      .getAllContentForArtist(artistName)
      .subscribe((itunesResponse) => {
        this.showSortButtons=true;
        this.getOnlyAlbumCollectionOfAnArtist(artistName,itunesResponse.results);
        this.validateEmptyNotEmptyAlbum();
        this.validateEnoughElementsToPaginate();
      });
  }

  getOnlyAlbumCollectionOfAnArtist(artistName: string, albumCollection: itunesModel[]) {
    this.albumCollection = albumCollection.filter((album) => this.validateSameArtist(album.artistName, artistName));
    this.totalItems = this.albumCollection.length;
  }

  searchArtistAlbum(artistName: string) {
    if (artistName === "" || artistName === ' '){

    }
    else{
      this.getAllAlbumsCollection(artistName);
    }
  }

  ShowAllItems(AllItems: boolean) {
    if (AllItems == true) {
      this.totalItemsPerPage = this.totalItems;
      this.displayButtonShowAll = false;
      this.acutalPage = 1;
    } else {
      this.totalItemsPerPage = this.DEFAULT_ITEMS_PER_PAGE;
      this.displayButtonShowAll = true;
    }
  }

  sortList(order: string) {
    if (order == "A-Z")
      this.albumCollection = this.albumCollection.sort((a, b) =>
        a.collectionName.localeCompare(b.collectionName)
      );
    else
      this.albumCollection = this.albumCollection.sort((b, a) =>
        a.collectionName.localeCompare(b.collectionName)
      );
  }

  //Validators
  validateSameArtist(artistAlbumFromCollection: string, artistAlbum: string) {
    if (artistAlbumFromCollection.toLowerCase() === artistAlbum.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  validateEnoughElementsToPaginate() {
    if (this.totalItems > this.DEFAULT_ITEMS_PER_PAGE) {
      this.enoughElementsToPaginate = true;
    } else {
      this.enoughElementsToPaginate = false;
    }
  }

  validateEmptyNotEmptyAlbum() {
    if (this.totalItems == 0) {
      this.albumCollectionNotFound = true;
      this.showSortButtons = false;
    } else {
      this.albumCollectionNotFound = false;
      this.showSortButtons = true
    }
  }
}
