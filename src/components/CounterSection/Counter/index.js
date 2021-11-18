import React, { Component } from 'react';

class Counter extends Component {  
  changeText=(mode)=>{
    return mode?'Add':'Sub';
  }
  render() {    
    const {count,step, childrenHandlerCounter, switchMode, mode} = this.props;
    return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>switchMode()} value='Toggle'>Toggler</button>
      <button onClick={()=>childrenHandlerCounter(step)} >Submit "{this.changeText(mode)} "</button>
      <span>Our step is: {step}</span>
    </>  
    );
  }
}

export default Counter;
