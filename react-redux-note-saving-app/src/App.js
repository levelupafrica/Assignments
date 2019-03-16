import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {AppNavbarHeading, AppNavbar} from './styled-components/AppStyle';
import NoteForm from './components/NoteForm';
import AllNotes from './components/AllNotes';




class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar>
          <AppNavbarHeading>Note Saving Application</AppNavbarHeading>
        </AppNavbar>
            <NoteForm/>
            <AllNotes/>
      </div>
    );
  }
}

export default App;
