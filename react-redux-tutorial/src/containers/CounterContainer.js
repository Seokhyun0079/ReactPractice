import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../moudules/counter";
import { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onDecrease = useCallback(() => dispatch(decrease(), [dispatch]));
  const onIncrease = useCallback(() => dispatch(increase(), [dispatch]));
  return (
    <Counter
      number={number}
      onIncrease={() => onIncrease}
      onDecrease={() => onDecrease}
    />
  );
};

export default CounterContainer;
