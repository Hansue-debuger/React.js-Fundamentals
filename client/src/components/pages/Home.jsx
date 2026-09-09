import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BLOGS } from '../config/Constants'
import BlogCard from '../card/blogCard'
import '../styles/Home.css'

function Home({ onSelectBlog }) {
  const [countBlogs] = useState(BLOGS.length)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const filteredBlogs = BLOGS.filter((blog) => (
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  function handleViewBlog(blog) {
    onSelectBlog(blog)
    navigate('/view-blog')
  }

  return (
    <main className="home-page">
      <section className="blog-hero" aria-labelledby="blog-heading">
        <p className="eyebrow">Notes from the build</p>
        <h1 id="blog-heading">Ideas, lessons,<br /><em>and things I am making.</em></h1>
        <p className="home-program">A small blog by Hans Curt Austin C. Santos about learning Computer Science and building for the web.</p>
      </section>
      <section className="blog-list" aria-labelledby="latest-heading">
        <div className="section-heading">
          <p className="eyebrow">Latest posts</p>
          <h2 id="latest-heading">Fresh from the notebook</h2>
          <p>Total Blog Count: {countBlogs}</p>
          <label className="blog-search-label" htmlFor="blog-search">Search blog titles</label>
          <input
            id="blog-search"
            className="blog-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by title"
          />
        </div>
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onViewBlog={handleViewBlog} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home