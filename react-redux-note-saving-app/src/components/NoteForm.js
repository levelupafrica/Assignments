import React, { Component } from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import { NoteContnainer, NoteForms, NoteFormInput, NoteFormTextarea, NoteHeading } from '../styled-components/NoteFormStyle';
import {SaveFormButton} from '../styled-components/GeneralStyle';


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
            <NoteContnainer>
                <NoteHeading>Create Note</NoteHeading>
                <NoteForms onSubmit = {this.handleFormSubmit}>
                    <NoteFormInput required type="text" placeholder="Enter Note Title" ref={(input)=>this.getTitle = input}/><br /><br />
                    <NoteFormTextarea required rows="5" cols="28" placeholder="Enter Note Information" ref={(input)=>this.getContent = input}/><br /><br />
                    <SaveFormButton>Save Note</SaveFormButton>
               </NoteForms>
             </NoteContnainer>
        ); 
    }    
}

export default connect()(NoteForm)
