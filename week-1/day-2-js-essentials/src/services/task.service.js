import { setTimeout as wait } from 'node:timers/promises';
import { tasks } from '../data/tasks.js';
import NotFoundError from '../errors/not-found-error.js';

// fake a slow database call
export async function getTaskById(id) {
  await wait(200);

  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new NotFoundError(`Task ${id} not found`);
  }

  return task;
}
