import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MovieIdService } from '../movie-id.service';

// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// interface item {
//   brand : string;
//   category:string;
//   description:string;
//   discountPercentage:number;
//   id:number;
//   images:string[];
//   price:number;
//   rating:number;
//   stock:number;
//   thumbnail:string;
//   title:string

// }

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [DatePipe]
})

// @Injectable({
//     providedIn: 'root'
//   })
export class DetailsComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/'

  movie!: any;
  id!:number;
  rate!: number
  star_arr: boolean[] = []

  // hh!: any[];
  constructor(private http: HttpClient, private movie_id: MovieIdService) { }
  ngOnInit() {
    this.id=this.movie_id.id;
    this.http.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=00e3d9fcbfc3ef2989c1d5d22f5de19f`).subscribe(val => {this.movie=val
      console.log(this.movie);
      this.rate = this.movie.vote_average / 2
      this.star();

      // console.log(7);


      // console.log(this.item);
      // this.hh=this.item.results
      // console.log(this.hh);


    })
    // this.http.get("https://dummyjson.com/products/10").subscribe(val => {this.item=val
    // console.log(this.item);

    // })
    // console.log(this.item);

  }
  toggle: boolean = false;
  switch() {
    this.toggle = !this.toggle
  }

  // rate: number =  this.movie.vote_average/2

  star() {
  for(let i = 0; i<5; i++) {
  if (this.rate>=i+0.5){
    this.star_arr.push(true)
  }
  else this.star_arr.push(false)
  console.log(this.star_arr);
  
}
}





}


