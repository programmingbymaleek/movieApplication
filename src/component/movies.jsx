import styled from 'styled-components';



function Movies({ newData }) {
  const { poster_path, original_title, overview } = newData;
  return (

    <Image_body>
      {poster_path ? <img src={`https://image.tmdb.org/t/p/original${poster_path}`} /> : null}
    </Image_body>

  )
}

export default Movies;

const Image_body = styled.div`
  max-width:100%;
  min-height: 100%;
  img{
    border-radius:2rem;
    width:100%;
    height:100%;
   object-fit:cover;
  }
`
