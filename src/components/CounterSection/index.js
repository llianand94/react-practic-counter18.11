import React, { Component } from 'react';
import Counter from './Counter';
import style from './CounterSection.module.css'

class CounterSection extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
    }
  }
  childrenHandlerCounter=()=>{
    this.setState((state)=>{return {count:state.count + 1}})
  }
  // parentHandlerCoutner=()=>{
  //   this.setState({count:this.state.count + 1})
  // }

  render() {
    return (
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <Counter childrenHandlerCounter={this.childrenHandlerCounter} count={this.state.count}/>
        <input type='text' name='step'></input>
      </form>
    );
  }
}

export default CounterSection;
