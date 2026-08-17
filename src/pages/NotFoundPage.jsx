/**
 * @file NotFoundPage.jsx
 * @description Fallback 404 page for unmatched application routes.
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-slate-50 px-4 text-center">
      <div className="w-16 h-16 mb-4 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-500">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
        404 - Page Not Found
      </h1>

      <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
        The route you are trying to access does not exist or has been moved.
      </p>

      <Link
        to="/tasks"
        className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded hover:bg-slate-800 transition-colors uppercase tracking-wider font-mono shadow-sm"
      >
        Return to Task Manager
      </Link>
    </div>
  );
}