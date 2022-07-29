import React, { useEffect, useState } from 'react';
import './app.scss';
import { MovieModal } from './cmps/MovieModal/MovieModal';
import { Movies } from './cmps/Movies/Movies';
import { Search } from './cmps/Search/Search';
import { Movie } from './models/Movie';
import { MovieService } from './services/movie.service';

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovieId, setSelectedMovieId] = useState<string>('')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [err, setErr] = useState<string>()
  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    const data = await MovieService.getDefault()
    setMovies(data)
  }

  const searchByTitle = async (title: string) => {
    if (title) {
      const res = await MovieService.searchByTitle(title)
      if (res?.data?.Search) {
        setMovies(res.data.Search)
        setErr('')
      } else {
        setErr(res?.data?.Error)
      }
    } else {
      loadMovies()
      setErr('')

    }

  }

  useEffect(() => {
    getFullMovie()
  }, [selectedMovieId])
  const getFullMovie = async () => {
    if (selectedMovieId) {
      const res = await MovieService.getFullMovie(selectedMovieId)
      setSelectedMovie(res.data)
    } else {
      setSelectedMovie(null)
    }

  }


  return (
    <div className="app">
      <Search onSearch={searchByTitle} />
      {err && <div className="err">{err}</div>}
      <Movies setSelectedMovieId={setSelectedMovieId} movies={movies} />
      {selectedMovieId &&
        <>
          <MovieModal movie={selectedMovie} setSelectedMovieId={setSelectedMovieId} />
          <div className="fullscreen" onClick={() => setSelectedMovieId('')}></div>
        </>
      }
    </div>
  );
}

export default App;
