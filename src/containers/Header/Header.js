import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home page</Link>
            <Link to="/populars">Popular</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/upcoming">Upcoming</Link>
            <Link to="/top_rated">Top Rated</Link>
        </div>
    )
}

export default Header;