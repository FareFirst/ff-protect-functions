// eslint-disable-next-line import/no-extraneous-dependencies
import firebaseFunctionTest from 'firebase-functions-test';
import {
  getStage,
} from './index';

const VALID_KEY = 'valid_key';

const ffTest = firebaseFunctionTest();

beforeAll(() => {
  ffTest.mockConfig({
    app: {
      stage: VALID_KEY,
    },
  });
});

afterAll(() => {
  ffTest.cleanup();
});

describe('getStage', () => {
  it('should return stage name', () => {
    expect(getStage()).toEqual(VALID_KEY);
  });
});
