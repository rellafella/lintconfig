import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow rejecting with an Error object',
    code: `Promise.reject(new Error('Something went wrong'));`,
    expectedErrors: [],
  },
  {
    name: 'should disallow rejecting with non-error values',
    code: `Promise.reject('Something went wrong');`,
    expectedErrors: [
      {
        message: 'Expected an Error object to be rejected.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
