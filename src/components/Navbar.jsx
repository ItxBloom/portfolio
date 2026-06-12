function Navbar() {

  function rediriger(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <h1>Mon Portfolio</h1>
      <div className="navbar-links">
        <button onClick={() => rediriger('about')}>À propos</button>
        <button onClick={() => rediriger('formations')}>Formations</button>
        <button onClick={() => rediriger('experience')}>Expérience</button>
        <button onClick={() => rediriger('projects')}>Projets</button>
        <button onClick={() => rediriger('contact')}>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar
