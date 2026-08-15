// src/components/PriorityBadge.jsx (Refactored from PriorityBadge.tsx) (App.jsx Version 4)

const config = {
  'high':   {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    label: 'High'
  },
  'medium': {
    bg: 'bg-amber-50',  
    text: 'text-amber-700',  
    label: 'Medium' 
  },
  'low': { 
    bg: 'bg-slate-100', 
    text: 'text-slate-600', 
    label: 'Low' 
  },
}

export default function PriorityBadge({ priority }) {
  const normalizedPriority = priority
                              ? priority.toLowerCase()
                              : 'low'
  const c = config[normalizedPriority] || config['low']

  return (
    <span className={`
      inline-flex
      items-center
      px-2 
      py-0.5
      rounded-sm text-xs
      font-medium
      uppercase
      ${c.bg}
      ${c.text}
    `}>
      {c.label}
    </span>
  )
}