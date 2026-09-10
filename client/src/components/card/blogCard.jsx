import './blogCard.css'

function BlogCard({ blog, onLikeBlog, onViewBlog }) {
  return (
    <article className="blog-card">
      <span className="blog-category">{blog.category}</span>
      <h3>{blog.title}</h3>
      <p className="blog-author">By {blog.author}</p>
      <p>{blog.excerpt}</p>
      <footer>
        <span>{blog.date}</span>
        <span>{blog.readTime}</span>
      </footer>
      <div className="blog-card-actions">
        <button type="button" className="blog-card-view" onClick={() => onViewBlog(blog)}>View Blog</button>
        <button type="button" className="blog-card-like" onClick={() => onLikeBlog(blog.id)} aria-label={`Like ${blog.title}`}>
          <span aria-hidden="true">♡</span> {blog.likes}
        </button>
      </div>
    </article>
  )
}

export default BlogCard