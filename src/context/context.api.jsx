import { createContext, useState, useEffect } from "react";

// const findTriller = async (id) => {
//   const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf88e5683ea7d645eba02281391d953c&append_to_response=videos`);
//   const movieTriller = await data.json();
//   console.log(movieTriller)
//   return setSingleTriller(movieTriller)
// }


// creating a context to store movie_id 
export const MovieContext = createContext({
  movie_id: null,
  setMovie_id: function () {
    return null
  },
  singleTriller: null,
  setSingleTriller: function () {
    return null
  },
  playTrailer: null,
  setPlayTrailer: function () {
    return null
  },
})



//creating a movie provider  for this app. 
export const MovieProvider = ({ children }) => {
  const [movie_id, setMovie_id] = useState(null);
  const [singleTriller, setSingleTriller] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);
  const movieValues = { movie_id, setMovie_id, singleTriller, setSingleTriller, playTrailer, setPlayTrailer };

  const findTriller = async (movie_id) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=bf88e5683ea7d645eba02281391d953c&append_to_response=videos`);
    const movieTriller = await data.json();

    return setSingleTriller(movieTriller)
  }

  useEffect(() => {
    findTriller(movie_id);
  }, [movie_id])





  return <MovieContext.Provider value={movieValues}>
    {children}
  </MovieContext.Provider>
}



