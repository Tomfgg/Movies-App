import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieIdService } from '../movie-id.service';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private http: HttpClient, private movie_id: MovieIdService,private router:Router,private wl:AccessWatchListService){}

  ngOnInit(): void {
    const storedNum=localStorage.getItem('key')
  this.id = storedNum ?  parseInt(storedNum) :  this.movie_id.id
    if (this.movie_id.id!=undefined) this.id = this.movie_id.id
    // else ;
    console.log(this.id);
    this.http.get(`https://api.themoviedb.org/3/movie/${this.id}/recommendations?api_key=00e3d9fcbfc3ef2989c1d5d22f5de19f`)
    .subscribe(val => {
      
      this.return=val
      this.movies=this.return.results
      for (let i = 0; i < this.movies.length; i++) {
        if (this.wl.watch_list.some(obj => obj.id == this.movies[i].id)) this.movies[i].fav = true
        else this.movies[i].fav = false
      }
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

  reload_page(id:number){
    // this.router.navigate(['info']).then(()=>window.location.reload())
    // window.location.href = window.location.href
    localStorage.setItem('key', id.toString())
    localStorage.setItem('data2',JSON.stringify(this.wl.watch_list))
    window.location.reload()
  }
  send_to_access(obj: any) {
    this.wl.push_or_remove(obj)
  }

  switch(id: number) {
    console.log(id);
    // console.log(this.trendingMovies);
    console.log(this.movies.find((obj) => obj.id == id));

    if (this.movies.find(obj => obj.id == id).fav) this.movies.find(obj => obj.id == id).fav = false
    else this.movies.find(obj => obj.id == id).fav = true
  }
  
}
