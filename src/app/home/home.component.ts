import { Component, OnInit } from '@angular/core';
import { MoviesSkipTestsService } from '../movies--skip-tests.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MovieIdService } from '../movie-id.service';

import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';

import { AccessWatchListService } from '../access-watch-list.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    FormsModule,
    SearchPipe,
    PaginationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  term: string = '';
  trendingMovies: any[] = [];

  constructor(
    private _MoviesSkipTestsService: MoviesSkipTestsService,
    private movie_id: MovieIdService,
    private access: AccessWatchListService
  ) {}

  ngOnInit(): void {
    // this._MoviesSkipTestsService.getTrending().subscribe({
    //   next: (data) => {
    //     this.trendingMovies = data.results;
    //     for (let i = 0; i < this.trendingMovies.length; i++) {
    //       if (
    //         this.access.watch_list.some(
    //           (obj) => obj.id == this.trendingMovies[i].id
    //         )
    //       )
    //         this.trendingMovies[i].fav = true;
    //       else this.trendingMovies[i].fav = false;
    //     }
    //     console.log(this.trendingMovies);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching trending movies:', error);
    //   },
    // });
    this.parentMethod(this.pageNumber);
  }

  pass_id(id: number) {
    this.movie_id.get_id(id);
  }

  // toggle: boolean = false;
  switch(id: number) {
    console.log(id);
    // console.log(this.trendingMovies);
    console.log(this.trendingMovies.find((obj) => obj.id == id));

    if (this.trendingMovies.find((obj) => obj.id == id).fav)
      this.trendingMovies.find((obj) => obj.id == id).fav = false;
    else this.trendingMovies.find((obj) => obj.id == id).fav = true;
  }

  send_to_access(obj: any) {
    this.access.push_or_remove(obj);
  }
  parentMethod(i: number): void {
    this.pageNumber = i;
    this._MoviesSkipTestsService
      .getPages(`${this.pageNumber}`)
      .subscribe((data) => {
        this.trendingMovies = data.results;
        for (let i = 0; i < this.trendingMovies.length; i++) {
          if (
            this.access.watch_list.some(
              (obj) => obj.id == this.trendingMovies[i].id
            )
          )
            this.trendingMovies[i].fav = true;
          else this.trendingMovies[i].fav = false;
        }
      });
  }
  pageNumber: number = 1;
}
