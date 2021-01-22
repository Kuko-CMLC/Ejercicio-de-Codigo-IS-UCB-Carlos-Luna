import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filter-field",
  templateUrl: "./filter-field.component.html",
  styleUrls: ["./filter-field.component.css"],
})
export class FilterFieldComponent implements OnInit {
  @Output() searchArtistAlbum: EventEmitter<string> = new EventEmitter();
  @Output() sortListBy: EventEmitter<string> = new EventEmitter();
  artistNameInput: string;

  constructor() {}

  ngOnInit() {}

  onSearchAlbumArtist() {
    this.searchArtistAlbum.emit(this.artistNameInput);
  }

  sortList(sort: string) {
    this.sortListBy.emit(sort);
  }
}
