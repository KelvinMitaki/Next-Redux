import { FETCH_POSTS } from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
  posts: null
};
const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
