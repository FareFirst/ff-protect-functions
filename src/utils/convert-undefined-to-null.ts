// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertUndefinedToNull = (input: any): unknown => {
  if (input === null || input === undefined) {
    return null;
  }

  switch (input.constructor.name) {
    case 'Object': {
      const newObj = { ...input };
      Object.keys(newObj).forEach((k) => {
        newObj[k] = convertUndefinedToNull(newObj[k]);
      });
      return newObj;
    }
    case 'Array':
      return input.map(convertUndefinedToNull);
    default:
      return input;
  }
};

export default convertUndefinedToNull;
