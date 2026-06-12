function Card({ titre, sousTitre, description, tags }) {
  return (
    <div className="carte grille-cartes">

      <h3>{titre}</h3>
      <p className="sous-titre">{sousTitre}</p>
      <p className="description">{description}</p>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

    </div>
  )
}

export default Card
