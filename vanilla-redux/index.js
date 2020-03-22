const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

import { createStore } from "redux";
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = differnce => ({ type: INCREASE, differnce });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      0;
      console.log(state.counter + action.differnce);
      return {
        ...state,
        counter: state.counter + action.differnce
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};
divToggle.onclick = () => {
  console.log("divToggle onclick");
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  console.log("btnIncrease onclick");
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  console.log("btnDecrease onclick");
  store.dispatch(decrease());
};

render();
store.subscribe(render);
