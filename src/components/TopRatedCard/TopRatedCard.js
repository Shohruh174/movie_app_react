import { Link } from 'react-router-dom';

import './TopRatedCard.scss';

const TopRatedCard = ({id, imgLink, title, releaseDate}) => {
    return (
        <div className="top-rated">
            <Link to={`/movie/${id}`} className="toprated-card">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${imgLink}`} alt="" className="card-img"/>

                    <div className="bottom">
                        <h4 className="toprated-title">{title}</h4>
                        <h5 className="toprated-date">{releaseDate}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default TopRatedCard;