import React from 'react'

export default function PokeItem (props) {
  return (
    <figure>
      <img src={props.avatar} />
      <figcaption>
        <span>{props.name}</span>
      </figcaption>
    </figure>
  )
}
