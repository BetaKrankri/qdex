// estructura base del  objeto de datos
export const initialState = {
  id: 0,
  name: "PokemonName",
  genera: "PokemonGenera",
  types: ["tipo 1", "tipo2"],
  urlToImage: "url",
  description: "Lorem Ipsum y mucho mas.",
  height: 0.5,
  weight: 0.5,
  abilities: [
    { name: "Habilidad 1", isHidden: false },
    { name: "Habilidad 2", isHidden: true },
  ],
  stats: {
    hp: 50,
    attack: 50,
    defense: 50,
    "special-attack": 50,
    "special-defense": 50,
    speed: 50,
  },
};

const dataBaseURI = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokeData(id) {
  const pokeData = await fetch(`${dataBaseURI}/${id}`).then((r) => r.json());
  const pokeSpecieData = await fetch(pokeData.species.url).then((r) =>
    r.json()
  );

  return getPokemonEntry(pokeData, pokeSpecieData);
}

function getPokemonEntry(pokeData, pokeSpecieData) {
  //////// Init Just utilery ///////

  const getUrlToImage = () => {
    const imageBaseURI = "https://img.pokemondb.net/sprites/home/normal";
    return `${imageBaseURI}/${pokeData.name}.png`;
  };
  const getAbilities = () => {
    return pokeData.abilities.map((a) => ({
      name: a.ability.name,
      isHidden: a.is_hidden,
    }));
  };
  const getGenusDic = () => {
    const genusDic = {};

    pokeSpecieData.genera.forEach((g) => {
      genusDic[g.language.name] = g.genus;
    });

    return genusDic;
  };

  const getDescription = () => {
    const textLangSelection = pokeSpecieData.flavor_text_entries.filter((fte) =>
      /(en)/.test(fte.language.name)
    );
    const textVersionSorted = textLangSelection.sort((a, b) => {
      return a.version.url < b.version.url
        ? 1
        : a.version.url > b.version.url
        ? -1
        : 0;
    });
    return {
      text: textVersionSorted[0].flavor_text,
      version: textVersionSorted[0].version.name,
    };
  };

  const getTypes = () => {
    const typesArray = [];
    pokeData.types.forEach((t) => {
      typesArray.push(t.type.name);
    });
    return typesArray;
  };

  const getStats = () => {
    const statsLib = {};
    pokeData.stats.forEach((s) => {
      statsLib[s.stat.name] = s.base_stat;
    });
    return statsLib;
  };
  //////// End Just utilery ///////

  const pokeEntry = {
    id: pokeData.id,
    name: pokeData.species.name, // TODO: getnamesDic for names in diferent languages
    genera: getGenusDic(),
    urlToImage: getUrlToImage(),
    description: getDescription(),
    height: pokeData.height,
    weight: pokeData.weight,
    abilities: getAbilities(),
    types: getTypes(),
    stats: getStats(),
  };

  return pokeEntry;
}
