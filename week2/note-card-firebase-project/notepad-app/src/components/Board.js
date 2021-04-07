import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';
import myFirebase from '../utility/MyFirebase';

const GENERIC_NOTE_TITLE = "New Note Title", GENERIC_NOTE_BODY = "New Note Body";
class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
    this.firebaseDBRef = myFirebase.getFirebaseRef();
    this.firebaseDBRef.once('value').then((snapshot) => {
      this.addNote(snapshot.val());
    });
  }

  addNote(notes) {
    console.log(notes);
    if(notes){
      for(let key in notes){
        this.state.notes.push(
          {
            id: key,
            title: notes[key].title,
            body: notes[key].body
          }
        );
      }
    } else {
      let pushRef = this.firebaseDBRef.push();
      pushRef.set({
        title: GENERIC_NOTE_TITLE,
        body: GENERIC_NOTE_BODY
      });
      this.state.notes.push(
        {
          id: pushRef.key,
          title: GENERIC_NOTE_TITLE,
          body: GENERIC_NOTE_BODY
        }
      );
    }
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }

  // deleteNote(id){
  //   let newNoteArr = this.state.notes;
  //   newNoteArr.map((note, index) => {
  //     if (id === note.id) {
  //       newNoteArr.splice(index,1);
  //     }
  //   });
  //   this.setState(
  //     {
  //       notes: newNoteArr
  //     }
  //   );
  // }
  deleteNote(id){
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index,1);
        this.firebaseDBRef.child(id).remove();
      }
    });
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }

//   render() {
//     return (
//       <div>
//         <div className="div-board">
//           <div className="row">
//             {
//               this.state.notes.map(note => {
//                 return <Note key={note.id} id={note.id} title={note.title} body={note.body} deleteHandler={this.deleteNote.bind(this)} />
//               })
//             }
//           </div>
//         </div>
//         <div>
//           <button className="btn btn-success add-button" onClick={this.addNote.bind(this, null)}>Add</button>
//         </div>
//       </div>
//     );
//   }
// }
render() {
  return (
    <div>
      <div className="div-board">
        <div className="row">
          {
            this.state.notes.map(note => {
              return <Note key={note.id} id={note.id} title={note.title} 
              body={note.body} firebaseDBRef={this.firebaseDBRef} 
              deleteHandler={this.deleteNote.bind(this)} />
            })
          }
        </div>
      </div>
      <div>
        <button className="btn btn-success add-button" 
        onClick={this.addNote.bind(this, null)}>Add</button>
      </div>
    </div>
  );
}
}

export default Board;
