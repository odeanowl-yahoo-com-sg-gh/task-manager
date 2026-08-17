/**
 * @file Header.jsx
 * @description Header navigation component displaying brand link, version tag, and routes.
 */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Header Component
 *
 * @param {Object} props
 * @param {string} [props.codeVersion="v1.0.0"] - Version identifier string displayed in the navbar.
 */
export default function Header({ codeVersion = 'v1.0.0' }) {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand & Version Badge */}
        <div className="flex items-center space-x-3">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Task Manager
          </Link>
          <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
            {codeVersion}
          </span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`
            }
          >
            All Tasks
          </NavLink>
        </nav>
      </div>
    </header>
  );
}