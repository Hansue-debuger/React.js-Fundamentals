import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Hans Santos profile">
        <span className="brand-mark">H</span>
        <span>Hans Santos</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Studio</Link>
      </nav>
    </header>
  )
}

export default Header