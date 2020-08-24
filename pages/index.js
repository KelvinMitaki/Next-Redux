import React, { Component } from "react";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";
import { wrapper } from "../redux/reducers";
import { Container, List } from "semantic-ui-react";

export class index extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(fetchPosts());
  }
  render() {
    return (
      <Container>
        <List divided relaxed>
          {this.props.posts &&
            this.props.posts.map(post => (
              <List.Item key={post.id}>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">
                    <h3>{post.title}</h3>
                  </List.Header>
                  <List.Description as="a">
                    <p>{post.body}</p>
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
        </List>
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
