import { createStore } from "redux";
const INITIAL_VALUE = { counter: 1, privacy: false };
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store,counter: store.counter + 1  };
    return newStore;
  } else if (action.type === "DECREMENT") {
    newStore = {...store, counter: store.counter - 1 };
    return newStore;
  } else if (action.type == "ADD") {
    newStore = { ...store,counter: store.counter + parseInt(action.payload.num) };
    return newStore;
  } else if (action.type == "SUBTRACT") {
    newStore = {...store, counter: store.counter - parseInt(action.payload.num) };
    return newStore;
  }
  else if (action.type == "TOGGLE_PRIVACY") {

return { ...store,privacy : !store.privacy}
}
  return newStore;
};
const counterStore = createStore(counterReducer);



export default counterStore;
