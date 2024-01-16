import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name : string;
  constructor(){
    console.log('CONST.')
    this.name = "Martina"
  }

  ngOnInit(){
    console.log("ON init")
  }

  ngDoCheck(){}

  ngOnDestroy(){}
}
