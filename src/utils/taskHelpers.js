/**
 * @file taskHelpers.js
 * @description Utility and helper functions for task filtering, ID generation,
 * formatting, and state initialization.
 */

// Import your existing seed data directly from src/data
import { initialTasks } from '../data/initialTasks';

/**
 * Re-export seed data as the default initial tasks fallback
 */
export const INITIAL_TASKS = initialTasks;

/**
 * Generates the next numeric ID for a new task based on existing tasks.
 * Ensures unique IDs even if tasks have been deleted.
 *
 * @param {Array<Object>} tasks - The current list of task objects.
 * @return {number} The next unique task ID.
 */
export const generateNextId = (tasks = []) => {
  // If tasks array is null/undefined or empty, start ID counting at 1
  if (!tasks || tasks.length === 0) return 1;
  
  // Reduce over the tasks array to find the highest numeric ID present
  const maxId = tasks.reduce((max, task) => {
    // Convert current task ID to a number to guard against string/number mismatches
    const numericId = Number(task.id);
    // If it's a valid number and greater than current max, update max; otherwise keep max
    return !isNaN(numericId) && numericId > max ? numericId : max;
  }, 0);
  
  // Return the highest found ID incremented by 1
  return maxId + 1;
};

/**
 * Filters an array of tasks based on a filter criteria string.
 *
 * @param {Array<Object>} tasks - Array of task objects.
 * @param {string} filter - Filter key: 'all', 'to-do', 'in-progress', or 'done'.
 * @return {Array<Object>} The filtered list of tasks.
 */
export const filterTasks = (tasks = [], filter = 'all') => {
  // Return an empty array if tasks is undefined or null
  if (!tasks) return [];
  
  // Normalize the incoming filter string to lowercase for safe matching
  const normalizedFilter = filter.toLowerCase();
  
  // If filter is 'all', return the complete unfiltered task array
  if (normalizedFilter === 'all') return tasks;

  // Otherwise, filter tasks whose normalized status matches the normalized filter string
  return tasks.filter((t) => {
    // Guard against tasks missing a status property
    if (!t.status) return false;
    // Normalize task status: lowercase it and replace any spaces with hyphens (e.g., "In Progress" -> "in-progress")
    // const taskStatus = t.status.toLowerCase().replace(/\s+/g, '-');
    // Compare normalized task status with the normalized filter criteria
    return taskStatus === normalizedFilter;
  });
};

/**
 * Finds a single task by its numeric or string ID.
 *
 * @param {Array<Object>} tasks - List of task objects.
 * @param {number|string} id - Target task ID.
 * @return {Object|undefined} The matching task object or undefined.
 */
export const getTaskById = (tasks = [], id) => {
  // Return undefined immediately if id is null or undefined (allowing 0 as a valid ID)
  if (!id && id !== 0) return undefined;
  
  // Find and return the first task object whose ID matches the target ID (using string comparison for safety)
  return tasks.find((task) => String(task.id) === String(id));
};

/**
 * Formats an ISO date string or Date object into a readable date string.
 *
 * @param {string|Date} dateString - Target date representation.
 * @return {string} Formatted string (e.g., "Aug 15, 2026") or "N/A".
 */
export const formatTaskDate = (dateString) => {
  // Return 'N/A' if the date string is empty or falsy
  if (!dateString) return 'N/A';
  
  // Instantiate a new Date object from the provided date string
  const date = new Date(dateString);
  
  // Check if the resulting date is invalid; return 'N/A' if parsing failed
  if (isNaN(date.getTime())) return 'N/A';
  
  // Format the valid date into a localized string format (e.g., Month Day, Year)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};