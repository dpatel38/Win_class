import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
  } from 'react-router-dom';
import React, {Component} from 'react';


class Navbar extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/">Home</Link> | 
          <Link to="menu">Menu</Link> | 
          <Link to="about">About</Link> |
          <Link to="moviesCollection">Movies Collection</Link>
        </div>
        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-light  bg-light">
        //     <Link className="navbar-brand" to="/">Home</Link>
        //     <ul className="navbar-nav">
        //         <li className="nav-item">
        //         <Link className="nav-link" to="menu">Menu</Link>
        //         </li>
        //         <li className="nav-item">
        //         <Link className="nav-link" to="about">About</Link>
        //         </li>
        //         <li className="nav-item">
        //         <Link className="nav-link" to="moviesCollection">Movies Collection</Link>
        //         </li>
        //     </ul>
        //     </nav>
        // </div>
      );
    }
  }

  export default Navbar;