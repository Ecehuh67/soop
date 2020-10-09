import { API_KEY, ADDRESS } from './utils/consts';

export default class Api {
  constructor() {
    this._apiKey = API_KEY;
    this._address = ADDRESS;
    this._films = null;
  }

  getGenres() {
    return fetch(`${this._address}/genre/movie/list${this._apiKey}`)
      .then((res) => res.json())
      .then((data) => data.genres);
  }

  getFilms() {
    return fetch(`${this._address}/discover/movie${this._apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        this._movies = data.results;

        return this.getGenres().then((genres) => {
          this._movies.forEach((el) => {
            const genreList = [];
            el.genre_ids.forEach((id) => {
              genres.forEach((gen) => {
                if (gen.id === id) {
                  genreList.push(gen.name);
                }
              });
            });

            el.genre_ids = genreList;
          });
          return this._movies;
        });
      });
  }
}
