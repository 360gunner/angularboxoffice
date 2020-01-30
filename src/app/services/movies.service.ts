import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl1: string = 'https://api.themoviedb.org/3/search/movie?api_key=d5b9e0a9a61a4349b2d499ae5683a051&language=en-US&query=';
//const baseUrl: string ='https://api.themoviedb.org/3/trending/movie/week?api_key=d5b9e0a9a61a4349b2d499ae5683a051';
const baseUrl: string ='https://api.themoviedb.org/3/movie/now_playing?api_key=d5b9e0a9a61a4349b2d499ae5683a051&language=en-US&page=1';

const baseUrl2: string ='https://api.themoviedb.org/3/movie/';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(): Observable<any> {
    return this.http.get(baseUrl);
  }

  searchMovies1(searchTerm: string): Observable<any> {
    return this.http.get(baseUrl1+searchTerm);
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(baseUrl2+imdbID, {params: {api_key: 'd5b9e0a9a61a4349b2d499ae5683a051'}})
  }
}
