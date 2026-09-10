import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../card/blogCard'
import '../styles/Home.css'

function Home({ blogs, onLikeBlog, onSelectBlog }) {
  const [countBlogs] = useState(blogs.length)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const navigate = useNavigate()
  const categories = [...new Set(blogs.map((blog) => blog.category))]
  const filteredBlogs = blogs.filter((blog) => (
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    && (selectedCategory === 'All' || blog.category === selectedCategory)
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
          <label className="blog-search-label" htmlFor="blog-category">Filter by category</label>
          <select
            id="blog-category"
            className="blog-category-select"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="All">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onLikeBlog={onLikeBlog} onViewBlog={handleViewBlog} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home