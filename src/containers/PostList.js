import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, stackTest } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    return this.props.posts.map(post => {
      return(
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="desciption">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
    });
  }

  kalles = () => {
    const kalle = this.props.testar + 1;
    this.props.stackTest(kalle);
  }

  render() {
    console.log(this.props)
    return(
      <div className="ui relaxed divided list">{this.renderList()}<button onClick={this.kalles}>HEJSAN</button></div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts, testar: state.testar };
}

export default connect(mapStateToProps, { fetchPost, stackTest })(PostList);
