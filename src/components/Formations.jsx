import Card from './Card.jsx'

const formations = [
  {
    titre: 'BTS CIEL',
    sousTitre: "Ecole Modèle d'Electronique · 2025-2027",
    description: "Formation de technicien en informatique et réseau, avec des projets web et des apprentissages techniques en PHP, SQL et JavaScript.",
    tags: ['Développement Web', 'PHP', 'MySQL', 'JavaScript', 'Cisco Packet Tracer'],
  },
  {
    titre: 'Baccalauréat Général (SVT et SES)',
    sousTitre: 'Lycée Marcel Pagnol · 2024-2025',
    description: "Obtenu avec mention Assez Bien.",
    tags: ['Sciences de la Vie et de la Terre', 'Sciences Économiques et Sociales'],
  },
  {
    titre: 'Brevêt des Collèges',
    sousTitre: 'Collège ORT Léon Bramson · 2022-2023',
    description: "Obtenu avec mention Très Bien.",
    tags: ['Français', 'Mathématiques', 'Histoire-Géographie', 'Sciences', 'Technologie'],
  },
]

function Formations() {
  return (
    <section id="formations">

      <div className="titre-section">
        <div className="icone">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-notebook-icon lucide-notebook"><path d="M2 6h4"/><path d="M2 10h4"/>
          <path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/>
          <path d="M16 2v20"/>
          </svg>
        </div>
        <h2>Mes Formations</h2>
      </div>

      <div className="grille-projets">
        {formations.map((formation) => (
          <Card key={formation.titre} {...formation} />
        ))}
      </div>

    </section>
  )
}

export default Formations
