// src/App.jsx (Version 4)
import { useState, useEffect } from "react"
import { initialTasks } from "./data/initialTasks"
import TaskList from "./components/TaskList"
import TaskDetailPage from "./pages/TaskDetailPage"
import Header from "./components/Header"

let nextId = 100

export default function App() {
  const thisVersion = "Version 4"

  // =========================================================================
  // HIGHLIGHT: Reload initialTasks on Browser Refresh / F5
  // =========================================================================
  useEffect(() => {
    // 1. Check if the page entry type was a reload
    const navEntries = performance.getEntriesByType('navigation')
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload'

    if (isReload) {
      // Re-initialize localStorage back to seed initialTasks on refresh
      localStorage.setItem("tasks", JSON.stringify(initialTasks))
    }

    // 2. Intercept F5 / Ctrl+R / Cmd+R keys to reset data before page reloads
    const handleKeyDown = (e) => {
      if (
        e.key === "F5" || 
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "r")
      ) {
        localStorage.setItem("tasks", JSON.stringify(initialTasks))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])
  // =========================================================================

  // Local state initialized with localStorage fallback or initialTasks seed data
  const [records, setRecords] = useState(() => {
    // HIGHLIGHT: If page was reloaded, read the freshly reset seed data
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : initialTasks
  })
  
  const [selectedId, setSelectedId] = useState(null)
  const [filter, setFilter] = useState("all")

  // Sync state to localStorage during standard active user interactions
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(records))
  }, [records])

  // Selected record calculation
  const selected = records.find((r) => String(r.id) === String(selectedId)) ?? null

  // Handler: Add Task
  const handleAdd = (data) => {
    const id = ++nextId
    const created = new Date().toISOString().slice(0, 10)
    const newRecord = { id, created, ...data }
    
    setRecords((prev) => [newRecord, ...prev])
    setSelectedId(id)
  }

  // Handler: Delete Task
  const handleDelete = (id) => {
    setRecords((prev) => prev.filter((r) => String(r.id) !== String(id)))
    if (String(selectedId) === String(id)) setSelectedId(null)
  }

  // Handler: Change Task Status
  const handleStatusChange = (id, status) => {
    setRecords((prev) =>
      prev.map((r) => (String(r.id) === String(id) ? { ...r, status } : r))
    )
  }

  return (
    <div
      className="flex flex-col h-screen overflow-hidden bg-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <Header codeVersion={thisVersion}/>

      <div className="flex flex-1 overflow-hidden">
        {/* Left panel — list */}
        <div className="w-80 shrink-0 flex flex-col h-full border-r border-(--border)]">
          <TaskList
            records={records}
            selectedId={selectedId}
            filter={filter}
            onFilterChange={setFilter}
            onSelect={setSelectedId}
            onDelete={handleDelete}
            onAdd={handleAdd}
          />
        </div>

        {/* Right panel — detail */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <TaskDetailPage
            record={selected}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>
    </div>
  )
}