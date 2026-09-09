import { useState } from 'react'
import { CONTACT_REQUEST } from '../config/Constants'
import '../styles/Contact.css'

function Contact() {
  const [form, setForm] = useState(CONTACT_REQUEST)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-panel" aria-labelledby="contact-heading">
        <div>
          <p className="eyebrow">Contact us</p>
          <h1 id="contact-heading">Send a note<br /><span>to the blog.</span></h1>
          <p className="contact-lede">Have a question, suggestion, or project idea? Fill out the form and leave a message.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label><input id="name" name="name" value={form.name} onChange={handleChange} required />
          <label htmlFor="email">Email</label><input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <label htmlFor="subject">Subject</label><input id="subject" name="subject" value={form.subject} onChange={handleChange} required />
          <label htmlFor="message">Message</label><textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required />
          <button type="submit">Send message</button>
          {submitted && <p className="form-status" role="status">Thanks, {form.name}. Your message is ready to be reviewed.</p>}
        </form>
      </section>
    </main>
  )
}

export default Contact