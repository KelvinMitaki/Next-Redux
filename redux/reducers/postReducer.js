import { FETCH_POSTS } from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
  server: {
    posts: null
  },
  client: {
    posts: null
  }
};
const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      //   console.log({ redux: action.payload });
      return { ...state, server: { ...state.server, posts: action.payload } };
    default:
      return state;
  }
};

export default postReducer;
