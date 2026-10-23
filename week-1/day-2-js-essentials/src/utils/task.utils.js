export function filterByStatus(tasks, status) {
  return tasks.filter((task) => task.status === status);
}

export function sortByPriority(tasks) {
  // sort() mutates the array, so sort a copy
  return [...tasks].sort((a, b) => b.priority - a.priority);
}

export function getTotalEstimate(tasks) {
  return tasks.reduce((total, task) => total + task.estimateHours, 0);
}

export function countByStatus(tasks) {
  return tasks.reduce((counts, { status }) => {
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});
}

export function getOverdueTasks(tasks, today = new Date()) {
  return tasks.filter((task) => task.status !== 'done' && new Date(task.dueDate) < today);
}

export function getUniqueTags(tasks) {
  return [...new Set(tasks.flatMap((task) => task.tags))];
}

export function addTags(task, ...newTags) {
  return { ...task, tags: [...new Set([...task.tags, ...newTags])] };
}
