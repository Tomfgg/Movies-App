import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

//   transform(movies:any[] , term:string):any[] {
//     return movies.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
//   }

// }
transform(movies: any[], searchTerm: string): any[] {
  if (!movies || !searchTerm) {
    return movies;
  }

  searchTerm = searchTerm.toLowerCase();

  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.release_date.toLowerCase().includes(searchTerm)
      // Add more fields as needed for your search
    );
  });
}
}
