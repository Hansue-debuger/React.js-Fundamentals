import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App