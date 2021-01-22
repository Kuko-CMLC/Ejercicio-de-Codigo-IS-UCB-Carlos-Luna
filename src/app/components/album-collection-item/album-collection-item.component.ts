import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { albumCollectionModel } from 'src/app/models/albumCollectionModel';

@Component({
  selector: 'app-album-collection-item',
  templateUrl: './album-collection-item.component.html',
  styleUrls: ['./album-collection-item.component.css']
})
export class AlbumCollectionItemComponent implements OnInit {
  @Input() album: albumCollectionModel;
  
  constructor() { }

  ngOnInit() {
  }

}
