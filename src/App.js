import Pages from './pages/pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './component/search';

function App() {

  return (
    <>
      <BrowserRouter>
        <Search />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
