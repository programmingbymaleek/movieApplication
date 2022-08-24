import Pages from './pages/pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './component/search';
import Header from './component/header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Search />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
