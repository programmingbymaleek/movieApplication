import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'


function Movie_info() {
  const [details, setDetails] = useState({})
  const params = useParams();
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/find/${params.id}?api_key=bf88e5683ea7d645eba02281391d953c&language=en-US&external_source=imdb_id`);
    const movieDetails = await data.json();
    // 
    setDetails(movieDetails)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name]);

  console.log(details)

  return (
    <Container>
      <Image_title>
        <Image_box>
          <img src={details.image} />
        </Image_box>
        <Title>
          {details.title}
        </Title>
      </Image_title>
      <Summary_Intructions>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() =>
          setActiveTab('instructions')
        }> Instructions </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}> Ingredients </Button>
        {activeTab === 'instructions' && (
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: details.summary }}>
            </p>
            <br />
            <p
              dangerouslySetInnerHTML={{ __html: details.instructions }}>
            </p>
          </div>
        )}

        {activeTab === 'ingredients' && (<ul>
          {details.extendedIngredients.map((ingredient) =>
            <li key={ingredient.id}>{ingredient.original}</li>
          )}
        </ul>)}



      </Summary_Intructions>
    </Container>
  )
}

export default Movie_info;

const Container = styled.div`
display:flex; 
gap:2rem;
margin:0 auto; 
max-width:60rem;
flex-wrap:wrap;
justify-content:center;
.active{
  background:linear-gradient(35deg, #494949,#313131); 
  color:white;
}
`

const Image_box = styled.div`
max-width:20rem;
height: 15rem; 
word-wrap:break-word;
img{
  width:100%; 
  height:100%;
  object-fit:cover;
}
`
const Image_title = styled.div`
text-align:center`
const Title = styled.div``
const Summary_Intructions = styled.div`
width:30rem;

`
const Button = styled.button`
padding: 1rem 2rem; 
color:#313131;
background: white; 
border: 1px solid black;
font-weight:600;
margin-right:1rem;
` 
