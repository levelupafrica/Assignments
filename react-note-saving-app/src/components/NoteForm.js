import React,{ Component } from 'react';



class NoteForm extends Component {
    render(){
        return(
            <div>
                <h1>Create Note</h1>
                <form>
                    <input required type="text" placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
};

export default NoteForm;