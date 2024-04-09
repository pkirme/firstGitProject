//import redux
const redux = require("redux");

//reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

//create strore
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);
for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "increment" });
}

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "decrement" });
}
