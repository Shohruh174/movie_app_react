import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopRatedCard from '../components/TopRatedCard';


const TopRated = () => {
    const [topRate, setTopRate] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          params: {
            api_key: "8c6b435d72ceead1a7aa11e193fde748"
          }
        })
          .then(function (response) {
            setTopRate({
              isFetched: true,
              data: response.data,
              error: false
            })
          })
          .catch(function (error) {
            setTopRate({
              isFetched: true,
              data: [],
              error: error
            })
          })
      }, [])

    console.log(topRate.data);

    return (
        <>
            <div className="container">
                {
                topRate.isFetched ? (
                <div className="toprate-holder">
                    {
                    topRate.data.results.map((item, index) => (

                        <TopRatedCard
                        id={item.id}
                        imgLink={`${item.poster_path}`}
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

export default TopRated;