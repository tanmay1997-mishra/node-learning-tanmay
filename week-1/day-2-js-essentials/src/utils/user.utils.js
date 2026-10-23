import ValidationError from '../errors/validation-error.js';
import NotFoundError from '../errors/not-found-error.js';

export function findUserById(users, id) {
  if (!Array.isArray(users)) {
    throw new ValidationError('users', 'Users must be an array');
  }

  if (id === undefined || id === null) {
    throw new ValidationError('id', 'User id is required');
  }

  const matchedUser = users.find((user) => user.id === id);
  if (!matchedUser) {
    throw new NotFoundError(`No user found with id ${id}`);
  }

  return matchedUser;
}
