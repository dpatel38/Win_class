import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Collections from './Collections';
import React, {Component} from 'react';
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
  } from 'react-router-dom';

class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <Navbar />
            <hr />
            <Route name="Home" exact path="/" component={Home}/>
            <Route name="Menu" path="/menu" component={Menu}/>
            <Route name="About" path="/about" component={About} />
            <Route name="Movies Collection" path="/moviesCollection" component={Collections} />
          </div>
        </Router>
      );
    }
  }
  export default Routes;