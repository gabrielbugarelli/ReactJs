import './styles.css';

import { Component } from 'react';
import Posts from '../../Posts';
import { loadPosts } from '../../../utils/load-posts';
import Button from '../../Button';
import TextInput from '../../TextInput';

export class Home extends Component {
  state = {
    posts: [], 
    allPosts: [],
    page: 0,
    postsPerPage: 8,
    searchValue: ''
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

  loadMorePosts = ()=> {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts)

    this.setState({posts, page: nextPage});
  }

  handleChange =(e)=>{
    const {value} = e.target;
    this.setState({searchValue:value})
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    
    const filteredPosts = !!searchValue ? 
        posts.filter(post=>{
          return post.title.toLowerCase().includes(
            searchValue.toLowerCase());
        })
      : posts;

      return (
        <section className="container">
          <div className="search-container">
            {!!searchValue && (
              <h1>Search value: {searchValue}</h1>
            )}

            <TextInput
              handleChange={this.handleChange} 
              type="search" 
              searchValue={searchValue}
            />
          </div>

          {filteredPosts.length > 0 && (
            <Posts posts={filteredPosts} />
          )}
          {filteredPosts.length === 0 && (
            <p>Post não encontrado :( </p>
          )}

          <div className="button-container">
            {!searchValue && (
              <Button 
                text="Mais posts"
                handleClick={this.loadMorePosts}
                disabled={noMorePosts}
              />
            )}
          </div>
      
        </section>
      );
  }
}
