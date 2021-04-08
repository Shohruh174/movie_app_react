import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard/MovieCard';

const PopularsPage = () => {
    const [movieList, setMoviesList] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
            params: {
              api_key: '8c6b435d72ceead1a7aa11e193fde748'
            }
          })
          .then(function (response) {
            setMoviesList({
                isFetched: true,
                data: response.data.results,
                error: false
            })
          })
          .catch(function (error) {
            setMoviesList({
                isFetched: true,
                data: [],
                error: error
            })
          })
          .then(function () {
            // always executed
          });  
        
    }, [])

    console.log(movieList);

    return (
        <div>
            {
                movieList.isFetched ? (
                    <div className="movies-holder">
                        {
                            movieList.data.map((item, index) => (
                                <MovieCard
                                id={item.id}
                                imgLink={item.poster_path}
                                title={item.title}
                                key={index}
                                rating={item.vote_average}
                                releaseDate={item.release_date}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default PopularsPage;

// https://api.themoviedb.org/3/movie/${match.params.id}