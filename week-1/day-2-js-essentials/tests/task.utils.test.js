import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  addTags,
  countByStatus,
  getOverdueTasks,
  sortByPriority,
} from '../src/utils/task.utils.js';
import { validateTask } from '../src/utils/validation.js';
import ValidationError from '../src/errors/validation-error.js';

const sampleTasks = [
  { id: 1, status: 'todo', priority: 2, tags: ['api'], dueDate: '2026-01-01' },
  { id: 2, status: 'done', priority: 5, tags: ['ui'], dueDate: '2026-01-01' },
  { id: 3, status: 'todo', priority: 4, tags: ['db'], dueDate: '2099-01-01' },
];

test('countByStatus groups tasks by status', () => {
  assert.deepEqual(countByStatus(sampleTasks), { todo: 2, done: 1 });
});

test('sortByPriority does not mutate the original array', () => {
  const sorted = sortByPriority(sampleTasks);
  assert.deepEqual(
    sorted.map((task) => task.id),
    [2, 3, 1],
  );
  assert.equal(sampleTasks[0].id, 1);
});

test('getOverdueTasks skips done and future tasks', () => {
  const overdue = getOverdueTasks(sampleTasks, new Date('2026-06-01'));
  assert.deepEqual(
    overdue.map((task) => task.id),
    [1],
  );
});

test('addTags returns a new task without duplicate tags', () => {
  const task = sampleTasks[0];
  const updated = addTags(task, 'api', 'urgent');
  assert.deepEqual(updated.tags, ['api', 'urgent']);
  assert.deepEqual(task.tags, ['api']);
});

test('validateTask throws ValidationError for an empty title', () => {
  assert.throws(() => validateTask({ title: '', status: 'todo', priority: 1 }), ValidationError);
});
