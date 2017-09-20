import React, {Component, PropTypes} from 'react';

/* TODO:

Create a HOC function that will wrap Exercise3 and fetch data from mockFetch and pass it down

*/

function mockFetch() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        myFakeKey: 'myFakeValue'
      })
    }, 5000);
  })
}

class Exercise3 extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        Exercise 3
        Fetched data: { data }
      </div>
    )
  }
}
Exercise3.propTypes = {
  data: PropTypes.string.isRequired
}
Exercise3.defaultProps = {
  data: 'my default prop'
}

function fetcher(InputComponent) {
  return class WrappedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: undefined
      }
    }

    componentDidMount() {
      let myPromise = mockFetch();
      myPromise.then((res) => {
        //res == {...}
        this.setState({
          data: res.myFakeKey
        });
      });
    }

    render() {
      const {data} = this.state;
      return <InputComponent {...{data}} {...this.props} />
    }
  }
}

export default fetcher(Exercise3);
