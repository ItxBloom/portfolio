function About() {
  return (
    <section id="about">
      <div className="carte">

        <div className="titre-section">
          <div className="icone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
            stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/>
            <path d="M20 21a8 8 0 0 0-16 0"/>
            </svg>
          </div>
          <h2>À propos de moi</h2>
        </div>

        <p style={{ color: '#374151', lineHeight: '1.7' }}>
          Étudiante sérieuse et motivée en deuxième année de BTS CIEL 
          (option informatique et réseau), je cherche à développer mes compétences 
          en gestion de réseaux, informatique ou développement web et applications 
          tout en poursuivant ma formation. 
        </p>

      </div>
    </section>
  )
}

export default About
