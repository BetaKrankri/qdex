import { getPokemonEntry } from "./utils";

// estructura base del  objeto de datos
export const initialState = {
  id: null,
  name: undefined,
  genera: [],
  types: [],
  urlToImage: "url",
  description: {},
  height: 0,
  weight: 0,
  abilities: [],
  stats: {
    hp: 0,
    attack: 0,
    defense: 0,
    "special-attack": 0,
    "special-defense": 0,
    speed: 0,
  },
};

const dataBaseURI = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemonEntry(id) {
  const pokeData = await fetch(`${dataBaseURI}/${id}`).then((r) => r.json());
  const pokeSpecieData = await fetch(pokeData.species.url).then((r) =>
    r.json()
  );

  return getPokemonEntry(pokeData, pokeSpecieData);
}

export async function fetchNavigationData(currentId) {
  const urls = fetch(`${dataBaseURI}/?limit=3&offset=${currentId - 2}`).then(
    (res) => res.json()
  );

}
