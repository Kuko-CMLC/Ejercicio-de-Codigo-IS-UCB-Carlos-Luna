import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { ItunesService } from './itunes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesService],
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  it('should get users', inject([HttpClientTestingModule, ItunesService],
    (httpMock: HttpClientTestingModule, apiService: ItunesService) => {
      expect(apiService).toBeTruthy();
    }
  )
);
});
