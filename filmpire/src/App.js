import './App.css';
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import React from 'react'
import SearchIcon from './SearchIcon.svg'

//51959518
const API_URL='https://www.omdbapi.com?apikey=51959518';


const App=()=>{
const  [movies,setMovies]=useState([]);
const[searchTerm,setsearchTerm]=useState('');


   const[movie,setMovie]=useState([]);
const searchMovies= async(title)=>{
   const response= await fetch(`${API_URL}&S=${title}`);
   const data=await response.json();
   setMovies(data.Search)
 }

useEffect(()=>{
  searchMovies('FBI')
  },[]);

return( 
   <div className='App'>
   <h1>Movieland</h1>
     <div className="search">
      <input
       placeholder="Search for movies" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}
      />  
      <img
      src={SearchIcon}
      alt='Search' 
      onClick={()=>searchMovies(searchTerm)}
         
           />                                                                      
      </div>
      {
      movies?.length >0  ?(
         <div className ='container'>
         {movies.map((movie)=>(<MovieCard movie={movie}/>))}
  </div>
     ):(
       <div className='empty'>
         <h2>No movies found</h2>
         </div>
     )
    }
    
   
</div> 

)
   }
   export default App 
