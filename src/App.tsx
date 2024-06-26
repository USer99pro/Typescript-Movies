import axios from 'axios';
import React, { useEffect, useState } from 'react'

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

  const [year,setyear] = useState('2024');
  const [movies,setMovies] = useState<Movie[]>([]);
  const [allMovies,setallMovies] = useState<MoviesApiResponse[]>([]);
  const [page,setPage] = useState<number>(1)
  

  const facthMovies = async (selectedYear:string, selectPage:number) => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${selectedYear}&with_watch_monetization_types=flatrate&page=${selectPage}`;
      
      try{
        const res = await axios.get(url);
        console.log(res.data)
        setMovies(res.data.results);
        // setallMovies(res.data);

      } catch (error){
        console.log("Error fetching movies: ",error)
      }

  }

  const hendleYearChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectYear = event.target.value;
     setyear(selectYear);
  }

  const hendlePageChange = (p:number) => {
   const selectpage = p;
   setPage(selectpage);
  }

  const urlPoster ="https://image.tmdb.org/t/p/w500/";
  const youtubeUrl = "https://www.youtube.com/results?search_query=";

  useEffect(()=>{
    facthMovies(year,page);
  } ,[year]);


  return (
    <div>
      <nav>
        <h2>Movies App</h2>

        <select name="" id="year" onChange={hendleYearChange} value={year}>
          {[...Array(200).keys()].map((index)=>{
            const yearValue = 2024 - index;
            return(
              <option key={yearValue} value={yearValue.toString()}>
                {yearValue}
              </option>
           
          );
        })}
      </select>
    </nav>
    

    <div className="content" id="content">
        {movies && movies.map((data)=>(
          <a href={`${youtubeUrl}${data.title} full movies พากย์ไทย `}>
            <div className="superContainer" key={data.title} >

              <div className='rate_container'>
                <h2 className='rate_text' >{data.vote_average}</h2>
              </div>
              <h2 className='title'>{data.title.substring(0,25)}</h2>
              <img src={`${urlPoster}${data.poster_path}`} alt={data.title} />

            </div>
            
          </a>
        ))}

    </div>



    </div>
  )
}

export default App