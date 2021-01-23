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
  displayMessageNotFound: boolean = false;
  displaySortButtons:boolean = false;
  displayWelcomeMessage:boolean = true;

  //Pagination Variables
  DEFAULT_ITEMS_PER_PAGE: number = 8;
  totalItems: number;
  totalItemsPerPage: number = 8;
  displayButtonShowAll: boolean = true;
  enoughElementsToPaginate: boolean;
  actualPage: number = 1;
  constructor(private itunesService: ItunesService) {}

  ngOnInit() {
  }

  getAllAlbumsCollection(artistName: string) {
    this.itunesService
      .getAllContentForArtist(artistName)
      .subscribe((itunesResponse) => {
        this.displaySortButtons=true;
        this.getOnlyAlbumCollectionOfAnArtist(artistName,itunesResponse.results);
        this.validateNotEmptyAlbum();
        this.validateEnoughElementsToPaginate();
      });
  }

  getOnlyAlbumCollectionOfAnArtist(artistName: string, albumCollection: itunesModel[]) {
    this.albumCollection = albumCollection.filter((album) => this.validateSameArtist(album.artistName, artistName));
    this.totalItems = this.albumCollection.length;
  }

  searchArtistAlbum(artistName: string) {
    if (artistName === "" || artistName === ' '){
      this.setStatesForWelcomePage();
    }
    else{
      this.displayWelcomeMessage=false;
      this.resetPagination();
      this.getAllAlbumsCollection(artistName);
    }
  }

  onShowAllItems(AllItems: boolean) {
    if (AllItems == true) {
      this.totalItemsPerPage = this.totalItems;
      this.displayButtonShowAll = false;
      this.actualPage = 1;
    } else {
      this.totalItemsPerPage = this.DEFAULT_ITEMS_PER_PAGE;
      this.displayButtonShowAll = true;
    }
  }

  onSortList(order: string) {
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

  validateNotEmptyAlbum() {
    if (this.totalItems == 0) {
      this.displayMessageNotFound = true;
      this.displaySortButtons = false;
    } else {
      this.displayMessageNotFound = false;
      this.displaySortButtons = true
      this.actualPage = 1;
    }
  }

  validateEnoughElementsToPaginate() {
    if (this.totalItems > this.DEFAULT_ITEMS_PER_PAGE) {
      this.enoughElementsToPaginate = true;
    } else {
      this.enoughElementsToPaginate = false;
    }
  }

  //set states
  setStatesForWelcomePage(){
    this.displayWelcomeMessage=true;
    this.displayMessageNotFound=false;
    this.albumCollection = [];
    this.displaySortButtons=false;
    this.enoughElementsToPaginate=false;
    this.resetPagination();
  }

  resetPagination(){
    this.displayButtonShowAll=true;
    this.totalItemsPerPage = this.DEFAULT_ITEMS_PER_PAGE;
  }
}
