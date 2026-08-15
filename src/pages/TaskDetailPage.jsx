// src/pages/TaskDetailPage.jsx (Refactored from DetailPanel.tsx) (App.jsx Version 4)
import StatusBadge from '../components/StatusBadge'
import PriorityBadge from '../components/PriorityBadge'

// Normalized lowercase status values matching assignment spec
const ALL_STATUSES = ['todo', 'in-progress', 'done']

export default function TaskDetailPage({ record, onStatusChange }) {
  {/* Concern No. 3: Render explicit "Task not found" when record ID does not match */}
  if (!record) {
    return (
      <div className="flex-1 flex flex-col h-full bg-white">
        {/* Header */}
        <div className="px-7 py-5 border-b border-(--border)">
          <h1 className="text-lg font-semibold tracking-tight">
            Task Detail Page
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <div className="w-12 h-12 rounded-full border-2 border-zinc-200 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v6m0 4h.01" stroke="#d4d4d8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-sm font-medium text-zinc-500">Task not found</p>
          <p className="text-xs text-zinc-400 mt-1">
            The task you are looking for does not exist or was deleted.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="
      flex-1 
      flex 
      flex-col 
      h-full 
      overflow-y-auto
      bg-white"
    >
      {/* Header */}
      <div className="px-7 py-5 border-b border-(--border)">
        <h1 className="text-lg font-semibold tracking-tight">
          Task Manager
        </h1>
      </div>

      {/* Title block */}
      <div className="
        px-7 
        pt-6 
        pb-5 
        border-b 
        border-(--border)"
      >
        <span
          className="text-xs text-zinc-400 block mb-2"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          #{record.id}
        </span>
        <h2 className="
          text-xl 
          font-semibold 
          tracking-tight
          text-zinc-900 
          leading-snug"
        >
          {record.title}
        </h2>
      </div>

      {/* Meta */}
      <div className="
        px-7 
        py-5 
        grid 
        grid-cols-2 
        gap-x-6 
        gap-y-5 
        border-b 
        border-(--border)"
      >
        <div>
          <p className="
            text-xs
            text-zinc-400 
            uppercase 
            tracking-widest 
            mb-1.5 
            font-medium"
          >
            Status
          </p>
          <StatusBadge status={record.status} />
        </div>
        <div>
          <p className="
            text-xs
            text-zinc-400 
            uppercase 
            tracking-widest 
            mb-1.5 
            font-medium"
          >
            Priority
          </p>
          <PriorityBadge priority={record.priority} />
        </div>
      </div>

      {/* Description */}
      <div className="
        px-7 
        py-5 
        border-b 
        border-(--border) 
        flex-1"
      >
        <p className="
          text-xs
          text-zinc-400 
          uppercase 
          tracking-widest 
          mb-3 
          font-medium"
        >
          Description
        </p>
        <p className="text-sm text-zinc-700 leading-relaxed">
          {record.description || 'No description provided.'}
        </p>
      </div>

      {/* Status change */}
      <div className="px-7 py-5">
        <p className="
          text-xs
          text-zinc-400 
          uppercase 
          tracking-widest 
          mb-3 
          font-medium"
        >
          Change status
        </p>
        <div className="flex gap-2 flex-wrap">
          {ALL_STATUSES.map(s => (
            <button
              key={s}
              onClick={() => onStatusChange(record.id, s)}
              className={`
                px-3 
                py-1.5 
                text-xs 
                font-medium 
                rounded-sm 
                border 
                transition-colors 
                uppercase 
                ${
                  record.status === s
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'
                }`
            }
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {s.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}