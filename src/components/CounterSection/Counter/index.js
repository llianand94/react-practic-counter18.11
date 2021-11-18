import React, { Component } from 'react';

class Counter extends Component {
  // childrenHandlerCounter=()=>{
    
  // }
  toggler=(e)=>{
console.log(e);
  }
  render() {
    console.log(this.props)
    const {count, childrenHandlerCounter} = this.props;
    return (
    <>
      <h2>{count}</h2>
      <button onClick={this.toggler()} value='Toggle'>Toggler</button>
      <button onClick={()=>childrenHandlerCounter()} value='Add'>Submit "Add/Sub"</button>
    </>  
    );
  }
}

export default Counter;
