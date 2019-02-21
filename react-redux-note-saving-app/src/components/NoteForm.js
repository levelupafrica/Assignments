import React, { Component } from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import '../css/Note.css';


class NoteForm extends Component {
    handleFormSubmit = (e) => {
      e.preventDefault();
        const title = this.getTitle.value;
        const notecontent =  this.getContent.value;
        const data = {
            id: uuid(),
            title,
            notecontent,
            editing: false,
        }
        this.props.dispatch({
            type:'ADD_NOTE',
            data
        })
        this.getTitle.value = '';
        this.getContent.value = '';
    }
    render(){
        return(
            <div className="note-container">
                <h1 className="note_heading">Create Note</h1>
                <form className="form" onSubmit = {this.handleFormSubmit}>
                    <input required type="text" placeholder="Enter Note Title" ref={(input)=>this.getTitle = input}/><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter Note Information" ref={(input)=>this.getContent = input}/><br /><br />
                    <button>Save Note</button>
                </form>
             </div>  
        ); 
    }    
}

export default connect()(NoteForm)
