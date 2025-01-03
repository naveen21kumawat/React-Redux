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
    // console.log(!store.privacy)
return { ...store,privacy : !store.privacy}
}
  return newStore;
};

const counterStore = createStore(counterReducer);

// const subscriber = () =>{
//  const state = counterStore.getState();
//  console.log(state)
// }

// counterStore.subscribe(subscriber);
// counterStore.dispatch({type : 'INCREMENT'});

export default counterStore;
