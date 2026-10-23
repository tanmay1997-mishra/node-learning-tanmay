import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findUserById } from '../src/utils/user.utils.js';
import ValidationError from '../src/errors/validation-error.js';
import NotFoundError from '../src/errors/not-found-error.js';

const users = [
  { id: 1, name: 'tanmay' },
  { id: 2, name: '1' },
];

test('findUserById returns the matching user', () => {
  assert.deepEqual(findUserById(users, 1), { id: 1, name: 'tanmay' });
});

test('findUserById matches only by id, not by name', () => {
  assert.throws(() => findUserById(users, '1'), NotFoundError);
});

test('findUserById throws NotFoundError for an unknown id', () => {
  assert.throws(() => findUserById(users, 99), NotFoundError);
});

test('findUserById throws ValidationError for bad input', () => {
  assert.throws(() => findUserById('not an array', 1), ValidationError);
  assert.throws(() => findUserById(users, null), ValidationError);
});
