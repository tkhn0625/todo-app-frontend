import React, {Component} from 'react';
import propTypes from "prop-types"
import './Counter.css'

class Counter extends Component{

  constructor(){
    super();
    this.state = {
      total_conuter : 0
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }
  render(){
    return(
      <div className="counter">
        <CounterButton plus={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton plus={50} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton plus={100} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.total_conuter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    )
  }
  increment(by){
    console.log(`increment from parent - ${by}`);
    this.setState(
      (prevState)=>{
        return {total_conuter: prevState.total_conuter + by}
      }
    );
  }

  decrement(by) {
    console.log(`decrement from parent - ${by}`);
    this.setState(
      (prevState)=>{
        return {total_conuter: prevState.total_conuter - by}
      }
    );
  }

  reset() {
    console.log("reset");
    this.setState({total_conuter: 0});
  }
}

class CounterButton extends Component{

  constructor(){
    super();
    // this.state = {
    //   conuter : 0
    // }
    // this.increment=this.increment.bind(this);
    // this.decrement=this.decrement.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={()=> this.props.incrementMethod(this.props.plus)}>+{this.props.plus}</button>
        <button onClick={()=> this.props.decrementMethod(this.props.plus)}>-{this.props.plus}</button>
        {/* <span className="count">{this.state.conuter}</span> */}
      </div>
    );
  }
  // increment() {
  //   this.setState({
  //     conuter: this.state.conuter + this.props.plus
  //   });
  //   this.props.incrementMethod(this.props.plus);
  // }

  // decrement() {
  //   this.setState({
  //     conuter: this.state.conuter - this.props.plus
  //   });
  //   this.props.decrementMethod(this.props.plus);
  // }
}

CounterButton.defaultProps = {
  plus: 1
}

CounterButton.propTypes = {
  plus: propTypes.number
}

export default Counter;