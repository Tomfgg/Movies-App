import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"info",
        component: MovieInfoComponent
    },
    {
        path:"**",
        component: NotFoundComponent
  }
];
