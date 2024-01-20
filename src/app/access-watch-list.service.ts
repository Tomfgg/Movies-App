import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessWatchListService {
current:any
watch_list:any[]=[]
count!:number
  constructor() { const getData=localStorage.getItem('data2')
 this.watch_list = getData? JSON.parse(getData):[]
 this.count=this.watch_list.length
}
push_or_remove(obj:any){
  this.current=obj
  this.current.fav=true
 if (this.watch_list.some(obj=>obj.id==this.current.id)){
    this.watch_list=this.watch_list.filter(obj=>obj.id!=this.current.id)
  }
 else this.watch_list.push(this.current)
 localStorage.setItem('data2', JSON.stringify(this.watch_list))
 this.count=this.watch_list.length
 console.log(this.count);
 
}

clearWishList(){
  localStorage.setItem('data2', JSON.stringify([]))
  window.location.reload()
}
}
