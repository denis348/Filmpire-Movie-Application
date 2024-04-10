import React from "react";


const movie1={
    "Title": "Enemies: The President, Justice & The FBI",
    "Year": "2018",
    "imdbID": "tt8888618",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODE2OWU5ODUtNWYwNS00YTliLWIxMzMtZDg1NTljNzEzYTg3XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg"
 }
 

const MovieCard=({movie})=>{
    return(
        <div className='movie'>
        <div>
        <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie1.Poster!=='N/A'? movie.Poster:'https://viaplaceholder.com/400'} alt={movie.Title} />
        </div>
        <div>
           <span>{movie.Type} </span>
           <h3>{movie.Title} </h3>
        </div>
</div>
   
    ); 
   MovieCard();
}

export default MovieCard;