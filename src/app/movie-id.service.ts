import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieIdService {

  constructor() { }
  id!:number;
  fav!:boolean
  get_id(id:number){
    this.id=id
  }
}
