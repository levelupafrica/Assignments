import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';
import { Notes, NoteContent, NoteTitle } from '../styled-components/NoteStyle';
import { EditFormButton, DeleteFormButton, ControlButton} from '../styled-components/GeneralStyle';

class Note extends Component {
    render() {
        return ( 
        <Notes>
            <NoteTitle> {this.props.note.title}</NoteTitle>
            <NoteContent> {this.props.note.notecontent}</NoteContent>
            <ControlButton>
                <EditFormButton onClick = {() => this.props.dispatch({
                    type: 'EDIT_NOTE',
                    id: this.props.note.id
                })}> Edit </EditFormButton>
                <DeleteFormButton onClick = {() => this.props.dispatch({
                    type: 'DELETE_NOTE',
                    id: this.props.note.id
                })}> Delete </DeleteFormButton> 
            </ControlButton>
        </Notes>
        );
    }
}
export default connect()(Note);