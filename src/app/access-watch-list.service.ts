import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessWatchListService {
current:any
watch_list:any[]=[]
count!:number
  constructor() { }
push_or_remove(obj:any){
  this.current=obj
 if (this.watch_list.some(obj=>obj.id==this.current.id)){
    this.watch_list=this.watch_list.filter(obj=>obj.id!=this.current.id)
  }
 else this.watch_list.push(this.current)
 this.count=this.watch_list.length
 console.log(this.count);
 
}
}
