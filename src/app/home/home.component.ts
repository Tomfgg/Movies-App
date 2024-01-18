import { Component, OnInit } from '@angular/core';
import { MoviesSkipTestsService } from '../movies--skip-tests.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MovieIdService } from '../movie-id.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';
  
  trendingMovies: any[] = [];

  constructor(private _MoviesSkipTestsService: MoviesSkipTestsService , private movie_id:MovieIdService) { }

  ngOnInit(): void {
    this._MoviesSkipTestsService.getTrending().subscribe({
      next: (data) => {
        this.trendingMovies = data.results;
      },
      error: (error) => {
        console.error('Error fetching trending movies:', error);
      }
    });
  }

  pass_id(id:number){
    this.movie_id.get_id(id);
  }
}

