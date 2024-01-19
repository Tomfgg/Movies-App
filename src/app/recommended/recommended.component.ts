import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieIdService } from '../movie-id.service';
import { RouterLink } from '@angular/router';
import { AccessWatchListService } from '../access-watch-list.service';



@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/' 
  return:any;
  movies!: any[];
  id!: number;

  constructor(private http: HttpClient, private movie_id: MovieIdService){}

  ngOnInit(): void {
    this.id = this.movie_id.id;
    this.http.get(`https://api.themoviedb.org/3/movie/${this.id}/recommendations?api_key=00e3d9fcbfc3ef2989c1d5d22f5de19f`)
    .subscribe(val => {
      
      this.return=val
      this.movies=this.return.results
      console.log(this.movies)
    
    // console.log(this.movies);
    })

  }
  pass_id(id: number) {
    this.movie_id.get_id(id);
  }

  getTimeStamp(): number {
    return new Date().getTime();
  }
  
}
