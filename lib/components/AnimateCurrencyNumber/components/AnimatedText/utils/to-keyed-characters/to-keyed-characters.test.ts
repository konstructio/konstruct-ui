import { toKeyedCharacters } from './to-keyed-characters';

const keysOf = (text: string) => {
  return toKeyedCharacters(text).map(({ key }) => {
    return key;
  });
};

describe('toKeyedCharacters', () => {
  it('should keep the keys of the currency symbol and the existing digits when a digit is added', () => {
    const before = keysOf('$9.99');
    const after = keysOf('$19.99');

    expect(
      after.filter((key) => {
        return !before.includes(key);
      }),
    ).toEqual(['from-end-5']);
    expect(after[1]).toBe('from-end-5');
  });

  it('should keep the keys of a trailing currency symbol when a digit is added', () => {
    const before = keysOf('9,99 €');
    const after = keysOf('19,99 €');

    expect(after.slice(1)).toEqual(before);
  });

  it('should only add the new digit and separator when crossing a thousand', () => {
    const before = keysOf('$999');
    const after = keysOf('$1,000');

    expect(
      after.filter((key) => {
        return !before.includes(key);
      }),
    ).toEqual(['from-end-5', 'from-end-4']);
  });

  it('should keep a multi-character prefix stable', () => {
    expect(keysOf('CHF 5')).toEqual([
      'prefix-0',
      'prefix-1',
      'prefix-2',
      'prefix-3',
      'from-end-1',
    ]);
  });

  it('should key every character of a text without digits as prefix', () => {
    expect(keysOf('–')).toEqual(['prefix-0']);
  });

  it('should return the characters in order', () => {
    expect(
      toKeyedCharacters('$1.5').map(({ character }) => {
        return character;
      }),
    ).toEqual(['$', '1', '.', '5']);
  });

  it('should return an empty list for an empty text', () => {
    expect(toKeyedCharacters('')).toEqual([]);
  });
});
