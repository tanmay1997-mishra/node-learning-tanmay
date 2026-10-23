import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateSum } from '../src/utils/price.utils.js';
import { removeDuplicates } from '../src/utils/array.utils.js';

test('calculateSum adds any number of prices', () => {
  assert.equal(calculateSum(10, 20, 30), 60);
  assert.equal(calculateSum(), 0);
});

test('removeDuplicates keeps the first occurrence order', () => {
  assert.deepEqual(removeDuplicates([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);
});
