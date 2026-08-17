/**
 * @file App.jsx
 * @description Main application entry point setting up global context providers,
 * header shell, and React Router page navigation routes.
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { TaskProvider } from './contexts/TaskContext';
import Header from './components/Header';
import TaskListPage from './pages/TaskListPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const currentVersion = 'Ver. 5';

  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
          {/* Header Shell */}
          <Header codeVersion={currentVersion} />

          {/* Page Route Views */}
          <main className="flex-1 w-full mx-auto">
            <Routes>
              {/* Redirect root '/' to '/tasks' per Blueprint spec */}
              <Route path="/" element={<Navigate to="/tasks" replace />} />

              {/* Task list and active task detail routes */}
              <Route path="/tasks" element={<TaskListPage />} />
              <Route path="/tasks/:id" element={<TaskListPage />} />

              {/* 404 Fallback Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200 py-3 text-center text-xs text-slate-400 font-mono bg-white">
            Task Manager {currentVersion} • Built with React, Context API &amp; React Router
          </footer>
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
}