import React from 'react'
import Chart from 'chart.js'

export default class PokeChart extends React.Component {
  constructor (props) {
    super(props)
    this.canvas = React.createRef()
    this.chart = null
  }

  componentDidMount () {
    const canvas = this.canvas.current
    const ctx = canvas.getContext('2d')
    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Fuerza', 'Velocidad', 'Ataque', 'Defensa', 'Defensa especial', 'Ataque Especial'],
        datasets: [{
          label: 'Características',
          data: [20, 10, 4, 2, 5, 15]
        }]
      }
    })
  }

  render () {
    return (
      <canvas ref={this.canvas} width='400' height='400' />
    )
  }
}
