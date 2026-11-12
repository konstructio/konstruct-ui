import { KeyedCharacter } from './to-keyed-characters.types';

const DIGIT = /\d/;

export const toKeyedCharacters = (text: string): KeyedCharacter[] => {
  const characters = [...text];
  const firstDigitIndex = characters.findIndex((character) => {
    return DIGIT.test(character);
  });
  const prefixLength =
    firstDigitIndex === -1 ? characters.length : firstDigitIndex;

  return characters.map((character, index) => {
    const key =
      index < prefixLength
        ? `prefix-${index}`
        : `from-end-${characters.length - index}`;

    return { key, character };
  });
};
