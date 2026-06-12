import Card from './Card.jsx'

const projets = [
  {
    titre: 'Blog Coopératif',
    sousTitre: 'Projet réalisé au cours de mon BTS CIEL',
    description: 'Une application permettant a plusieurs utilisateurs de sse connecter, ajouter des articles et des commentaires sur un blog commun.',
    tags: ['PHP', 'MySQL', 'PhpMyAdmin'],
  },
  {
    titre: 'MoodCat',
    sousTitre: 'Premier projet réalisé durant mon stage',
    description: "Une application permettant de choisir une humeur, afficher une musique associée et une photo de chat",
    tags: ['React', 'TheCatAPI', 'Vite'],
  },
]

function Projects() {
  return (
    <section id="projects">

      <div className="titre-section">
        <div className="icone">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-keyboard-icon lucide-keyboard"><path d="M10 8h.01"/><path d="M12 12h.01"/>
          <path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/>
          <path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>
          </svg>
        </div>
        <h2>Mes Projets</h2>
      </div>

      <div className="grille-projets">
        {projets.map((projet) => (
          <Card key={projet.titre} {...projet} />
        ))}
      </div>

    </section>
  )
}

export default Projects
