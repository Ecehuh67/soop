// example a request https://api.themoviedb.org/3/movie/550?api_key=aaf90be5b4a498eeba973a317099f717

const API_KEY = '?api_key=aaf90be5b4a498eeba973a317099f717';
const ADDRESS = 'https://api.themoviedb.org/3'

export default class Api {
  constructor() {
    this.apiKey = API_KEY;
    this.address = ADDRESS;
    this.genres =[]
    // this.getGenres = this.getGenres.bind(this)
  }

  getGenres() {
    return fetch(`${this.address}/genre/movie/list${API_KEY}`).then((res) => res.json()).then((data) => this.genres = [...data.genres]);
  }
}