import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { BLOGS } from './components/config/Constants'
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import ViewBlog from './components/pages/ViewBlog'
import Dashboard from './components/pages/Dashboard'

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [blogs, setBlogs] = useState(BLOGS)

  function handleLikeBlog(blogId) {
    setBlogs((currentBlogs) => currentBlogs.map((blog) => (
      blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
    )))
  }

  return (
    <Router>
      <AppShell blogs={blogs} setBlogs={setBlogs} selectedBlog={selectedBlog} handleLikeBlog={handleLikeBlog} setSelectedBlog={setSelectedBlog} />
    </Router>
  )
}

function AppShell({ blogs, setBlogs, selectedBlog, handleLikeBlog, setSelectedBlog }) {
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'

  return (
    <>
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home blogs={blogs} onLikeBlog={handleLikeBlog} onSelectBlog={setSelectedBlog} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-blog" element={<ViewBlog blog={selectedBlog} />} />
        <Route path="/dashboard" element={<Dashboard blogs={blogs} setBlogs={setBlogs} />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  )
}

export default App