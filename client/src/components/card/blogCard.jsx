import './blogCard.css'

function BlogCard({ blog, onViewBlog }) {
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
      <button type="button" onClick={() => onViewBlog(blog)}>View Blog</button>
    </article>
  )
}

export default BlogCard