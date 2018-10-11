import React from 'react'
import PokePicture from '../PokePicture'

export default function PokeItem (props) {
  return (
    <figure>
      <PokePicture source={props.avatar} />
      <figcaption>
        <span>{props.name}</span>
      </figcaption>
    </figure>
  )
}
