import Card from './Card.jsx'

const experiences = [
  {
    titre: 'Stagiaire Développement Web',
    sousTitre: 'Dev-ID · 26 mai/3 juillet 2026',
    description: "Apprentissage de React, création d'une application, intégration d'API et correction de bugs.",
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    titre: 'Aide aux devoirs et Baby-Sitting',
    sousTitre: 'En parrallèle de mes études · depuis 2022',
    description: "Encadrement d’enfants de 6 à 15 ans, soutien scolaire en SVT et français.",
    tags: ['Pédagogie', 'Organisation', 'Communication'],
  },
  {
    titre: 'Stagiaire Kinésithérapie',
    sousTitre: 'Maison de Santé Haute Corrèze · 2023',
    description: "Contact avec le public, observation du travail en équipe, accueil clientèle (patientèle), orientation du patient pour sa prise de rendez-vous",
    tags: ['Relationnel', 'Organisation', 'Communication'],
  },
  {
    titre: 'Stagiaire Architecture',
    sousTitre: 'I.T.E.A. · 2022',
    description: "Réalisation de croquis, observation du travail en équipe et du monde du travail en entreprise.",
    tags: ['Créativité', 'Observation'],
  },
]

function Experiences() {
  return (
    <section id="experience">

      <div className="titre-section">
        <div className="icone">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01"/>
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/>
          <rect width="20" height="14" x="2" y="6" rx="2"/>
          </svg>
        </div>
        <h2>Mon Expérience Professionnelle</h2>
      </div>

      <div className="grille-projets">
        {experiences.map((experience) => (
          <Card key={experience.titre} {...experience} />
        ))}
      </div>

    </section>
  )
}

export default Experiences
