/**
 * @file TaskListPage.jsx
 * @description Master split-view page layout combining the TaskList sidebar
 * and the active TaskDetailPage view.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskDetailPage from './TaskDetailPage';

export default function TaskListPage() {
  const { id } = useParams();

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full overflow-hidden bg-slate-50 border-t border-slate-200">
      {/* Left Column: Fixed-width Task List Sidebar */}
      <TaskList />

      {/* Right Column: Dynamic Detail View or Empty Selection State */}
      <main className="flex-1 h-full overflow-y-auto bg-white">
        {id ? (
          <TaskDetailPage />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 text-slate-400">
            <div className="w-12 h-12 mb-3 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-600">No Task Selected</p>
            <p className="text-xs text-slate-400 mt-1">Select a task from the list on the left to view details.</p>
          </div>
        )}
      </main>
    </div>
  );
}