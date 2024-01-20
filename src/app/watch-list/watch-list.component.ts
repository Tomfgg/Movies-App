import { Component, OnInit } from '@angular/core';
import { AccessWatchListService } from '../access-watch-list.service';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {
  favs!:any[]
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/'

  constructor(private obj_watch_list: AccessWatchListService){}
  ngOnInit(){
    this.favs=this.obj_watch_list.watch_list
  }
  switch(id: number) {
    console.log(id);
    // console.log(this.trendingMovies);
    console.log(this.favs.find((obj) => obj.id == id));

    if (this.favs.find(obj => obj.id == id).fav) {
      // this.favs.find(obj => obj.id == id).fav = false
      this.favs=this.favs.filter(obj=>obj.id!=id)
    }
    else this.favs.find(obj => obj.id == id).fav = true
  }

  send_to_access(obj: any) {
    this.obj_watch_list.push_or_remove(obj)
  }
  clear(){
    this.obj_watch_list.clearWishList()
  }

}
