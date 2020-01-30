import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];
  im = 'https://image.tmdb.org/t/p/w500';

  constructor(private service: MoviesService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {

    this.service.searchMovies()
          .subscribe(resp=>this.movies=resp.results);
  }




}
