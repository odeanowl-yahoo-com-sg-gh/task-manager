// src/components/StatusBadge.jsx

const config = {
  'todo':        { bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-400',   label: 'To Do' },
  'in-progress': { bg: 'bg-indigo-50',  text: 'text-indigo-700',  dot: 'bg-indigo-500',  label: 'In Progress' },
  'done':        { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500', label: 'Done' },
}

export default function StatusBadge({ status }) {
  const normalizedStatus = status ? status.toLowerCase() : 'todo'
  const c = config[normalizedStatus] || config['todo']

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-xs font-medium tracking-wide uppercase ${c.bg} ${c.text}`}
      style={{ fontFamily: "'DM Mono', monospace", letterSpacing: '0.06em' }}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
}