import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/AllNotes.css';
import '../css/Note.css';


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
<div key={this.props.note.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.note.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getContent = input}
    defaultValue={this.props.note.notecontent} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);