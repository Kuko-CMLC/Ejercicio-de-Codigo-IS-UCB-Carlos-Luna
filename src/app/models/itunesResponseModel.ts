import { albumCollectionModel } from "./albumCollectionModel";
import { itunesModel } from "./itunesModel";

export class itunesResponseModel {
  resultCount:string;
  results:itunesModel[];
}

export class collectionResponseModel {
  resultCount:string;
  results:albumCollectionModel[];
}