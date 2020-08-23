import React, { Component } from "react";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";
import Axios from "axios";
import { FETCH_POSTS } from "../redux/actions/types";
import { wrapper } from "../redux/reducers";

export class index extends Component {
  static async getInitialProps({ store }) {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    store.dispatch({ type: FETCH_POSTS, payload: res.data });
    return {};
  }
  render() {
    return (
      <div>
        {/* {!this.props.posts && "No Data"} */}
        {/* {console.log(this.props.posts)} */}
        {this.props.posts &&
          this.props.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.postReducer.server.posts
  };
};
export default wrapper.withRedux(connect(mapStateToProps)(index));
