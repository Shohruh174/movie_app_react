import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import UpcomingCard from '../components/UpcomingCard';


const Upcoming = () => {
    const [upcomingMovie, setUpcomingMovie] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming', {
          params: {
            api_key: "8c6b435d72ceead1a7aa11e193fde748"
          }
        })
          .then(function (response) {
            setUpcomingMovie({
              isFetched: true,
              data: response.data,
              error: false
            })
          })
          .catch(function (error) {
            setUpcomingMovie({
              isFetched: true,
              data: [],
              error: error
            })
          })
      }, [])

    console.log(upcomingMovie);

    return (
        <>
            <div className="container">
                {
                upcomingMovie.isFetched ? (
                <div className="upcoming-holder">
                    {
                    upcomingMovie.data.results.map((item, index) => (

                        <UpcomingCard
                        id={item.id}
                        imgLink={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        title={item.title}
                        key={index}
                        rating={item.vote_average}
                        releaseDate={item.release_date}
                        />
    
                    ))
                    }
                </div>
                )
                : (
                    <h1>Loading...</h1>
                )
                }
            </div>
        </>
    )
}

export default Upcoming;