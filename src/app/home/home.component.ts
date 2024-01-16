import { Component, OnInit } from '@angular/core';
import { MoviesSkipTestsService } from '../movies--skip-tests.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  trendingMovies:any[]=[];
  constructor(private _MoviesSkipTestsService:MoviesSkipTestsService){
    _MoviesSkipTestsService.getTrending('movie').subscribe((data)=>{
 this.trendingMovies=data.results;
    })
  }

}
