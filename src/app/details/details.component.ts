import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MovieIdService } from '../movie-id.service';
import { AccessWatchListService } from '../access-watch-list.service';




@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [DatePipe]
})


export class DetailsComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/'

  movie!: any;
  id!:number;
  rate!: number
  star_arr: boolean[] = []
  
  constructor(private http: HttpClient, private movie_id: MovieIdService, private access_watch_list:AccessWatchListService) { }
  ngOnInit() {
    const storedNum = localStorage.getItem('key')
    storedNum ? this.id = parseInt(storedNum) : this.id = this.movie_id.id
    if (this.movie_id.id != undefined) this.id = this.movie_id.id
    this.http.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=00e3d9fcbfc3ef2989c1d5d22f5de19f`).subscribe(val => {this.movie=val
      console.log(this.movie);
      if(this.access_watch_list.watch_list.some(obj=>obj.id==this.movie.id)) this.movie.fav=true
      else this.movie.fav=false
      this.rate = this.movie.vote_average / 2
      this.star();
    })
  }
  switch() {
    this.movie.fav = !this.movie.fav
  }


  star() {
  for(let i = 0; i<5; i++) {
  if (this.rate>=i+0.5){
    this.star_arr.push(true)
  }
  else this.star_arr.push(false)
  console.log(this.star_arr);
  
}
}


send_to_access(obj:any){
  this.access_watch_list.push_or_remove(obj)
}


}


