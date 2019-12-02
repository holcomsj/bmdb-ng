import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent extends BaseComponent implements OnInit {
  title: string = "Movie-List";
  movies: Movie[] = [];
  jr: JsonResponse;

  constructor(private movieSvc: MovieService) { 
    super();
  }

  ngOnInit() {
    this.movieSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.movies = this.jr.data as Movie[];
    });
  }

}
