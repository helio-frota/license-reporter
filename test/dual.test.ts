import test from 'node:test';
import assert from 'node:assert';

import * as dual from '../src/utils/dual.js';

const license = 'MIT';
const dualLicense = '(MIT OR Apache-2.0)';

test('Checks if is dual license or not.', () => {
  assert.strictEqual(dual.isDual(dualLicense), true);
  assert.strictEqual(dual.isDual(license), false);
});

test('Extracts the first part of the dual license string.', () => {
  assert.strictEqual(dual.first(dualLicense), 'MIT');
});

test('Extracts the second part of the dual license string.', () => {
  assert.strictEqual(dual.last(dualLicense), 'Apache-2.0');
});
