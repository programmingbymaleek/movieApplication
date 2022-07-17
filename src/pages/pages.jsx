import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Searched from "../component/Searched";
import Movie_info from "../component/movie_info";

function Pages() {
  return (
    <Routes>
      <Route path="/movieApplication" element={<Home />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/movie/:id' element={<Movie_info />} />
    </Routes>

  )
}

export default Pages
