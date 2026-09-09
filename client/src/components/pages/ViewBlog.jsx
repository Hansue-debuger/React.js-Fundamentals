import { Link } from 'react-router-dom'
import './ViewBlog.css'

function ViewBlog({ blog }) {
  if (!blog) {
    return (
      <main className="view-blog-page">
        <section className="view-blog-empty">
          <p className="eyebrow">No blog selected</p>
          <h1>Choose a blog to read.</h1>
          <Link className="back-link" to="/">Back to blogs</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="view-blog-page">
      <article className="view-blog-content">
        <Link className="back-link" to="/">Back to blogs</Link>
        <p className="eyebrow">{blog.category}</p>
        <h1>{blog.title}</h1>
        <p className="view-blog-author">By {blog.author}</p>
        <div className="view-blog-meta">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
        <p className="view-blog-excerpt">{blog.excerpt}</p>
      </article>
    </main>
  )
}

export default ViewBlog