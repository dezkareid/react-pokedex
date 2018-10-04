const pokemons = [
  { id: 1, name: 'Bulbasaur', avatar: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/9a/Bulbasaur_%28anime_AG%29.png/revision/latest?cb=20120906022549' }
]
export function getPokemons () {
  return Promise.resolve(pokemons)
}
