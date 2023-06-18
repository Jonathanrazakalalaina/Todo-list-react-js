import React from 'react'
import './card.css'

const Card = ({title, details, deleteCard, index}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{details}</p>
      <button onClick={() => deleteCard(index)}>X</button>
    </div>
  )
}

export default Card
