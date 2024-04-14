
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Movie } from './pages/MovieView/Movie.tsx'

import { Home } from './pages/Home/Home.tsx'


import { Search } from './pages/Search/Search.tsx'
import { Tv } from './pages/Tv/Tv.tsx';
import { TvShow } from './pages/TvShowView/TvShow.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <>
    <GlobalStyle />

    <Router>
      <Routes>
        <Route element={<App />}>

          <Route path="/tv" element={<Tv />} />
          <Route path="tvShow/:id" element={<TvShow />} />



          <Route path="/" element={<Home />} />

          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>

    </Router>

  </>
)
