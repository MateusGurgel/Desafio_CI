import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from '../modules/sum.mjs';

test('sum test', (t) => {
    assert.strictEqual(sum(1, 2), 3);
  });
