import './blogCard.css'

function BlogCard({ blog }) {
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
    </article>
  )
}

export default BlogCard