import { Component, OnInit, Input } from "@angular/core";
import { albumCollectionModel } from "src/app/models/albumCollectionModel";

@Component({
  selector: "app-album-collection-item",
  templateUrl: "./album-collection-item.component.html",
  styleUrls: ["./album-collection-item.component.css"],
})
export class AlbumCollectionItemComponent implements OnInit {
  @Input() album: albumCollectionModel;
  defaultImage:string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2462ec6c-8690-4c1d-affb-fb5aca851dba/d8wqjzr-5df9d233-4693-4e1b-ad44-e1c21341f655.png"
  constructor() {}

  ngOnInit() {}

  validateHasAlbumImage(imageUrl: string) {
    if (imageUrl === undefined || imageUrl === "" || imageUrl === " ") {
      return this.defaultImage;
    }
    else {
      return imageUrl;
    }
  }
}
