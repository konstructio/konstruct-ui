import { chunk } from 'lodash';

import { POKEMON_JSON } from '../models/pokemon.db';

import { PokemonQueryParams, PokemonResponse } from './pokemon.types';

export const getPokemons = async ({
  page = 1,
  pageSize,
  termOfSearch,
  type,
}: PokemonQueryParams): Promise<PokemonResponse> => {
  let filteredPokemons = POKEMON_JSON;

  if (termOfSearch) {
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      pokemon.name
        .toLocaleLowerCase()
        .includes(termOfSearch.toLocaleLowerCase()),
    );
  }

  if (type && type.length > 0) {
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      type.some((t) => pokemon.type.includes(t)),
    );
  }

  const chunkedPokemons = chunk(filteredPokemons, pageSize).at(page - 1) || [];

  return {
    totalItemsCount: filteredPokemons.length,
    results: chunkedPokemons,
  };
};
