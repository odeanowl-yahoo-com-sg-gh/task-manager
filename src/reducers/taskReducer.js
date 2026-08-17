/**
 * @file taskReducer.js
 * @description Pure reducer function managing state transitions for the Task Manager.
 */

// Import ID generation utility to assign unique IDs on task creation
import { generateNextId } from '../utils/taskHelpers';

/**
 * Initial state object shape for task management.
 * Initialized with empty tasks array; populated via TaskContext initializer or SET_INITIAL_TASKS action.
 */
export const initialTaskState = {
  tasks: [],
  filter: 'all',
};

/**
 * Action Type Constants
 * Standardized string constants to prevent typos across action dispatches.
 */
export const ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_FILTER: 'SET_FILTER',
  CHANGE_STATUS: 'CHANGE_STATUS',
  SET_INITIAL_TASKS: 'SET_INITIAL_TASKS',
};

/**
 * Reducer function for managing task actions.
 *
 * @param {Object} state - Current application state { tasks, filter }.
 * @param {Object} action - Action object containing `type` and `payload`.
 * @return {Object} Next application state.
 */
export function taskReducer(state, action) {
  // Evaluate the type property of the incoming action object
  switch (action.type) {
    
    // Replaces current task list (e.g., loading initial data or localStorage hydration).
    case ACTION_TYPES.SET_INITIAL_TASKS:
      return {
        // Spread existing state properties to maintain immutability
        ...state,
        // Replace tasks array with payload data, falling back to an empty array if payload is null/undefined
        tasks: action.payload || [],
      };

    // Adds a new task to state. Automatically assigns a unique ID and creation date if missing.
    case ACTION_TYPES.ADD_TASK: {
      // Construct a new task object with auto-generated ID, current date timestamp, and payload properties
      const newTask = {
        id: generateNextId(state.tasks),
        createdAt: new Date().toISOString().split('T')[0],
        ...action.payload,
      };
      return {
        // Spread existing state
        ...state,
        // Prepend the new task to the beginning of the tasks array for immediate visibility
        tasks: [newTask, ...state.tasks],
      };
    }

    // Removes a task from state by ID.
    case ACTION_TYPES.DELETE_TASK:
      return {
        // Spread existing state
        ...state,
        // Filter out the task whose ID matches the action payload (using string conversion for safety)
        tasks: state.tasks.filter((task) => String(task.id) !== String(action.payload)),
      };

    // Updates the active status filter ('all' | 'to-do' | 'in-progress' | 'done').
    case ACTION_TYPES.SET_FILTER:
      return {
        // Spread existing state
        ...state,
        // Update the filter property with the new filter string from payload
        filter: action.payload,
      };

    // Updates the status of a specific task.
    case ACTION_TYPES.CHANGE_STATUS:
      return {
        // Spread existing state
        ...state,
        // Map over tasks array to find the target task and update its status property
        tasks: state.tasks.map((task) =>
          // Check if current task ID matches the payload ID
          String(task.id) === String(action.payload.id)
            ? { ...task, status: action.payload.status } // Return updated task object
            : task // Return unmodified task object otherwise
        ),
      };

    // Fallback case: return current state unchanged if action type is unrecognized
    default:
      return state;
  }
}