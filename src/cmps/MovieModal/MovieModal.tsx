import React, { FC, useEffect, useState } from 'react';
import { Movie } from '../../models/Movie';
import { ReactComponent as CloseSvg } from '../../assets/imgs/close.svg'
import feaultImg from '../../assets/imgs/default_poster.jpg'
import './MovieModal.scss'
interface Props {
    movie: Movie | null;
    setSelectedMovieId: any
}

export const MovieModal: FC<Props> = ({ movie, setSelectedMovieId }) => {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    const handleKeyDown = (ev: any) => {
        if (ev.key === 'Escape') {
            setSelectedMovieId('')
        }
    }

    return <div className="movie-modal">
        {movie ?
            <>
                <CloseSvg className='close' onClick={() => setSelectedMovieId('')} />
                <div className='container' >
                    <img src={movie.Poster === 'N/A' ? feaultImg : movie.Poster} alt='img not found' />
                    <div className="flex">    <div className="details">
                        <div className="detail">
                            <label htmlFor="">Country:</label>
                            {movie.Country}
                        </div>
                        <div className="detail">
                            <label htmlFor="">Language:</label>

                            {movie.Language}</div>
                        {/* <div className="detail">
                            <label htmlFor="">Plot:</label>
                            {movie.Plot}
                        </div> */}
                        <div className="detail">
                            <label htmlFor="">Year:</label>
                            {movie.Year}
                        </div>
                    </div>
                        <div className="details">
                            <div className="detail">
                                <label htmlFor="">Genre:</label>
                                {movie.Genre}
                            </div>
                            <div className="detail">
                                <label htmlFor="">Runtime:</label>
                                {movie.Runtime}</div>
                            {/* <div className="detail">
                                <label htmlFor="">Released:</label>
                                {movie.Released}
                            </div> */}


                            <div className="detail">
                                <label htmlFor="">Votes:</label>
                                {movie.imdbVotes}
                            </div>
                        </div></div>
                </div>

            </> : <div className="loader">    </div>
        }

    </div>

}


