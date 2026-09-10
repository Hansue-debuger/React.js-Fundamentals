import { useState } from 'react'
import './Modal.css'

const EMPTY_BLOG = { title: '', category: 'Frontend', excerpt: '', content: '' }

function BlogModal({ open, blog, onClose, onSave }) {
  const [form, setForm] = useState(() => (blog ? { title: blog.title, category: blog.category, excerpt: blog.excerpt, content: blog.content || blog.excerpt } : EMPTY_BLOG))

  if (!open) return null

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSave(form)
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="blog-modal" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
        <div className="blog-modal__header">
          <div>
            <p className="modal-popup__eyebrow">{blog ? 'Edit story' : 'New story'}</p>
            <h2 id="blog-modal-title">{blog ? 'Shape the next version.' : 'Start a new story.'}</h2>
          </div>
          <button className="modal-close" type="button" aria-label="Close blog modal" onClick={onClose}>×</button>
        </div>
        <form className="blog-modal__form" onSubmit={handleSubmit}>
          <label htmlFor="blog-title">Title</label>
          <input id="blog-title" name="title" value={form.title} onChange={handleChange} required />
          <div className="blog-modal__split">
            <div>
              <label htmlFor="blog-category">Category</label>
              <select id="blog-category" name="category" value={form.category} onChange={handleChange}>
                <option>Frontend</option>
                <option>Learning</option>
                <option>Projects</option>
                <option>Notes</option>
              </select>
            </div>
            <div>
              <label htmlFor="blog-excerpt">Short excerpt</label>
              <input id="blog-excerpt" name="excerpt" value={form.excerpt} onChange={handleChange} required />
            </div>
          </div>
          <label htmlFor="blog-content">Story notes</label>
          <textarea id="blog-content" name="content" rows="5" value={form.content} onChange={handleChange} required />
          <div className="blog-modal__actions">
            <button type="button" className="modal-button modal-button--quiet" onClick={onClose}>Cancel</button>
            <button type="submit" className="modal-button modal-button--primary">{blog ? 'Save changes' : 'Publish story'}</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default BlogModal
