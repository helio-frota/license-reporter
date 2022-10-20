import test from 'node:test';
import assert from 'node:assert';

import * as project from '../../src/utils/project.js';

// eslint-disable-next-line no-undef
const cwd = process.cwd();

test('Checks if project has metadata.', async () => {
  const {name, version, license, dependencies} = await project.readPackageJson(cwd);
  assert.ok(name !== undefined);
  assert.ok(version !== undefined);
  assert.ok(license !== undefined);
  assert.ok(dependencies !== undefined);
});
