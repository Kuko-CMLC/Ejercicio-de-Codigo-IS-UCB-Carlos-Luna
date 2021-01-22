import { albumCollectionModel } from "./albumCollectionModel";
import { itunesModel } from "./itunesModel";

export class itunesResponseModel {
  resultCount:number;
  results:itunesModel[];
}

export class collectionResponseModel {
  resultCount:number;
  results:albumCollectionModel[];
}