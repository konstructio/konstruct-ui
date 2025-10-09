export interface Pokemon {
  id: number;
  name: string;
  type: string;
  height: number;
  weight: number;
  ability: string;
  sprites: Sprites;
}

export interface Sprites {
  front_default: string;
  back_default: string;
}

export type PokemonResponse = {
  totalItemsCount: number;
  results: Pokemon[];
};
