import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  listMovies : Movie[];
  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
     this.movieService.getMovies()
      .subscribe(movies => this.listMovies=movies);
  }

}
