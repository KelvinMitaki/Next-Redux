const { compose, createStore, applyMiddleware } = require("redux");
const { default: reducers } = require("../reducers");
const { default: thunk } = require("redux-thunk");

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

module.exports = store;
