// src/components/Header.jsx (App.jsx version 4)
export default function Header({codeVersion}) {
  return (
    <header className="
      px-7
      py-4
      border-b border-(--border) bg-zinc-900 text-white
      flex
      items-center
      justify-between"
    >
      <div className="
        flex
        items-center
        gap-3"
      >
        <div className="
          w-3
          h-3
          rounded-full bg-indigo-500" /
        >
        {/* HIGHLIGHT: Title color tuned lighter for better contrast emphasis. */}
        <h1 className="text-base font-semibold tracking-tight text-zinc-200">
          Task Manager ({codeVersion})
        </h1>
      </div>
      <span className="text-xs text-zinc-400"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Option A - JS / JSX
      </span>
    </header>
  )
}