import React from "react";
import { connect } from "react-redux";

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: "ADD" })}>add 1</button>
    <button onClick={() => dispatch({ type: "ADDTEN" })}>add 10</button>
    <button onClick={() => dispatch({ type: "REMOVE" })}>remove 1</button>
    <button onClick={() => dispatch({ type: "REMOVETEN" })}>remove 10</button>
    <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state,
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
