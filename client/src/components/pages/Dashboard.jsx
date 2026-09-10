import { useMemo, useState } from 'react'
import { COMMENTS, PROFILE } from '../config/Constants'
import BlogModal from '../modal/BlogModal'
import ConfirmModal from '../modal/ConfirmModal'
import Sidebar from '../dashboard/Sidebar'
import './Dashboard.css'

const VIEW_COPY = {
  overview: { eyebrow: 'Good morning, Hans', title: 'Your ideas at a glance.', description: 'A calm control room for the work behind the words.' },
  blogs: { eyebrow: 'Publishing desk', title: 'Every story in one place.', description: 'Search, shape, and keep your growing archive moving.' },
  comments: { eyebrow: 'Community notes', title: 'Conversations worth keeping.', description: 'See what readers are saying about the work.' },
  profile: { eyebrow: 'Your presence', title: 'The person behind the posts.', description: 'Keep your public author details close at hand.' },
}

const TREND_DATA = [42, 58, 49, 72, 64, 82, 96]

function Dashboard({ blogs, setBlogs }) {
  const [activeView, setActiveView] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBlogId, setSelectedBlogId] = useState(blogs[0]?.id)
  const [blogModal, setBlogModal] = useState({ open: false, blog: null })
  const [confirmModal, setConfirmModal] = useState({ open: false, blog: null })

  const categories = [...new Set(blogs.map((blog) => blog.category))]
  const filteredBlogs = blogs.filter((blog) => (
    `${blog.title} ${blog.excerpt}`.toLowerCase().includes(searchTerm.toLowerCase())
    && (selectedCategory === 'All' || blog.category === selectedCategory)
  ))
  const selectedBlog = blogs.find((blog) => blog.id === selectedBlogId) || blogs[0]
  const selectedComments = COMMENTS.filter((comment) => comment.blogId === selectedBlog?.id)
  const totals = useMemo(() => blogs.reduce((total, blog) => ({
    views: total.views + blog.views,
    likes: total.likes + blog.likes,
    comments: total.comments + blog.comments,
  }), { views: 0, likes: 0, comments: 0 }), [blogs])
  const copy = VIEW_COPY[activeView]

  function handleSaveBlog(form) {
    if (blogModal.blog) {
      setBlogs((currentBlogs) => currentBlogs.map((blog) => (
        blog.id === blogModal.blog.id ? { ...blog, ...form } : blog
      )))
    } else {
      const newBlog = {
        ...form,
        id: Math.max(0, ...blogs.map((blog) => blog.id)) + 1,
        author: PROFILE.name,
        date: 'September 10, 2026',
        readTime: `${Math.max(1, Math.ceil(form.content.split(/\s+/).length / 180))} min read`,
        likes: 0,
        comments: 0,
        views: 0,
      }
      setBlogs((currentBlogs) => [newBlog, ...currentBlogs])
    }
    setBlogModal({ open: false, blog: null })
    setActiveView('blogs')
  }

  function handleDeleteBlog() {
    const blogId = confirmModal.blog.id
    setBlogs((currentBlogs) => currentBlogs.filter((blog) => blog.id !== blogId))
    setConfirmModal({ open: false, blog: null })
    if (selectedBlogId === blogId) setSelectedBlogId(blogs.find((blog) => blog.id !== blogId)?.id)
  }

  function handleLike(blogId) {
    setBlogs((currentBlogs) => currentBlogs.map((blog) => (
      blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
    )))
  }

  return (
    <main className="dashboard-page">
      <Sidebar activeView={activeView} onChangeView={setActiveView} />
      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="dashboard-breadcrumb">Workspace / {activeView}</p>
            <p className="dashboard-date">Thursday, September 10, 2026</p>
          </div>
          <div className="dashboard-user-chip"><span>HS</span> Hans Santos <b>⌄</b></div>
        </header>
        <div className="dashboard-content">
          <section className="dashboard-heading">
            <div>
              <p className="dashboard-eyebrow">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p>{copy.description}</p>
            </div>
            {activeView !== 'profile' && <button className="dashboard-primary-button" type="button" onClick={() => setBlogModal({ open: true, blog: null })}>+ New blog</button>}
          </section>
          {activeView === 'overview' && (
            <Overview blogs={blogs} totals={totals} onChangeView={setActiveView} onLike={handleLike} />
          )}
          {activeView === 'blogs' && (
            <BlogList blogs={filteredBlogs} categories={categories} searchTerm={searchTerm} selectedCategory={selectedCategory} onSearch={setSearchTerm} onCategory={setSelectedCategory} onEdit={(blog) => setBlogModal({ open: true, blog })} onDelete={(blog) => setConfirmModal({ open: true, blog })} onComments={(blog) => { setSelectedBlogId(blog.id); setActiveView('comments') }} onLike={handleLike} />
          )}
          {activeView === 'comments' && (
            <CommentsView blogs={blogs} selectedBlog={selectedBlog} selectedComments={selectedComments} onSelectBlog={setSelectedBlogId} />
          )}
          {activeView === 'profile' && <ProfileView />}
        </div>
      </section>
      <BlogModal key={`${blogModal.open}-${blogModal.blog?.id || 'new'}`} open={blogModal.open} blog={blogModal.blog} onClose={() => setBlogModal({ open: false, blog: null })} onSave={handleSaveBlog} />
      <ConfirmModal open={confirmModal.open} title="Delete this story?" message={`“${confirmModal.blog?.title}” will be removed from your publishing workspace. This cannot be undone.`} confirmLabel="Delete story" onCancel={() => setConfirmModal({ open: false, blog: null })} onConfirm={handleDeleteBlog} />
    </main>
  )
}

