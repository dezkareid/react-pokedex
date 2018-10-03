import React from 'react'

export default function SearchInput (props = { value: '' }) {
  const changeHandler = function (event) {
    if (props.onChange) {
      props.onChange(event)
    }
  }
  return <input
    placeholder='Bulbasaur'
    value={props.value}
    onChange={changeHandler} />
}
