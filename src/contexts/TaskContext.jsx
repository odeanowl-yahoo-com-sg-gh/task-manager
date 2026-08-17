/**
 * @file TaskContext.jsx
 * @description React Context and Provider managing central task state,
 * local storage synchronization, and providing custom hook access.
 */

import React, { createContext, useContext, useReducer, useEffect } from 'react';
// Import reducer and action constants (Named Exports)
import { taskReducer, initialTaskState, ACTION_TYPES } from '../reducers/taskReducer';
// Import helpers and seed data (Named Exports)
import { INITIAL_TASKS, filterTasks, getTaskById } from '../utils/taskHelpers';

// Storage key used for persisting task data in localStorage
const LOCAL_STORAGE_KEY = 'task_manager_tasks';

// 1. Create the React Context
const TaskContext = createContext(null);

/**
 * Lazy initializer function for useReducer.
 * Checks localStorage for saved tasks first; falls back to seed data if empty.
 *
 * @return {Object} Initial state for useReducer.
 */
const initializer = () => {
  try {
    // Attempt to retrieve stored JSON string from localStorage
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    // Parse stored tasks if available, otherwise fallback to seed INITIAL_TASKS
    const tasks = storedTasks ? JSON.parse(storedTasks) : INITIAL_TASKS;
    return {
      ...initialTaskState,
      tasks,
    };
  } catch (error) {
    // Log warning and fallback gracefully to seed data if localStorage access fails
    console.warn('Failed to parse tasks from localStorage, loading defaults:', error);
    return {
      ...initialTaskState,
      tasks: INITIAL_TASKS,
    };
  }
};

/**
 * TaskProvider Component
 * Wraps application components to grant access to task state and dispatch helper methods.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child elements to wrap with context.
 */
export function TaskProvider({ children }) {
  // Initialize useReducer using our taskReducer and lazy initializer function
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, initializer);

  // Sync state.tasks to localStorage whenever the tasks array updates
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.tasks));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [state.tasks]);

  /**
   * Helper Dispatch Actions
   * Expose clean function interfaces so components don't need to manually structure action objects.
   */

  // Adds a new task object
  const addTask = (taskData) => {
    dispatch({ type: ACTION_TYPES.ADD_TASK, payload: taskData });
  };

  // Deletes a task by ID
  const deleteTask = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE_TASK, payload: id });
  };

  // Updates the active status filter criteria
  const setFilter = (filterKey) => {
    dispatch({ type: ACTION_TYPES.SET_FILTER, payload: filterKey });
  };

  // Updates status for a single task
  const changeStatus = (id, newStatus) => {
    dispatch({ type: ACTION_TYPES.CHANGE_STATUS, payload: { id, status: newStatus } });
  };

  // Computed value: current list of tasks filtered by the active filter string
  const filteredTasks = filterTasks(state.tasks, state.filter);

  // Helper function to find a task by ID within state
  const findTask = (id) => getTaskById(state.tasks, id);

  // Context value bundle passed down to consuming components
  const value = {
    tasks: state.tasks,
    filteredTasks,
    filter: state.filter,
    addTask,
    deleteTask,
    setFilter,
    changeStatus,
    findTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

/**
 * Custom Hook: useTasks
 * Provides child components easy access to task state and actions.
 * Ensures the hook is used inside a TaskProvider.
 *
 * @return {Object} Context value containing state, filtered tasks, and helper methods.
 */
export function useTasks() {
  const context = useContext(TaskContext);
  // Throw descriptive error if custom hook is called outside a TaskProvider wrapper
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}