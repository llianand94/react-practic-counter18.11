import { Component } from 'react';

class CounterField extends Component {

  render() {
    const {handlerInput}= this.props;
    return <input onChange={(e)=>handlerInput(e)} 
            type='number' name='step' 
            placeholder='Enter Step another from 1'>            
            </input>;
  }
}

export default CounterField;
