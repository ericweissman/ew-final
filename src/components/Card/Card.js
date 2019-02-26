import React from 'react'
import './Card.css'

const Card = (props) => {
  const { number, president, birth_year, death_year, took_office, left_office, party } = props
  return(
    <div className='card'>
        <h2>{president}</h2>
        <p>Number: {number}</p>
        <p>Born: {birth_year}</p>
        <p>Died: {death_year}</p>
        <p>Took Office: {took_office}</p>
        <p>Left Office: {left_office}</p>
        <p>Party: {party}</p>
    </div>
  )
}

export default Card