import React, {Component} from 'react';

/* TODO:

Create a HOC function that will wrap Exercise2 and seed it with an 'enhanced' prop that is simply 'true'

*/

class Exercise2 extends Component {
  render() {
    const { enhanced } = this.props;

    return (
      <div>
        <p>Exercise 2</p>
        { enhanced ?  "I'm enhanced!" : "I'm not enhanced :(" }
      </div>
    )
  }
}

function enhanceComponent(InputComponent) {
  return function EnhancedComponent(props) {
    return <InputComponent {...props} enhanced={true} />
  }
}

export default enhanceComponent(Exercise2);
