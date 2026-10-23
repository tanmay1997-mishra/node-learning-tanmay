export function formatTask({ id, title, status, priority, assignee }) {
  return `#${id} [${status}] ${title} (P${priority}, ${assignee ?? 'unassigned'})`;
}
