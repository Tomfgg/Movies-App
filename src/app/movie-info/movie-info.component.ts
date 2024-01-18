import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [DetailsComponent, RecommendedComponent, RouterLink],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css'
})
export class MovieInfoComponent {

}
