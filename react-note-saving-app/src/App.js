import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import AllNotes from './components/AllNotes';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteForm/>
        <AllNotes/>
      </div>
    );
  }
}

export default App;
