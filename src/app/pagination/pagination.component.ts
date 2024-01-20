import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
toparent(i:number){
this.clickk.emit(i) 
}
@Output() clickk = new EventEmitter()

}
