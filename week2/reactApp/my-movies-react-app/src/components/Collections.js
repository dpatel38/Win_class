// // you will always need to import React from react
// // import {Component} when building a class component’
import React, {Component} from 'react';
import '../css/Collections.css';
import Movie from './Movie';

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        // {
        //   title: "Class Notes",
        //   body: "Always use constructors when extending another class"
        // },
        // {
        //   title: "My New Address",
        //   body: "2001 N Lonhill Phoenix, AZ 81234"
        // },
        // {
        //   title: "React Notes",
        //   body: "Everything in React is a component"
        // }
      ]
    }
  }
  
  addMovie() {
    let movies = this.state.movies;
    movies.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.movies
      }
    );
  }
  // // passing in the id of the notecard from which the 'delete button' was clicked
  deleteMovie(id){
    // // creating a new var that holds current notes
    let newMovieArr = this.state.movies;
    // // mapping through array of all notes that's saved in our state, passing in the current note along with the index of that current note
    newMovieArr.map((movie, index) => {
      // //at ever note (from the array in our state) we check to see if the id passed in matches the id of the note we're currently on

      if (id === movie.id) {
          // // if it matches we're removing just one item from that array
          newMovieArr.splice(index,1);
      }
    });
    // // our array now has the same elements minus the one we just deleted
    // // update our state to show that new array which will trigger a re-render
    this.setState(
      {
        movies: newMovieArr
      }
    );
  }
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {
              
              this.state.movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)} />
              })
            }

            
          </div>
        </div>
        <div>
        {/* added onClick event handler */}

          <button className="btn btn-success add-button add" onClick={this.addMovie.bind(this)}>
            Add
          </button>
         
        </div>
      </div>
    );
  }
}

export default Collections;