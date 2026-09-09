import { useState } from 'react'
import { USER_CREDENTIALS } from '../config/Constants'
import '../styles/Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const isValid = username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password
    setMessage(isValid ? 'Login successful. Welcome back.' : 'Username or password is incorrect.')
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-heading">
        <p className="eyebrow">Reader access</p>
        <h1 id="login-heading">Welcome back.</h1>
        <p className="login-copy">Sign in to continue reading the blog.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <button type="submit">Log in</button>
        </form>
        {message && <p className="login-message" role="status">{message}</p>}
      </section>
    </main>
  )
}

export default Login