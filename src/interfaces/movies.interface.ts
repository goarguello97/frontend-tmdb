export interface Movies {
  loadingMovies: boolean;
  loadingSearch: boolean;
  searchOk: boolean;
  error: any;
  movies: Movie;
  tvSeries: TvSeries;
  horror: Horror;
  comedy: Comedy;
  drama: Drama;
  action: Action;
  search: Search;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  name: string;
  first_air_date: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  images: Images;
}

interface TvSeries {}

interface Horror {}

interface Comedy {}

interface Drama {}

interface Action {}

interface Search {}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Videos {
  results: Result[];
}

interface Result {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface Images {
  backdrops: any[];
  logos: any[];
  posters: any[];
}
