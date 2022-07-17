import Trending from "../component/Trending"
import Popular from "../component/popular"
import Preview from "../component/preview"

function Home() {
  return (
    <div>
      <Preview />
      <Popular />
      <Trending />
    </div>
  )
}

export default Home
