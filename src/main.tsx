
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Movie } from './pages/Movie/Movie.tsx'

import { Home } from './pages/Home/Home.tsx'


import { Search } from './pages/Search/Search.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <>
    <GlobalStyle />

    <Router>
      <Routes>
        <Route element={<App />}>

          <Route path="/:type" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>

    </Router>

  </>
)
