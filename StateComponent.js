//Create an application that renders an input text element and displays whatever the user types below the input element. You’ll be required to use state to achieve this. Each time the user types, 
the component state should be updated and the content below should show what is currently being typed.
import React from 'react';

class NewStateComponent extends React.Component {
  constructor(props){
      super(props);

      this.handleChange = this.handleChange.bind(this);
  }
  state = {
      task: '',
  };

  handleChange(event) {
      const value = event.target.value;
      this.setState({task: value});
  }
  render (){
      return (
          <div>
              <input
              type = "text" 
              name = "task" 
              placeholder = "Type Something" 
              onChange = {this.handleChange}
              />
              <p>{this.state.task}</p>
          </div>
      )
  }
}

export default NewStateComponent;

