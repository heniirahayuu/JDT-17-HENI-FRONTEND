export interface ResponseData {
  total_results: number;
  total_pages: number;
  page: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  overview: string;
  original_title: string;
  poster_path: string;
  backdrop_path?: string;
  release_date?: string;
  vote_average?: number;
}

export interface VideoResult {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface VideosData {
  id: number;
  results: VideoResult[];
}
