const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: reducers } = require("../reducers");
const { default: thunk } = require("redux-thunk");

const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

module.exports = store;
