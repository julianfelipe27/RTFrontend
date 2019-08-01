import React from 'react'
import './card.css'

const Card = props => (
  <div className="cardContent">
    <h3 className="cardTitle">{props.title}</h3>
    <img className="cardImg" src={props.src} alt="img" />
    <p className="cardParagraphe">{props.paragraphe}</p>
    <hr/>
    <a className="cardLink" href="">{props.link}</a>
  </div>
)

export default Card;
