const pokemons = [
  { id: 1, name: 'Bulbasaur', avatar: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/9a/Bulbasaur_%28anime_AG%29.png/revision/latest?cb=20120906022549' },
  { id: 2, name: 'Ivysaur', avatar: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/9a/Bulbasaur_%28anime_AG%29.png/revision/latest?cb=20120906022549' }
]
export function getPokemons (filter = '') {
  const filteredPokemons = filter ? pokemons.filter((pokemon) => pokemon.name.includes(filter)) : pokemons
  return Promise.resolve(filteredPokemons)
}
