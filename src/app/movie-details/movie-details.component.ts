import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private location : Location,
    private movieService : MovieService
  ) { }

  movie : Movie;

  ngOnInit() {
    this.getDetailMovie();
  }

  getDetailMovie(){
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetailMovie(id)
    .subscribe(movie => this.movie=movie);
  }

  goBack(){
    this.location.back();
  }

}
