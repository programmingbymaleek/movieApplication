import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { MovieContext } from '../context/context.api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Movies from './movies';
import Preview from './preview';

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();
  const { singleTriller, setMovie_id } = useContext(MovieContext);
  console.log(singleTriller)


  const getSearched = async (name) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bf88e5683ea7d645eba02281391d953c&query=${name}`);

    const findMovie = await data.json();

    setSearched(findMovie.results);
  }


  useEffect(() => {
    getSearched(params.search);
    console.log(searched)
  }, [params.search])


  return (
    <>
      <Preview />
      <Dishgrid>
        {searched.map((movies) => {
          return (<Item key={movies.id}>
            <Image_w onClick={() => setMovie_id(movies.id)}>
              <Movies newData={movies} />
            </Image_w>
            <p>{movies.title}</p>
          </Item>)
        })}
      </Dishgrid>
    </>
  )
}

export default Searched;


const Dishgrid = styled.div`
display:flex;
max-width:100%; 
margin: 0 auto; 
gap:1rem;
flex-wrap:wrap; 
justify-content:center;
margin:0 1rem;
`
const Item = styled.div`
max-width:13rem;
display: flex; 
flex-direction:column; 
align-items:center; 


`
const Image_w = styled.div`
object-fit:cover;
img{
  border-radius:1rem;
  width:100%; 
  height:100%; 
}
`
