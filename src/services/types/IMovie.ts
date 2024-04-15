export interface IMovie {
  name: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  runtime: string;
  episode_run_time?: string[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
