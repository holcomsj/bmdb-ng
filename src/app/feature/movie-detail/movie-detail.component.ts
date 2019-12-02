import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = "Movie Detail";
  movie: Movie = new Movie;
  id: number = 0;


  constructor(
    private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    //get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    //get a movie from the movie services
    this.movieSvc.get(this.id).subscribe(jr => {
      this.movie = jr.data as Movie;
    });
  }

  delete() {
    this.movieSvc.delete(this.id).subscribe(jr => {
      //A fix goes here
      if (jr.errors != null){
        console.log("Error deleting movie: "+jr.errors);
      }
      this.router.navigateByUrl('movies/list');
    });
  }

}
