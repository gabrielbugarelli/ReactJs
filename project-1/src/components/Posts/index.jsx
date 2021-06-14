import PostCard from '../PostCard';
import './style.css';

export default function Posts ({posts}){
  return(
    <div className="posts">
      {
        posts.map(post => (
          <PostCard
            key={post.id}
            cover={post.cover}
            id={post.id}
            title={post.tle}
            body={post.body}
          />
        ))
      }
    </div>
  )
}