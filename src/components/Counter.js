import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement,reset} from './Action'


function Counter(props) {
    

  return (
      <div className="counter">
      <h2>Counter with Redux</h2>
      <div id="buttons">
        <button className="decrement-btn" onClick={props.decrement}>-</button>
        <span className="count">{props.count}</span>
        <button className="increment-btn" onClick={props.increment}>+</button>
        <button  className="reset-btn" onClick={props.reset}>RESET</button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {  count: state.count };
 };


 const mapDispatchtoProps = (dispatch) => {
  return {
    increment : () => dispatch( increment()),
    decrement : () => dispatch(decrement()),
    reset : () => dispatch(reset())

  };
}
 
export default connect(mapStateToProps,mapDispatchtoProps)(Counter);