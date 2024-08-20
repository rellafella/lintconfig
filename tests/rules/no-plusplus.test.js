import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow arithmetic without increment operators',
    code: `let i = 0; i += 1;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow increment operators',
    code: `let i = 0; i++;`,
    expectedErrors: [
      {
        message: "Unary operator '++' is not allowed.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
