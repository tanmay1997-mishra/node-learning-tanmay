import { tasks } from './data/tasks.js';
import { users } from './data/users.js';
import {
  addTags,
  countByStatus,
  filterByStatus,
  getOverdueTasks,
  getTotalEstimate,
  getUniqueTags,
  sortByPriority,
} from './utils/task.utils.js';
import { formatTask } from './utils/format.js';
import { validateTask } from './utils/validation.js';
import { calculateSum } from './utils/price.utils.js';
import { removeDuplicates } from './utils/array.utils.js';
import { findUserById } from './utils/user.utils.js';
import ValidationError from './errors/validation-error.js';
import NotFoundError from './errors/not-found-error.js';
import { getTaskById } from './services/task.service.js';

console.log('--- Tasks by priority ---');
sortByPriority(tasks).forEach((task) => console.log(formatTask(task)));

console.log('\n--- Summary ---');
console.log('Count by status:', countByStatus(tasks));
console.log('Total estimate (hrs):', getTotalEstimate(tasks));
console.log('Todo estimate (hrs):', getTotalEstimate(filterByStatus(tasks, 'todo')));
console.log(
  'Overdue:',
  getOverdueTasks(tasks).map((task) => task.title),
);
console.log('All tags:', getUniqueTags(tasks));

console.log('\n--- addTags keeps the original task unchanged ---');
const [firstTask] = tasks;
const updatedTask = addTags(firstTask, 'urgent', 'auth');
console.log('before:', firstTask.tags);
console.log('after:', updatedTask.tags);

console.log('\n--- Prices ---');
const cartPrices = [20, 10, 40, 21, 12, 90];
console.log('Sum of arguments:', calculateSum(1, 9, 38, 39));
console.log('Sum of cart:', calculateSum(...cartPrices));

console.log('\n--- Remove duplicates ---');
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log('\n--- Validation ---');
const newTask = { title: '  ', status: 'todo', priority: 3 };
try {
  validateTask(newTask);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Invalid ${error.field}: ${error.message}`);
  } else {
    throw error;
  }
}

console.log('\n--- Find user ---');
for (const id of [1, 99, null]) {
  try {
    const user = findUserById(users, id);
    console.log('Found:', user.name);
  } catch (error) {
    if (error instanceof ValidationError || error instanceof NotFoundError) {
      console.log(`${error.name}: ${error.message}`);
    } else {
      throw error;
    }
  }
}

console.log('\n--- Async errors ---');
for (const id of [2, 99]) {
  try {
    const task = await getTaskById(id);
    console.log('Found:', formatTask(task));
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  } finally {
    console.log(`Lookup for task ${id} finished`);
  }
}
