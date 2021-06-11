import './styles.css';

import { Component } from 'react';
import Posts from '../../Posts';
import { loadPosts } from '../../../utils/load-posts';

export class Home extends Component {
  state = {
    posts: [], 
    allPosts: [],
    page: 0,
    postsPerPage: 6
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  render() {
    const { posts } = this.state;

      return (
        <section className="container">
          <Posts posts={posts} />
        </section>
      );
  }
}
