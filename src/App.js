import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage'; 
import PopularsPage from './pages/PopularsPage'; 
import SingleMovie from './pages/SingleMovie';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';

import Header from './containers/Header';

import './assets/styles/main.scss';

function App() {
  return (
    <Router>

      <Header/>

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/movies" component={MoviesPage}/>
        <Route path="/populars" component={PopularsPage}/>
        <Route path="/upcoming" component={Upcoming}/>
        <Route path="/top_rated" component={TopRated}/>
        <Route path="/movie/:id" component={SingleMovie}/>
      </Switch>
      
    </Router>
  );
}

export default App;