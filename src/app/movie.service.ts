import { Injectable } from '@angular/core';
import { MockMovies } from './mock-movies';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() : Observable<Movie[]>{
    return of(MockMovies);
  }
  
  getDetailMovie(id: number): Observable<Movie> {
    return of(MockMovies.find(movie => movie.id === id));
  }
}
