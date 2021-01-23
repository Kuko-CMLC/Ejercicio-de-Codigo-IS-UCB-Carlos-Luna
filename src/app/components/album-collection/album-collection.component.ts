import { Component, OnInit } from "@angular/core";
import { albumCollectionModel } from "src/app/models/albumCollectionModel";
import { itunesResponseModel } from "src/app/models/itunesResponseModel";
import { ItunesService } from "src/app/services/itunes.service";

@Component({
  selector: "app-album-collection",
  templateUrl: "./album-collection.component.html",
  styleUrls: ["./album-collection.component.css"],
})
export class AlbumCollectionComponent implements OnInit {
  itunesResponse: itunesResponseModel;
  albumCollection: albumCollectionModel[];
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

  getAllMediaFromArtist(artistName: string) {
    this.itunesService
      .getAllContentForArtist(artistName)
      .subscribe((itunesResponse) => {
        this.totalItems = this.getOnlyAlbumCollectionOfAnArtist(artistName,itunesResponse.results);
        this.enoughElementsToPaginate = this.validateEnoughElementsToPaginate(this.totalItems);
        this.validateNotEmptyAlbum();
    });
  }

  getOnlyAlbumCollectionOfAnArtist(artistName: string, albumCollection: albumCollectionModel[]) {
    this.albumCollection = albumCollection.filter((album) => this.validateSameArtist(album.artistName, artistName));
    return this.albumCollection.length;
  }

  searchArtistAlbum(artistName: string) {
    if (artistName === "" || artistName === ' '){
      this.setStatesForWelcomePage();
    }
    else{
      this.displaySortButtons = true;
      this.displayWelcomeMessage = false;
      this.resetPagination();
      this.getAllMediaFromArtist(artistName);
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
      return false;
    } else {
      this.displayMessageNotFound = false;
      this.displaySortButtons = true
      this.actualPage = 1;
      return true;
    }
  }

  validateEnoughElementsToPaginate(totalItems:number) {
    if (totalItems > this.DEFAULT_ITEMS_PER_PAGE) {
      return true;
    } else {
      return false;
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
