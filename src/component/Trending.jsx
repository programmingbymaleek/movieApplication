import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./movies";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useContext } from 'react';
import { MovieContext } from '../context/context.api';


function Trending() {
  const [trending, setTrending] = useState([]);
  const { setMovie_id } = useContext(MovieContext);
  const findTrending = async () => {
    const config = {
      params: { api_key: 'bf88e5683ea7d645eba02281391d953c' }
    }
    const new_data = await axios.get('https://api.themoviedb.org/3/trending/tv/day?', config);
    setTrending(new_data.data.results);
    console.log(trending)
  }

  useEffect(() => {
    findTrending();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <Wrapper>
      <h1>Trending</h1>
      <Splide options={{
        perPage: 5,
        drag: "free",
        arrows: true,
        pagination: false,
        gap: "2rem"
      }}>
        {trending.map((data) => {
          return (
            <SplideSlide>
              <Card onClick={() => setMovie_id(data.id)}>
                <Movies newData={data} />
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>

  )
}


export default Trending;

const Wrapper = styled.div`
margin:1rem 0rem;
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
image-body{
  max-width:100%; 
  min-height: 100%; 
}

`
const Flexme = styled.div`
display:flex;
gap:2rem
flex-wrap:wrap;
`
//adding gradient to the images.. 

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%; 
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,5));
`
