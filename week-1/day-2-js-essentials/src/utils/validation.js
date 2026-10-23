import ValidationError from '../errors/validation-error.js';

const allowedStatuses = ['todo', 'in_progress', 'done'];

export function validateTask(task) {
  if (!task.title?.trim()) {
    throw new ValidationError('title', 'Title is required');
  }

  if (!allowedStatuses.includes(task.status)) {
    throw new ValidationError('status', `Status must be one of: ${allowedStatuses.join(', ')}`);
  }

  if (!Number.isInteger(task.priority) || task.priority < 1 || task.priority > 5) {
    throw new ValidationError('priority', 'Priority must be a number between 1 and 5');
  }

  return true;
}