function Overview({ blogs, totals, onChangeView, onLike }) {
  const maxViews = Math.max(...blogs.map((blog) => blog.views), 1)
  return (
    <>
      <section className="kpi-grid" aria-label="Key performance indicators">
        <KpiCard label="View counts" value={totals.views.toLocaleString()} change="+18.4%" tone="teal" detail="across all stories" />
        <KpiCard label="Total likes" value={totals.likes.toLocaleString()} change="+12.6%" tone="coral" detail="reader appreciation" />
        <KpiCard label="Comments" value={totals.comments.toLocaleString()} change="+8.2%" tone="gold" detail="active conversations" />
        <KpiCard label="Total blogs" value={blogs.length} change="+1 this month" tone="ink" detail="published stories" />
      </section>
      <section className="dashboard-chart-grid">
        <article className="dashboard-panel trend-panel">
          <div className="panel-heading"><div><p className="dashboard-panel-label">Audience pulse</p><h2>Readers are leaning in</h2></div><span className="chart-period">Last 7 days⌄</span></div>
          <div className="line-chart" aria-label="Audience pulse line chart">
            <div className="chart-y-labels"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
            <svg viewBox="0 0 640 220" role="img" aria-label="Audience pulse rises from 42 to 96">
              <path className="chart-grid-line" d="M0 20H640M0 65H640M0 110H640M0 155H640M0 200H640" />
              <polyline className="chart-line" points="0,116 106,93 213,109 320,70 426,84 533,52 640,27" />
              {TREND_DATA.map((point, index) => <circle key={point} className="chart-dot" cx={index * 106.6} cy={220 - point * 2} r="5" />)}
            </svg>
            <div className="chart-x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
          </div>
        </article>
        <article className="dashboard-panel top-posts-panel">
          <div className="panel-heading"><div><p className="dashboard-panel-label">Top stories</p><h2>What is moving</h2></div><button type="button" className="text-button" onClick={() => onChangeView('blogs')}>View all →</button></div>
          <div className="top-post-list">
            {[...blogs].sort((a, b) => b.views - a.views).map((blog, index) => (
              <div className="top-post" key={blog.id}><span className="top-post-rank">0{index + 1}</span><div><strong>{blog.title}</strong><small>{blog.views.toLocaleString()} views</small></div><button type="button" aria-label={`Like ${blog.title}`} onClick={() => onLike(blog.id)}>♡ {blog.likes}</button></div>
            ))}
          </div>
          <div className="mini-bar-chart">{blogs.map((blog) => <span key={blog.id} style={{ height: `${Math.max(18, (blog.views / maxViews) * 100)}%` }} title={`${blog.views} views`} />)}</div>
        </article>
      </section>
    </>
  )
}

