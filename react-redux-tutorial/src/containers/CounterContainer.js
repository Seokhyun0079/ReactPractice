import React from "react";
import { connect, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../moudules/counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  return <Counter number={number} />;
};

export default CounterContainer;
