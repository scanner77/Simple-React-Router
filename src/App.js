import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path = "/About" component={About}/> 
      <Route path = "/shop" component={Shop}/>
      </Switch>
    </div>
    </Router>
  );
}


const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  )};

export default App;


/* https://youtu.be/Law7wfdg_ls */