function Contact() {
  return (
    <section id="contact">

      <div className="titre-section">
        <div className="icone">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h2>Contactez-moi</h2>
      </div>

      <div className="carte">
        <h3>Mes coordonnées</h3>
        <p className="description">Email: chiaragarsep@gmail.com</p>

        <div className="boutons-contact">
          <a className="bouton bouton-contour" href="https://www.linkedin.com/in/chiara-garnierespagne/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

    </section>
  )
}

export default Contact