function KpiCard({ label, value, change, tone, detail }) {
  return <article className={`kpi-card kpi-card--${tone}`}><div className="kpi-card-top"><span>{label}</span><i aria-hidden="true">↗</i></div><strong>{value}</strong><footer><b>{change}</b><span>{detail}</span></footer></article>
}

function BlogList({ blogs, categories, searchTerm, selectedCategory, onSearch, onCategory, onEdit, onDelete, onComments, onLike }) {
  return <section className="dashboard-panel blog-list-panel"><div className="panel-heading"><div><p className="dashboard-panel-label">Archive</p><h2>Published stories <span>{blogs.length}</span></h2></div><div className="blog-filters"><label className="sr-only" htmlFor="dashboard-blog-search">Search stories</label><input id="dashboard-blog-search" type="search" placeholder="Search stories" value={searchTerm} onChange={(event) => onSearch(event.target.value)} /><label className="sr-only" htmlFor="dashboard-category-filter">Filter stories</label><select id="dashboard-category-filter" value={selectedCategory} onChange={(event) => onCategory(event.target.value)}><option>All</option>{categories.map((category) => <option key={category}>{category}</option>)}</select></div></div><div className="dashboard-table-wrap"><table className="dashboard-table"><thead><tr><th>Story</th><th>Category</th><th>Published</th><th>Reach</th><th>Actions</th></tr></thead><tbody>{blogs.map((blog) => <tr key={blog.id}><td><strong>{blog.title}</strong><small>{blog.excerpt}</small></td><td><span className="category-pill">{blog.category}</span></td><td>{blog.date}</td><td><b>{blog.views.toLocaleString()}</b><small>{blog.likes} likes · {blog.comments} comments</small></td><td><div className="table-actions"><button type="button" onClick={() => onLike(blog.id)}>♡</button><button type="button" onClick={() => onComments(blog)}>Comments</button><button type="button" onClick={() => onEdit(blog)}>Edit</button><button type="button" className="danger-link" onClick={() => onDelete(blog)}>Delete</button></div></td></tr>)}</tbody></table>{blogs.length === 0 && <div className="empty-state"><span>⌕</span><h3>No stories found</h3><p>Try a different search or category.</p></div>}</div></section>
}

function CommentsView({ blogs, selectedBlog, selectedComments, onSelectBlog }) {
  return <section className="comments-layout"><article className="dashboard-panel comments-panel"><div className="panel-heading"><div><p className="dashboard-panel-label">Selected story</p><h2>Reader comments</h2></div><label className="select-label" htmlFor="comments-blog-select">Blog<select id="comments-blog-select" value={selectedBlog?.id || ''} onChange={(event) => onSelectBlog(Number(event.target.value))}>{blogs.map((blog) => <option key={blog.id} value={blog.id}>{blog.title}</option>)}</select></label></div><div className="comment-list">{selectedComments.map((comment) => <article className="comment-item" key={comment.id}><div className="comment-avatar">{comment.author.split(' ').map((name) => name[0]).join('')}</div><div><div className="comment-meta"><strong>{comment.author}</strong><span>{comment.date}</span></div><p>{comment.text}</p><button type="button" className="text-button">Reply →</button></div></article>)}{selectedComments.length === 0 && <div className="empty-state"><h3>No comments yet</h3><p>This story is waiting for its first conversation.</p></div>}</div></article><aside className="dashboard-panel comment-summary"><p className="dashboard-panel-label">Conversation health</p><strong>{selectedBlog?.comments || 0}</strong><span>comments on this story</span><div className="summary-rule" /><p>Readers stay longest when a post gives them something specific to respond to.</p></aside></section>
}

function ProfileView() {
  return <section className="profile-layout"><article className="dashboard-panel profile-hero"><div className="profile-avatar-large">HS</div><div><p className="dashboard-panel-label">Author profile</p><h2>{PROFILE.name}</h2><p>{PROFILE.bio}</p><span className="profile-role">{PROFILE.role}</span></div><button type="button" className="dashboard-secondary-button">Edit profile</button></article><div className="profile-details-grid">{[['Email', PROFILE.email], ['Phone', PROFILE.phone], ['Location', PROFILE.location], ['Focus', 'Frontend development']].map(([label, value]) => <article className="dashboard-panel profile-detail" key={label}><span>{label}</span><strong>{value}</strong></article>)}</div></section>
}

export default Dashboard
