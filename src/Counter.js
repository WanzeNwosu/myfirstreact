import React from 'react';

//vslet count=0;
//let Button = <button onClick={Counter}>{count++}</button>;


class Counter extends React.Component {
    state = {
      count: 0
    };
    handleClick = () => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    };
    render() {
      return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
  }

export default Counter;