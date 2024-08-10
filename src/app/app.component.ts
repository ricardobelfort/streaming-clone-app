import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './core/services/movie.service';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Prime Video Clone App';
  movies$ = inject(MovieService).getMovies();
  originalImgBaseUrl = 'https://image.tmdb.org/t/p/original';
  movies = this.movies$.pipe(map((movies) => movies.results));
}
