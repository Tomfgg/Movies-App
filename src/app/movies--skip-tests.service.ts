import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesSkipTestsService {

  constructor(private HttpClient: HttpClient) { }

  getTrending(): Observable<any> {
    
  return this.HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=21d9026e2261f8044a3c97114db3d18b`);
  
  
  
    }
}
