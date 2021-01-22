import { Component, OnInit } from '@angular/core';
import { itunesModel } from 'src/app/models/itunesModel';
import { itunesResponseModel } from 'src/app/models/itunesResponseModel';
import { ItunesService } from 'src/app/services/itunes.service';

@Component({
  selector: 'app-itunes-item',
  templateUrl: './itunes-item.component.html',
  styleUrls: ['./itunes-item.component.css']
})
export class ItunesItemComponent implements OnInit {
  itunesResponse:itunesResponseModel
  itunesList:itunesModel[]
  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.itunesService.getContentForOneArtist().subscribe(
      itunesResponse => { 
        this.itunesList = itunesResponse.results;
      }
    )
  }

}
