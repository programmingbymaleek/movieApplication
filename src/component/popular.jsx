import { useState, useEffect } from "react";
import Movies from "./movies";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import { useContext } from 'react';
import { MovieContext } from '../context/context.api';


function Popular() {
  const { setMovie_id } = useContext(MovieContext);
  const [popular, setPopular] = useState([]);
  const findPopular = async () => {
    const config = {
      params: { api_key: 'bf88e5683ea7d645eba02281391d953c' }
    }
    const new_data = await axios.get('https://api.themoviedb.org/3/discover/movie', config);
    setPopular(new_data.data.results);
    console.log(popular)
  }

  useEffect(() => {
    findPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <h1>Popular movies</h1>
      <Splide options={{
        perPage: 3,
        drag: "free",
        arrows: false,
        pagination: false,
        gap: "2rem"
      }}>
        {popular.map((data) =>
        (<>
          <SplideSlide>
            <Card onClick={() => setMovie_id(data.id)}>
              <Movies newData={data} />
            </Card>
          </SplideSlide>
        </>
        )
        )}
      </Splide>
    </Wrapper>
  )
}

export default Popular

const Wrapper = styled.div`
margin:4rem 0rem;
h1{
  color:white;
  margin:0 1rem;
}
`;

const Card = styled.div`
position:relative; 
border-radius:2rem;
overflow: hidden;
img{
  border-radius:2rem; 
  width:100%; 
  height:100%;
  object-fit:cover;
}

p{

  height:2rem;
  margin-bottom:2rem; 
  z-index:10;
  font-weight:600;
  width:100%;
  text-align:center;
  display:flex; 
  justify-content:center; 
  align-items:center;
  color:black;
  font-size:1rem;
}
`

//adding gradient to the images.. 

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%; 
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,5));
`
