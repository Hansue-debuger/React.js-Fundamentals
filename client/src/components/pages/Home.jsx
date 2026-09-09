import { BLOGS } from '../config/Constants'
import BlogCard from '../card/blogCard'
import '../styles/Home.css'

function Home() {
  return (
    <main className="home-page">
      <section className="blog-hero" aria-labelledby="blog-heading">
        <p className="eyebrow">Notes from the build</p>
        <h1 id="blog-heading">Ideas, lessons,<br /><em>and things I am making.</em></h1>
        <p className="home-program">A small blog by Hans Curt Austin C. Santos about learning Computer Science and building for the web.</p>
      </section>
      <section className="blog-list" aria-labelledby="latest-heading">
        <div className="section-heading"><p className="eyebrow">Latest posts</p><h2 id="latest-heading">Fresh from the notebook</h2></div>
        <div className="blog-grid">
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home