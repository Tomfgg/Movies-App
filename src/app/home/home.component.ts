import { Component, OnInit } from '@angular/core';
import { MoviesSkipTestsService } from '../movies--skip-tests.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];

  constructor(private _MoviesSkipTestsService: MoviesSkipTestsService) { }

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
}

