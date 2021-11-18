import React, { Component } from 'react';
import Counter from './Counter';
import style from './CounterSection.module.css'

class CounterSection extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
      mode: true,
      step:1,      
    }
  }
  switchMode=()=>{
    this.setState((state)=>{return {mode: !state.mode}})
  }
  childrenHandlerCounter=(num)=>{
    this.setState((state)=>{      
      if(state.mode){
        return {count:state.count + Number(num)}
      }      
      return {count:state.count - Number(num)}
    })      
  }
  handleInput = ({target:{value}}) =>  {  
     
    if(value>0){
      return this.setState({step:value})};    
    } 
    
  

  render() {
    const {count, step, mode} = this.state;
    return (
      <form className={style.section} onSubmit={(e)=>{e.preventDefault()}}>
        <Counter switchMode={this.switchMode} childrenHandlerCounter={this.childrenHandlerCounter} count={count} step={step} mode={mode}/>
        <input className={style.input}  onChange={this.handleInput} type='number' name='step' placeholder='Enter Step another from 1'></input>
      </form>
    );
  }
}

export default CounterSection;
