export function getHeightString(decimeters) {
  //TODO: corregir la conversion
  const meters = decimeters / 10;
  const feet = Math.floor(decimeters / 3.048);
  const inches = Math.round((decimeters / 0.254) % 12);
  return `${feet}'${inches}'' (${meters.toFixed(2)} meters)`;
}

export function getWeightString(centigrams) {
  const kilos = centigrams / 10;
  const pounds = kilos * 2.204;
  return `${pounds.toFixed(2)} Pounds (${kilos.toFixed(1)} Kg)`;
}

export function upperCaseChar0(string) {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return "";
  }
}

export const formatId = (id) => {
  return `#${String(id).padStart(4, "0")}`;
};

//Definicion de funcion getPokeEntry
//Recibe un  Json y regresa un objeto formateado.
export function getPokemonEntry(pokeData, pokeSpecieData) {
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
    if (pokeSpecieData.flavor_text_entries.length === 0) return [];
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

  ///////////// Objeto que devuelve
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
    order: pokeSpecieData.order,
  };

  return pokeEntry;
}
