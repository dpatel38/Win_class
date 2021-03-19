import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; // be sure to include this

const GENERIC_MOVIE_TITLE = "New Movie Title",
 GENERIC_MOVIE_DESCRIPTION = "New Movie Description",
 GENERIC_MOVIE_YEAR = "Released Year",
 GENERIC_MOVIE_GENRE = "Genre";
class Movie extends Component {  
  constructor(props) {
    super(props);
    this.titleContent = React.createRef();
    this.descriptionContent = React.createRef(); 
    this.yearContent = React.createRef();
    this.genreContent = React.createRef();
    this.state = {
      title: GENERIC_MOVIE_TITLE, 
      description: GENERIC_MOVIE_DESCRIPTION,
      year: GENERIC_MOVIE_YEAR,
      genre: GENERIC_MOVIE_GENRE,
      editMode: false
    }

  }
  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      description: this.descriptionContent.current.value,
      year: this.yearContent.current.value,
      genre: this.genreContent.current.value,
      editMode: false
    });
  }
  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
  render()
  {
     // // creating three variables, they're empty
    let titleElement, descriptionElement, yearElement, genreElement, buttonArea; 
    // // creating an if statement
    // // IF this.state.editMode is TRUE
    if (this.state.editMode){
      // // THEN assign variables to JSX elements
      // // ref= is tying this specific element and assigning it as the value of our titleContent in CreateRef() in our constructor
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      descriptionElement = <textarea ref={this.descriptionContent} className="body-textarea" defaultValue={this.state.description}></textarea>;
      yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
      genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
      // // button is listening for a click event and if clicked it will trigger the handleSave function
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    }
     // // IF editMode is FALSE
    else{
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      descriptionElement = <p>{this.state.description}</p>;
      yearElement =  <p>{this.state.year}</p>;
      genreElement = <p>{this.state.genre}</p>;
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
      <button className="btn btn-danger delete" onClick={this.handleDelete.bind(this)}>Remove</button>
      </div>;
    }
    return (
        <div className='col-sm-6'>
        <div className="card card-view">
          <div className="card-body">
                {titleElement}
                {descriptionElement}
                {yearElement}
                {genreElement}
                {buttonArea}
          </div>
        </div>
      </div>
    );
  }
//   render() {
//     return (
//       <div className="col-sm-6">
//         <div className="card card-view">
//           <div className="card-body">
//             <h5 className="card-title">{this.state.title}</h5>
//             <p>{this.state.body}</p>
//             <button className="btn btn-info">Edit</button>
//             <button className="btn btn-danger delete">Delete</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
}

Movie.defaultProps = {
    title: "A movie title",
    description: "A movie description",
    year: "A movie year",
    genre: "A movie genre"
  };
   
  Movie.propTypes = {
    title: PropTypes.string
  };
export default Movie;