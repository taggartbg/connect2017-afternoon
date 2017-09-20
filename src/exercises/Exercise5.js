import React, {Component} from 'react';

/* TODO:

Create a decorator that will auto-bind the class method to the class instance

*/

function autobind(target, key, descriptor) {
  // debugger
  target[key] = target[key].bind(this);
}

class Exercise5 extends Component {
  constructor(props) {
    super();
    this.state = {
      'key': 'val'
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  @autobind
  handleClick(evt) {
    console.log("VALUE: ", this.state.key);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Exercise 5
      </div>
    )
  }
}

export default Exercise5;
