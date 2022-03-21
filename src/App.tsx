import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { GlobalStyle } from './globals';
import { Home, Missing } from './pages';
import { Country } from './views';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="countries">
            <Route path=":countryName" element={<Country />} />
          </Route>

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
