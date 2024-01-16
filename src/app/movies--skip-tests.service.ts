import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesSkipTestsService {

  constructor(private _HttpClient: HttpClient) { }

  getTrending(): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
  }
}
