import React, { Component } from "react";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";

export class index extends Component {
  componentDidMount() {
    this.props.fetchPosts();
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
    posts: state.postReducer.posts
  };
};
export default connect(mapStateToProps, { fetchPosts })(index);
