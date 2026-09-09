import '../styles/About.css'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-heading">
        <p className="eyebrow">A little context</p>
        <h1 id="about-heading">Curious mind.<br /><em>Practical builder.</em></h1>
        <p className="about-lede">This website is a simple blog application for sharing notes about learning, frontend development, and the projects that happen along the way.</p>
      </section>
      <section className="about-grid" aria-label="About Hans">
        <article><span>01</span><h2>Purpose</h2><p>To document practical lessons and make progress visible, one post at a time.</p></article>
        <article><span>02</span><h2>About the author</h2><p>Hans Curt Austin C. Santos is a third-year Computer Science student who enjoys building for the web.</p></article>
        <article><span>03</span><h2>What is next</h2><p>More projects, deeper frontend skills, and honest notes from the learning process.</p></article>
      </section>
    </main>
  )
}

export default About