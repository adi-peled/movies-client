import React, { FC, useState } from 'react';
import { Movie } from '../../models/Movie';
import feaultImg from '../../assets/imgs/default_poster.jpg'
import './Movies.scss'
interface Props {
    movies: Movie[];
    setSelectedMovieId: any
}

export const Movies: FC<Props> = ({ movies, setSelectedMovieId }) => {

    return <section className="movies">
        {movies.map(m => {
            return <div key={m.imdbID} onClick={() => setSelectedMovieId(m.imdbID)} className="movie">
                <img src={m.Poster === 'N/A' ? feaultImg : m.Poster} alt='img not found' />
                <div className="detail">{m.Title}</div>
                <div className="detail">{m.Year}</div>
                <div className="detail">{m.Type}</div>
            </div>
        })}

    </section>
}