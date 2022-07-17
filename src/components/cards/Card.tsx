import React from 'react'
import './card.css'

type Props = {
  image: string,
  altText: string,
  label: string,
  path: string
}

const Card: React.FC<Props> = ({ image, altText, label, path }) => {
  return (
    <a
      className="card"
      href={path}
    >
      <div className="card-contents">
        <div className="card-icon">
          <img src={image} alt={altText} />
        </div>
        <h4 className="card-label">
          {label}
        </h4>
      </div>
    </a>
  )
}

export default Card