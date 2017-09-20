import React, {Component} from 'react';

/* TODO:

Create a decorator that will replace a class method with a memoized version of the same method

*/

function memoize(target, key, descriptor) {
  var oldVal = descriptor.value, cache = {};

  descriptor.value = (...args) => {
    let argString = JSON.stringify(args);

    if (argString in cache) {
      return cache[argString];
    }

    cache[argString] = oldVal(...args);
    console.log("SAVING");
    return cache[argString];
  }

  // return descriptor;
}

class Exercise6 extends Component {
  @memoize
  toUpperCase(inputString) {
    return inputString.toUpperCase();
  }

  render() {
    return (
      <div>
        Exercise 6
        { this.toUpperCase('exercise 6 is my favorite so far!') }
        { this.toUpperCase('exercise 6 is my favorite so far!') }
      </div>
    )
  }
}

export default Exercise6;
