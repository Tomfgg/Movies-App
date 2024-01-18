import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { AccessWatchListService } from '../access-watch-list.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbAlertModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public wl: AccessWatchListService){}

}
