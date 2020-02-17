import React from 'react';
import { Route, Link } from "react-router-dom"
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () =>{
  return (
    <div>
      <ul>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <Link to="/about">紹介</Link>
        </li>
        <Link to="/profiles">profiles</Link>
      </ul>
      <hr/>
      <Route path="/" component = {Home} exact = {true}/>
      <Route path={["/about", '/info']} component = { About}/>
      <Route path = "/profile/:username" component={Profile}/>
      <Route path = "/profiles" component={Profiles}/>
      <Route path = "/history" component={HistorySample}/>
    </div>
  );
};

export default App;