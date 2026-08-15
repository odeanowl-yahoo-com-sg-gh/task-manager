// src/components/RowList.jsx (Refactored from RowList.tsx) (App.jsx Version 4)
import StatusBadge from './StatusBadge'
import PriorityBadge from './PriorityBadge'
import AddTaskForm from './AddTaskForm'

// Normalized lowercase status values matching assignment spec
const ALL_STATUSES = ['todo', 'in-progress', 'done']

// Module-scoped helper: Filter bar component
function FilterBar({ filter, onFilterChange, visibleCount, totalCount }) {
  return (
    // HIGHLIGHT: Updated to Tailwind v4 shorthand for CSS variable usage.
    <div className="px-5 pt-5 pb-4 border-b border-(--border)">
      <div className="flex items-baseline justify-between mb-4">
        <h1 className="text-lg font-semibold tracking-tight">
          Task List
        </h1>
        <span className="text-xs text-zinc-400" 
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {visibleCount} / {totalCount}
        </span>
      </div>

      {/* Status filter buttons */}
      <div className="flex gap-1.5 flex-wrap">
        <button
          onClick={() => onFilterChange('all')}
          className={`
            px-3 
            py-1.5 
            text-xs 
            font-medium 
            rounded-sm border 
            transition-colors 
            uppercase 
            ${
              filter === 'all'
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'
            }`
          }
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          All
        </button>
        {ALL_STATUSES.map(s => (
          <button
            key={s}
            onClick={() => onFilterChange(s)}
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
                filter === s
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
  )
}

// Module-scoped helper: Individual task card item
function TaskCard({ record, isSelected, onSelect, onDelete }) {
  return (
    <div
      onClick={() => onSelect(record.id)}
      className={`
        relative 
        px-5 
        py-4 
        border-b 
        border-(--border) 
        cursor-pointer 
        transition-colors 
        ${
          isSelected
            ? 'bg-indigo-50 border-l-2 border-l-indigo-500'
            : 'hover:bg-zinc-50 border-l-2 border-l-transparent'
        }`
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-zinc-900 truncate mb-2">
            {record.title}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status={record.status} />
            <PriorityBadge priority={record.priority} />
          </div>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onDelete(record.id) }}
          className="
            shrink-0 
            w-7 
            h-7 
            flex 
            items-center 
            justify-center 
            rounded-sm
            text-zinc-400
            hover:text-rose-500
            hover:bg-rose-50 transition-colors"
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
  )
}

// Main Component Export
export default function TaskList({
  records = [], 
  selectedId, 
  filter = 'all', 
  onFilterChange, 
  onSelect, 
  onDelete, 
  onAdd
}) {
  const visible = filter === 'all'
    ? records
    : records.filter(r => r.status === filter)

  return (
    <div className="flex flex-col h-full border-r border-(--border) bg-white">
      {/* Header */}
      <FilterBar 
        filter={filter} 
        onFilterChange={onFilterChange} 
        visibleCount={visible.length} 
        totalCount={records.length} 
      />

      {/* Add form */}
      {/* HIGHLIGHT: Prop name fixed to match AddTaskForm({ addTask }). */}
      <AddTaskForm addTask={onAdd} />

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {visible.length === 0 && (
          <div className="px-5 py-10 text-center text-sm text-zinc-400">
            No tasks match this filter.
          </div>
        )}
        {visible.map(r => (
          <TaskCard
            key={r.id}
            record={r}
            isSelected={selectedId === r.id}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}