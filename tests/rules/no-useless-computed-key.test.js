import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow useful computed keys',
    code: `const obj = { [foo]: 'bar' };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow useless computed keys',
    code: `const obj = { ['foo']: 'bar' };`,
    expectedErrors: [
      {
        message: "Unnecessarily computed property ['foo'] found.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
