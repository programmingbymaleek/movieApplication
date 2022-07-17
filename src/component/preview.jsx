import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import { MovieContext } from '../context/context.api';
import RenderTriller from './renderTriller';

function Preview() {
  const { setPlayTrailer, playTrailer, singleTriller } = useContext(MovieContext);
  return (
    <>
      {singleTriller.backdrop_path ? (<MovieContainer>
        {singleTriller.videos.results.length > 0 && playTrailer ? (<RenderTriller singleTriller={singleTriller} />) : (null)}
        <Movieframe>
          <img src={`https://image.tmdb.org/t/p/original${singleTriller.backdrop_path}`} alt=""></img>
        </Movieframe>
        <MoviePredetails>

          <button onClick={() => (setPlayTrailer(true))}>Play Trailer</button>
          {/* append the movie id to a function here... */}
          <h3>{singleTriller.title}</h3>
          <p>{singleTriller.overview}</p>
        </MoviePredetails>
      </MovieContainer>) : null}
    </>
  )
}

export default Preview;


const MovieContainer = styled.div`
max-width:100%; 
position:relative;
`
const Movieframe = styled.div`
max-width:inherit;
margin:0 0 1rem 0;
height:30rem;
img{
  width:100%;
height:100%;
object-fit:cover;
object-position:top center;
z-index:0;
  }

`
const MoviePredetails = styled.div`
position:absolute; 
bottom:0; 
z-index:5; 
color:white;
padding:.5rem;
margin:0 7rem;
button{
  padding:1rem;
  background:transparent; 
  border:1px solid white; 
  color:white;
  font-size:1rem; 

}
button:hover{
  color:black;
  background:white;
  border:1px solid black;
  font-weight:bold; 

}


h3{
  font-size: 2.5rem;
}
p{
 
  font-size:1.3rem;
}
`
