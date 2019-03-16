import React, {Component} from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import EditComponent from './EditComponent';
import AllNotesHeading from '../styled-components/AllNoteStyle';



// import Note from './Note';

class AllNotes extends Component {
    render(){
        return(
            <div>
                <AllNotesHeading>All Notes</AllNotesHeading>
                {this.props.notes.map((note) => (
                <div key={note.id}>
                {note.editing ? <EditComponent note={note} key={note.id} /> : <Note note={note}
                key={note.id} />}
                </div>
            ))}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        notes: state
    }
}
export default connect(mapStateToProps)(AllNotes);