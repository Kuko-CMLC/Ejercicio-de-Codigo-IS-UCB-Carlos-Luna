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
  DEFAULT_ITEMS_PER_PAGE: number = 8;

  itunesResponse: itunesResponseModel;
  albumCollection: albumCollectionModel[];
  displayMessageNotFound: boolean = false;
  displaySortButtons: boolean = false;
  displayWelcomeMessage: boolean = true;

  totalItems: number;
  totalItemsPerPage: number = 8;
  displayButtonShowAll: boolean = true;
  enoughElementsToPaginate: boolean;
  actualPage: number = 1;
  displayLoadingIcon: boolean = false;
  constructor(private itunesService: ItunesService) {}

  ngOnInit() {}

  getAllMediaFromArtist(artistName: string) {
    this.displayLoadingIcon = true;
    this.itunesService.getAllContentForArtist(artistName).subscribe(
      (itunesResponse) => {
        this.displayLoadingIcon = false;
        this.totalItems = this.getOnlyAlbumCollectionOfAnArtist(artistName, itunesResponse.results);
        this.enoughElementsToPaginate = this.validateEnoughElementsToPaginate(this.totalItems);
        this.validateNotEmptyAlbum();
    },error => {
      this.exeptionOption(error,artistName);
    });
  }

  getOnlyAlbumCollectionOfAnArtist(
    artistName: string,
    albumCollection: albumCollectionModel[]
  ) {
    this.albumCollection = albumCollection.filter((album) =>
      this.validateSameArtist(album.artistName, artistName)
    );
    return this.albumCollection.length;
  }

  searchArtistAlbum(artistName: string) {
    if (artistName === "" || artistName === " ") {
      this.setStatesForWelcomePage();
    } else {
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
      this.albumCollection = this.albumCollection.sort((albumA, albumB) =>
        albumA.collectionName.localeCompare(albumB.collectionName)
      );
    else
      this.albumCollection = this.albumCollection.sort((albumB, albumA) =>
        albumA.collectionName.localeCompare(albumB.collectionName)
      );
  }

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
      this.displaySortButtons = true;
      this.actualPage = 1;
      return true;
    }
  }

  validateEnoughElementsToPaginate(totalItems: number) {
    if (totalItems > this.DEFAULT_ITEMS_PER_PAGE) {
      return true;
    } else {
      return false;
    }
  }

  setStatesForWelcomePage() {
    this.displayWelcomeMessage = true;
    this.displayMessageNotFound = false;
    this.albumCollection = [];
    this.displaySortButtons = false;
    this.enoughElementsToPaginate = false;
    this.resetPagination();
  }

  resetPagination() {
    this.displayButtonShowAll = true;
    this.totalItemsPerPage = this.DEFAULT_ITEMS_PER_PAGE;
  }

  exeptionOption(error:any,artistName:string){
    if (error.status === 403) {
      this.getAllMediaFromArtist(artistName)
    }
    if (error.status === 0){
      this.displayLoadingIcon = false;
      this.displayMessageNotFound = true;
      this.resetPagination();
    }
  }
}
