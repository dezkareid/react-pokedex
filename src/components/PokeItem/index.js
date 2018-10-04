import React from 'react'

export default function PokeItem (props) {
  return (
    <li>
      <figure>
        <img src={props.avatar} />
        <figcaption>
          <span>{props.name}</span>
        </figcaption>
      </figure>
    </li>
  )
}
