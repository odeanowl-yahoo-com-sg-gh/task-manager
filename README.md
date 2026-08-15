# Module 2 Coding Assignment

## Log (Reverse Choronological Order)

**Saturday, 15 August 2026** (3 hours): Start build.
Branch from `main`. Git on WSL, Project on Windows -- Challenging!

**Friday, 14 August 2026** (2 hours),
**Thursday, 13 August 2026** (4 hours)
**Wednesday, 12 August 2026** (2 hours),
**Tuesday, 11 August 2026** (2 hours),
**Monday, 10 August 2026** (2 hours),
**Sunday, 9 August 2026** (8 hours): Review and stock take of progress.
Plan recalibration steps for Gemini with Gemini.
Gemini was 'confused' between prop drilling method and React Router method.

**Saturday, 8 August 2026** (3 hours): Progress is slow... 
Context API and Reducers understanding is elusive... Initial thoughts of completing React Routing quick is beginning to disappoint... See [Task History](https://github.com/odeanowl-yahoo-com-sg-gh/task-manager#task-history-reverse-chronological-order)

**Friday, 7 August 2026**: Submit JavaScript and JavaScript XML refactored codebase, but no React Router, Context API and Reducer. Learned Git and GitHub on-the-go.

**Thursday, 6 August 2026**,
**Wednesday, 5 August 2026**,
**Tuesday, 4 August 2026**: Refactored TypeScript and Tailwind CSS prototpye for JavaScript and JavaScript XML.

**Monday, 3 August 2026**: Develop Task Manager Architecture.

**Saturday, 1 August 2026**: After the MCQs assessment, Something ticked, confident boost to work with GenAI, though it is still touch and go but I was beginning to be aware where things are. 
Lesson 6 and Lesson 8 were important. Google NotebookLM was instrumental to achieve this.

**Saturday, 29 July 2026**: Pick up where I left off on Thursday, 9 July 2026.
Worked with Google Gemini in an attempt to move forward...

**Thursday, 9 July 2026**: In a way, the assignment presumes a working prototype that could be refactored for React Router, Reducer and Context. CSS was a bigger concern I had than understanding the lectures and the quirky ways of React, JavaScript and XML. It prompted to search for alternatives so that I could focus on coding. Figma caught my attention after several prompts with Google Gemini, including open source CSS design platforms such as v0, Penpot, Plasmic/UXPin. However, Figma worked with TypeScript and Tailwind CSS, and its source code complexity was higher than the lecture materials. I left everything as-is...

## Setup

1. Create a new React app
    - `npm create vite@latest task-manager -- --template react`

2. Install React Router
    - `npm install react-router-dom`

3. Tailwind CSS
    - Install Tailwind CSS extension in VS Code
    - `npm install tailwindcss @tailwindcss/vite` as per [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
    - Verify Tailwind CSS is installed correctly with specialised `App.js`
    - Edit `index.css` to accomodate Tailwind CSS (`tailwindcss`) with standard CSS

4. Prettier
    - `npm install --save-dev prettier eslint-config-prettier`

## Refactoring Strategy for React Router, Context and Reducers

**Tuesday, 4 August 2026, 1:01 p.m. SGT**: Prompt: _If refactoring is required, what is a good systematic order if React Router, `useContext`, and `useReducer` are required?_. So, after the port over Figma TypeScript Tailwind CSS as-is to JavaScript, JavaScript XML, the following steps have to be executed in that order:

* Step 1 (Router) 
    Fixes visual hierarchy to know where components live.
* Step 2 (`useReducer`) 
    Stabilizes data logic in isolation to not debug broken reducer logic and broken context subscriptions at the same time.
* Step 3 (`useContext`) 
    Creates the distribution pipeline.
* Step 4 (Cleanup) 
    Plugs components into the pipeline and strips away clutter.

## Task Manager Architecture (Expected)(Refractored)

**Sunday, 2 August 2026, 6:15 a.m. SGT**: Developed with Google Gemini using learnings of Lesson 6 and Lesson 8: [Final Architecture of Simple CRM Web](./Architecture%20-%20simple-crm-web%20-%20screenshot-1785619698669.png), and prompts such as the following: _Before debating your queries, the adapted architecture needs adjustments when measured against the assignment requirements (from my point of view; I am open to suggestions)._

**Legend**:
ACR: `App.jsx` of Module 2 Assignment Core Requirement
CCR: Components of Module 2 Assignment Core Requirement
CTCR: Context of Module 2 Assignment Core Requirement
DATA: Data for Module 2 Assignment
RCR: Reducer of Module 2 Assignment Core Requirement

```plaintext
index.html                  # Root entry point
└── src/
 ├── main.jsx               # Mounts 
 │                            `App`, 
 │                            `TaskProvider`, 
 │                            `BrowserRouter`
 ├── App.jsx                # **ACR**: Defines routes: 
 │                            `/` -> redirect `/tasks`, 
 │                            `/tasks`, 
 │                            `/tasks/:id`, 
 │                            `*`
 ├── index.css              # Global / Tailwind styles
 │
 ├── pages/
 │ ├── TaskListPage.jsx     # Main view (/tasks): renders 
 │ │                          `Header`,
 │ │                          `FilterBar`, 
 │ │                          `AddTaskForm`,
 │ │                          `TaskList`
 │ ├── TaskDetailPage.jsx   # **CCR**: Detail view (/tasks/:id): 
 │ │                          reads `useParams`, 
 │ │                          displays task 
 │ │                          info or "Task not found"
 │ └── NotFoundPage.jsx     # Catch-all page (*)
 │
 ├── components/
 │ ├── Header.jsx           # **CCR**: Shows app name
 │ ├── FilterBar.jsx        # **CCR**: 4 filter buttons with active state highlighting
 │ ├── TaskList.jsx         # **CCR**: 
 │ │                          Maps filteredTasks; 
 │ │                          renders rows with Link to `/tasks/:id` and 
 │ │                          Delete button
 │ └── AddTaskForm.jsx      # **CCR**: 
 │                            Controlled form (title, description, status, priority)
 │
 ├── contexts/
 │ └── TaskContext.jsx      # **CTCR**: 
 │                            `TaskContext` & `TaskProvider` (
 │                             `tasks`, 
 │                             `filteredTasks`,
 │                             `filter`, 
 │                             `addTask`, 
 │                             `deleteTask`, and
 │                             `setFilter`
 │                            )
 │
 ├── reducers/
 │ └── taskReducer.js       # **RCR**: Reducer handling 
 │                            `ADD_TASK`, 
 │                            `DELETE_TASK, and
 │                            `SET_FILTER`
 │
 └── data/
   └── initialTasks.js      # **DATA**: Seed data (at least 6 initial tasks)
```

### Task History (Reverse Chronological Order)

**Saturday, 8 August 2026**
Unable to proceed with the next steps planned on Thursday, 6 August 2026. Try to nderstand how `TaskListPage.jsx` fit into Context API and Reducer; need to understand this before any coding. Refactored codebases are more difficult to fix because of the reluctance to 'break code'... React Routing should be easily completed because of the same reason

**Friday, 7 August 2026**
No work done; Unable to work on Step 1 (Router) as stipulated in [Refactoring Strategy for React Router, Context and Reducers](https://github.com/odeanowl-yahoo-com-sg-gh/task-manager#refactoring-strategy-for-react-router-context-and-reducers)

**Thursday, 6 August 2026**
1. Port over Figma TypeScript Tailwind CSS as-is to JavaScript, JavaScript XML. 
    - Create:
        * data/initiTasks.js`
        * `AddTaskForm.jsx`
        * `Header.jsx`
        * `TaskDetailPage.jsx`
        * `TaskList.jsx`
    - Edit
        * `App.jsx`
        * `index.css`
2. Next Steps
    - Edit
        * `App.jsx` for React Routing
    - Create:
        * `NotFoundPage.jsx`
        * `TaskListPage.jsx`
    - `taskReducer.jsx` followed by
    - `TaskContext` as per the Refactoring Strategy

## Regrets!

**React Test Cases**
If my 'enlightenment' of React came earlier, I might have time to develop test cases. Currently, I might have to review the lecture notes in order to achieve this. This would be in future plans. Perhaps it is wise to develop with TDD methodology. However, it is still difficult to achieve this when understaking a new language.

## Future Plans

**Task Manager** can be another item with Customers in the Simple CRM Web. It could share the same `<Outlet />` in the `<Sidebar>` in the `<RootLayout />`. I would like to do that if I have an opportunity and time.

**Data of Task Manager** is an array for simplicity in order to understand React. Working with an backend database server is the next exciting challenge! There are at least three additional data fields which allows for further practice on React, especially when combine with the Simple CRM Web.

## `App.jsx` Version History (Reverse Version Number Order)
* **`App copy 6.jsx`**:
    - Gemini
    - F5
    - Ctrl r (or Ctrl R)
    - Persist list of tasks _cannot_ survive Task Detail Page reload
* **`App copy 5.jsx`**:
    - Copilot
    - F5
    - Ctrl r (or Ctrl R)
    - Data reload on F5, Ctrl r (or Ctrl R)
    - Persist list of tasks _cannot_ survive Task Detail Page reload
* **`App copy 4.jsx`**:
    - Germini
    - F5
    - Ctrl r (or Ctrl R)
    - Data reload on F5
    - Persist list of tasks survive Task Detail Page reload
* **`App copy 3.jsx`**: 
    - Germini & Copilot
    - Port over from Figma TypeScript Tailwind CSS prototype
    - No F5
    - No Ctrl r (or Ctrl R)
* **`App copy 2.jsx`**:
    - Tailwind CSS installation test
* **`App copy.jsx`**:
    - Vite React Boiler Template