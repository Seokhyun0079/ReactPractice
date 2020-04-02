import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(state => ({ number: state.counter }), {
  increase,
  decrease
})(CounterContainer);
