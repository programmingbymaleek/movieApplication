import { useEffect } from "react";
import SingleTrill from "./SingleTrill";
function Triller(movie_id) {
  const findTriller = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=bf88e5683ea7d645eba02281391d953c&append_to_response=videos`);
    const movieTriller = await data.json();
    console.log(movieTriller)
    return (<SingleTrill data={movieTriller} />)
  }

  useEffect(() => {
    findTriller();
  }, [movie_id])

  return (
    <></>
  )
}

export default Triller
