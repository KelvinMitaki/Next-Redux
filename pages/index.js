import React, { Component } from "react";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";
import { wrapper } from "../redux/reducers";
import { Container } from "semantic-ui-react";

export class index extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(fetchPosts());
  }
  render() {
    return (
      <Container textAlign="center">
        {this.props.posts &&
          this.props.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts
  };
};
export default wrapper.withRedux(connect(mapStateToProps)(index));
