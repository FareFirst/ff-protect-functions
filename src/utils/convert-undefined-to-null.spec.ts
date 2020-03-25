import convertUndefinedToNull from './convert-undefined-to-null';

describe('convertUndefinedToNull', () => {
  it('should recursively convert undefined values to null ', () => {
    const obj = {
      a: undefined,
      b: { x: undefined, y: 1, z: { p: undefined, q: [undefined, 1, 3] } },
      c: 0,
      d: false,
      e: '',
      g: 112,
      h: 'adljnf',
      i: [3, 0, null, undefined, 45],
    };

    const newObj = convertUndefinedToNull(obj);

    expect(newObj).toEqual({
      ...obj,
      a: null,
      b: { x: null, y: 1, z: { p: null, q: [null, 1, 3] } },
      i: [3, 0, null, null, 45],
    });

    expect(convertUndefinedToNull(undefined)).toEqual(null);
    expect(convertUndefinedToNull(null)).toEqual(null);
    expect(convertUndefinedToNull('')).toEqual('');
    expect(convertUndefinedToNull([3, undefined])).toEqual([3, null]);
  });
});
