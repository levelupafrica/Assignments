import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm';
import AllNotes from './components/AllNotes';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Note Saving Application</h2>
        </div>
            <NoteForm/>
            <AllNotes/>
      </div>
    );
  }
}

export default App;
