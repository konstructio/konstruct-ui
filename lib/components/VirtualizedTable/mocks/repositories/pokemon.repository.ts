import { chunk } from 'lodash';

import { POKEMON_JSON } from '../models/pokemon.db';

import { PokemonResponse } from './pokemon.types';

export const getPokemons = async ({
  page,
  pageSize,
  // searchFilter,
  ability,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any): Promise<PokemonResponse> => {
  const chunkedPokemons = chunk(POKEMON_JSON, pageSize).at(page - 1) || [];

  console.log('ENTRE', ability);

  return {
    totalItemsCount: POKEMON_JSON.length,
    results: chunkedPokemons,
  };
};
