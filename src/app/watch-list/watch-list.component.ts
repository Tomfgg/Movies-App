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

}
