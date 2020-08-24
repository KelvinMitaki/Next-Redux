import React, { Component } from "react";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";
import { wrapper } from "../redux/reducers";

export class index extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(fetchPosts());
  }
  render() {
    return (
      <div>
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
