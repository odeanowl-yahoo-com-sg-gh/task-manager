// src/components/AddTaskForm.jsx (Refactored from AddRowForm.tsx)
import { useState } from 'react'

export default function AddTaskForm({ addTask }) {
  // State normalized to lowercase matching Option A data specification
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [status, setStatus] = useState('todo')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    // Highlighted: Calling the `addTask` handler function passed via props or context
    addTask({
      title: title.trim(),
      assignee: '',
      priority,
      status,
      description: description.trim(),
      tags: [],
    })

    // Reset form fields
    setTitle('')
    setPriority('medium')
    setStatus('todo')
    setDescription('')
  }

  const inputCls = `w-full border border-[var(--border)] rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--ring)] bg-white placeholder:text-zinc-400`
  const labelCls = `block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-widest`

  return (
    <form onSubmit={handleSubmit} className="px-5 py-4 border-b border-(--border) bg-zinc-50 space-y-3">
      <div>
        <label className={labelCls}>Title *</label>
        <input 
          className={inputCls} 
          value={title} 
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title" 
          required 
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Status</label>
          <select className={inputCls} value={status} onChange={e => setStatus(e.target.value)}>
            <option value="todo">Todo</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Priority</label>
          <select className={inputCls} value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls}>Description</label>
        <textarea 
          className={`${inputCls} resize-none`} 
          rows={2} 
          value={description}
          onChange={e => setDescription(e.target.value)} 
          placeholder="Optional notes..." 
        />
      </div>

      {/* Submit Trigger Button invoking handleSubmit -> addTask */}
      <button 
        type="submit"
        // HIGHLIGHT: Switched from undefined CSS vars to fixed Tailwind colors so label stays visible.
        className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-1 transition-colors"
      >
        Add task
      </button>
    </form>
  )
}