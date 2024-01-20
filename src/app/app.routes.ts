import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { WatchListComponent } from './watch-list/watch-list.component';
import { RecommendedComponent } from './recommended/recommended.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'info',
    component: MovieInfoComponent,
    children:[
      { path: 'reco', component: RecommendedComponent }
    ]
  },
  {
    path: 'watch-list',
    component: WatchListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
