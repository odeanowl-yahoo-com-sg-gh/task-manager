/**
 * @file TaskDetailPage.jsx
 * @description View component rendering detailed information for a selected task,
 * allowing status toggles and deletion with router navigation.
 */

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';
import StatusBadge from '../components/StatusBadge';
import PriorityBadge from '../components/PriorityBadge';
import { formatTaskDate } from '../utils/taskHelpers';

const STATUS_OPTIONS = [
  { key: 'todo', label: 'Todo' },
  { key: 'in-progress', label: 'In-Progress' },
  { key: 'done', label: 'Done' },
];

export default function TaskDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { findTask, changeStatus, deleteTask } = useTasks();

  // Find task matching the URL param ID
  const task = findTask(id);

  // Render Fallback State if Task is Not Found
  if (!task) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-white h-full border-r border-slate-200">
        <div className="w-12 h-12 mb-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-slate-800">Task Not Found</h2>
        <p className="text-sm text-slate-500 mt-1 max-w-xs">
          The task you are looking for does not exist or has been deleted.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 transition-colors uppercase tracking-wider"
        >
          Back to Tasks
        </button>
      </div>
    );
  }

  /**
   * Delete Handler
   */
  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-white h-full p-8 overflow-y-auto">
      {/* Top Details Section */}
      <div className="space-y-6 max-w-3xl">
        {/* Formatted ID & Action Controls Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-xs font-mono font-semibold text-slate-400">
            #{String(task.id).padStart(3, '0')}
          </span>
          <button
            onClick={handleDelete}
            className="px-3 py-1.5 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Delete Task
          </button>
        </div>

        {/* Task Title */}
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">
          {task.title}
        </h1>

        {/* Status & Priority Metadata Grid */}
        <div className="grid grid-cols-2 gap-6 pt-2 pb-4 border-b border-slate-100">
          <div>
            <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">
              Status
            </span>
            <StatusBadge status={task.status} />
          </div>

          <div>
            <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">
              Priority
            </span>
            <PriorityBadge priority={task.priority} />
          </div>
        </div>

        {/* Description Section */}
        <div>
          <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">
            Description
          </span>
          <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">
            {task.description || 'No description provided for this task.'}
          </p>
        </div>

        {/* Date Metadata (if formatTaskDate helper available) */}
        {task.createdAt && (
          <div className="pt-4 border-t border-slate-100">
            <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1">
              Created Date
            </span>
            <span className="text-xs font-mono text-slate-500">
              {formatTaskDate ? formatTaskDate(task.createdAt) : task.createdAt}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Change Status Control Bar */}
      <div className="pt-6 mt-8 border-t border-slate-200">
        <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-3">
          Change Status
        </span>
        <div className="flex gap-2">
          {STATUS_OPTIONS.map((option) => {
            const isActive = task.status.toLowerCase() === option.key;
            return (
              <button
                key={option.key}
                onClick={() => changeStatus(task.id, option.key)}
                className={`
                  px-4 py-1.5 text-xs font-medium rounded border transition-colors font-mono
                  ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                  }
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}