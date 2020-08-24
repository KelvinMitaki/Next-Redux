import React, { Component } from "react";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";
import Axios from "axios";
import { FETCH_POSTS } from "../redux/actions/types";
import { wrapper } from "../redux/reducers";

const index = ({ props }) => {
  return (
    <div>
      {/* {!props.posts && "No Data"} */}
      {/* {console.log(props.posts)} */}
      {props &&
        props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  store.dispatch({ type: FETCH_POSTS, payload: res.data });
});

const mapStateToProps = state => {
  return {
    posts: state.postReducer.server.posts
  };
};
export default connect(mapStateToProps)(index);
