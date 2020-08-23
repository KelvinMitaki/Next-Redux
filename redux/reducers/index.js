import { combineReducers, createStore, applyMiddleware } from "redux";
import postReducer from "./postReducer";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const combinedReducer = combineReducers({
  postReducer: postReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    if (state.postReducer) nextState.postReducer = state.postReducer;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const initialStore = () => store;

export const wrapper = createWrapper(initialStore);
