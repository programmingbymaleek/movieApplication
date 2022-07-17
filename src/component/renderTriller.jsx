import YouTube from "react-youtube";
import { useContext } from "react";
import { MovieContext } from "../context/context.api";
const RenderTriller = ({ singleTriller }) => {
  const { setPlayTrailer } = useContext(MovieContext);
  const trailer = singleTriller.videos.results[singleTriller.videos.results.length - 1];
  console.log(trailer);
  console.log(trailer.key)
  return (
    <>
      <YouTube
        videoId={trailer.key}
        className={'youtube-container'}
        opts={
          {
            width: '100%',
            height: '100%'
          }
        }
      />
      <button className='btnClose' onClick={() => (setPlayTrailer(false))}>Close</button>
    </>
  )
}

export default RenderTriller; 