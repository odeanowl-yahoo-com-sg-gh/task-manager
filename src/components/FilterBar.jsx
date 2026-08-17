/**
 * @file FilterBar.jsx
 * @description Renders filter action buttons (All, Todo, In-Progress, Done)
 * and updates global filter state in TaskContext.
 */


import React from 'react';
import { useTasks } from '../contexts/TaskContext';


/**
 * Available filter options matching application data keys.
 */
const FILTER_OPTIONS = [
  { key: 'all', label: 'All' },
  { key: 'todo', label: 'Todo' },
  { key: 'in-progress', label: 'In-Progress' },
  { key: 'done', label: 'Done' },
];


export default function FilterBar() {
  const { filter, setFilter } = useTasks();


  return (
    <div className="flex items-center space-x-2 my-4">
      {FILTER_OPTIONS.map((option) => {
        // Check if current button matches active filter
        const isActive = filter.toLowerCase() === option.key;


        return (
          <button
            key={option.key}
            onClick={() => setFilter(option.key)}
            className={`
              px-3 py-1 text-xs font-medium rounded border transition-colors
              ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100 hover:text-slate-900'
              }
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
