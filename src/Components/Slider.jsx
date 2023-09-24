import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
const imageBaseUrl = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight} from "react-icons/hi2";

const Slider = () => {

    const [movieList , setMovieList] = useState([]);

    useEffect(() => {
        getTrendingMovielist();
    },[])

    const getTrendingMovielist = () =>{
        GlobalApi.getTrendingMovies.then(resp=>{
           
            setMovieList(resp.data.results);
        })
    }
  return (

    <div>
      
      <HiChevronLeft className='hidden md:block text-white text-[60px] absolute mx-2 mt-[160px] cursor-pointer'/>
      <HiChevronRight  className='hidden md:block text-white text-[60px] absolute mx-2 mt-[160px] cursor-pointer right-0'/>

      <div className='flex overflow-x-auto px-16 py-4 w-full scrollbar-hide'>
         {movieList.map((item)=>(
            <img src={imageBaseUrl+item.backdrop_path} key={item.id} 
            className='min-w-full md:h-[350px] object-cover object-top mr-5 rounded-xl'/>)

       )}
      </div>

    </div>

  )
}

export default Slider