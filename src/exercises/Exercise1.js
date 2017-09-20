import React, {Component} from 'react';

/* TODO:

Create a function that memoizes the result of another function passed in. If you are not familiar with memoization, it is a programming technique which attempts to increase a function’s performance by caching its previously computed results.

Example:
const upperCase = memoize((string) => {
  return string.toUpperCase();
});d

upperCase('fred'); => 'FRED'
upperCase('fred'); => 'FRED' but pulled from cache as opposed to being recomputed again

*/

function memoize(fn) {
  let cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(...args);
    console.log("SAVING");
    return cache[key];
  }
}
window.memoize = memoize;

class Exercise1 extends Component {
  render() {
    return (
      <div>
        Exercise 1
      </div>
    )
  }
}

export default Exercise1;
