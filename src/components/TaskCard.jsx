import React from 'react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

export default function TaskCard({ record, isSelected, onSelect, onDelete }) {
  return (
    <div
      onClick={() => onSelect(record.id)}
      className={`
        relative px-5 py-4 border-b border-slate-200 cursor-pointer transition-colors
        ${
          isSelected
            ? 'bg-indigo-50/60 border-l-2 border-l-indigo-600'
            : 'hover:bg-slate-50 border-l-2 border-l-transparent'
        }
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-900 truncate mb-2">
            {record.title}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status={record.status} />
            <PriorityBadge priority={record.priority} />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(record.id);
          }}
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-sm text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          title="Delete task"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1l10 10M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}