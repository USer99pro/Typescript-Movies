import axios from 'axios';
import React, { useState } from 'react'

interface MoviesApiResponse {

  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;

}

interface Movie{
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;


}
const apikey = "512603a956b2aba0a6a52f5718934251";
const App = () => {

  const [year,setyeaer] = useState('2022');
  const [movies,setMovies] = useState<Movie[]>([]);
  const [allMovies,setallMovies] = useState<MoviesApiResponse[]>([]);


  const facthMovies = async (selectedYear:string, selectPage:number) => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${selectedYear}&with_watch_monetization_types=flatrate&page=${selectPage}`;
      
      try{
        const res = await axios.get(url);
        console.log(res.data)


      } catch (error){
        console.log("Error fetching movies: ",error)
      }

  }







  return (
    <div>
      <nav>
        <h2>Movies App</h2>

      </nav>
    </div>
  )
}

export default App