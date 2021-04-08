import { Link } from 'react-router-dom';

import './UpcomingCard.scss';

const UpcomingCard = ({imgLink, title, id, rating, releaseDate}) => {
    return (
            <Link to={`/movie/${id}`} className="upcoming-card">
                <div>
                    <img src={`${imgLink}`} alt=""/>

                    <div className="bottom">
                        <h4 className="upcoming-title">{title}</h4>
                        <h5 className="upcoming-date">{releaseDate}</h5>
                    </div>
                </div>
            </Link>


        // <Link to={`/movie/${id}`} className="movie-card">
        //     <div>
        //         <div className="card-rating">{rating}</div>
        //         <img src={`https://image.tmdb.org/t/p/w500${imgLink}`} alt="" className="card-img"/>
        //         <div className="bottom">
        //             <h2 className="movie-title">{title}</h2>
        //             <h5>{releaseDate}</h5>
        //             <Link to={`/movie/${id}`} className="card-btn">More info</Link>
        //         </div>
            
        //     </div>
        // </Link>
    )
}

export default UpcomingCard;