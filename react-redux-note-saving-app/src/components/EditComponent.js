import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NoteForms, NoteFormInput, NoteFormTextarea} from '../styled-components/NoteFormStyle';
import {Notes} from '../styled-components/NoteStyle';
import {SaveFormButton} from '../styled-components/GeneralStyle'



class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newContent = this.getContent.value;
  const data = {
    newTitle,
    newContent
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.note.id, data: data })
}
render() {
return (
<Notes key={this.props.note.id}>
  <NoteForms onSubmit={this.handleEdit}>
    <NoteFormInput required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.note.title} placeholder="Enter note Title" /><br /><br />
    <NoteFormTextarea required rows="5" ref={(input) => this.getContent = input}
    defaultValue={this.props.note.notecontent} cols="28" placeholder="Enter note" /><br /><br />
    <SaveFormButton>Update</SaveFormButton>
  </NoteForms>
</Notes>
);
}
}
export default connect()(EditComponent);