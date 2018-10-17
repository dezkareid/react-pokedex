import { configure } from '@storybook/react'

function loadStories () {
  require('./PokeItem')
}

configure(loadStories, module)
