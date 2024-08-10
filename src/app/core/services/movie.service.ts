import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API = environment.apiUrl;
  service = inject(HttpClient);

  getMovies() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.tokenTMDB}`,
    };

    const params = new HttpParams()
      .set('page', 1)
      .set('language', 'pt-BR')
      .set('include_adult', 'true')
      .set('include_video', 'true')
      .set('sort_by', 'popularity.desc');
    return this.service.get<Movie>(`${this.API}/discover/movie`, {
      headers,
      params,
    });
  }
}
