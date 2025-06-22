import { Component, OnInit } from '@angular/core';
import { Imovie } from '../models/movie.interface';
import { movieArray } from '../consts/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
moviesArr : Imovie[]= movieArray
  constructor() { }

  ngOnInit(): void {
  }

}
