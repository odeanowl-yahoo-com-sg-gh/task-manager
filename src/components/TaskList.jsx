/**
 * @file TaskList.jsx
 * @description Master sidebar component containing FilterBar, AddTaskForm, and task cards.
 */

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FilterBar from './FilterBar';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';
import { useTasks } from '../contexts/TaskContext';

export default function TaskList() {
  const { tasks, filteredTasks, deleteTask, addTask } = useTasks();
  const navigate = useNavigate();
  const { id: activeId } = useParams();

  return (
    <div className="flex flex-col h-full border-r border-slate-200 bg-white min-w-[320px] max-w-[380px]">
      {/* Standalone FilterBar Component */}
      <FilterBar
        visibleCount={filteredTasks.length}
        totalCount={tasks.length}
      />

      {/* Controlled Add Task Form */}
      <AddTaskForm addTask={addTask} />

      {/* Task Item List */}
      <div className="flex-1 overflow-y-auto">
        {filteredTasks.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-slate-400">
            No tasks match this filter.
          </div>
        ) : (
          filteredTasks.map((record) => (
            <TaskCard
              key={record.id}
              record={record}
              isSelected={String(activeId) === String(record.id)}
              onSelect={(selectedId) => navigate(`/tasks/${selectedId}`)}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}