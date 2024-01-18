import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"info",
        component: MovieInfoComponent
    }
];
