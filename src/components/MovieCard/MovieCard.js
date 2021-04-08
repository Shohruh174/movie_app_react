import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({imgLink, title, id, rating, releaseDate}) => {
    return (
        <Link to={`/movie/${id}`} className="movie-card">
            <div>
                <div className="card-rating">{rating}</div>
                <img src={`https://image.tmdb.org/t/p/w500${imgLink}`} alt="" className="card-img"/>
                <div className="bottom">
                    <h2 className="movie-title">{title}</h2>
                    <h5>{releaseDate}</h5>
                    <Link to={`/movie/${id}`} className="card-btn">More info</Link>
                </div>
            
            </div>
        </Link>
    )
}

export default MovieCard;