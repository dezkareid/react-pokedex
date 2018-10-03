import React from 'react'
import './Layout.css'
export default function Layout (props) {
  const classes = 'Layout ' + props.classes || ''
  return <div className={classes}>{props.children}</div>
}
