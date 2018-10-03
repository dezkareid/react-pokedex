const pokemons = [
  { id: 1, name: 'Bulbasaur' }
]
export function getPokemons () {
  return Promise.resolve(pokemons)
}
