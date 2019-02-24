
//Create an application that renders a button and the number of times the button has been clicked. You’ll be required to use state to achieve this. Each time the button is clicked, the component 
state should be updated and the total times the button has been clicked should be updated and displayed.

import React from 'react';

class StateComponent extends React.Component {
  constructor(props){
      super(props);

      this.handleClick = this.handleClick.bind(this);
  }
  state = {
      count: 0
  };
  handleClick(event) {
      const newCount =this.state.count +1
      this.setState({count: newCount });
  }
  
  render (){
      return (
          <div>
              <button onClick={this.handleClick}>Click Me</button>
              <p>I have been clicked {this.state.count} times</p>
          </div>
      )
  }
}

export default StateComponent;

