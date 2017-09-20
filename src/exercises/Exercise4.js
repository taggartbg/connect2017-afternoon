import React, {Component} from 'react';

/* TODO:

Create a decorator that will Create a HOC around Exercise4 and pass down an "enhanced" prop

BONUS: pass "enhance" a parameter to ALSO be passed down as a prop

*/

function myDecorator(Target) {
  // return class EnhancedComponent extends Component {
  //   render() {
  //     return <Target {...this.props} enhanced={true} />
  //   }
  // }

  Target.defaultProps = {enhanced: true};
  // return Target;
}

@myDecorator
class Exercise4 extends Component {
  render() {
    const { enhanced } = this.props;

    return (
      <div>
        Exercise 4
        { enhanced ?  "I'm enhanced!" : "I'm not enhanced :(" }
      </div>
    )
  }
}

export default Exercise4;
