# Module 2 Coding Assignment

## Assignment Log (Reverse Choronological Order) (Reverse Order)

**Sunday, 16 August 2026**<br>
Git and GitHub `refactor/state-and-routing`
Learn `commit` and next steps of Git and GitHub of sub-branch from `main` (2 hours)<br>
Debugging. <br>

**Sunday, 16 August 2026**<br>
Build: Step 5. (1 hour)
Build: Step 4. (6 hours)<br>
Continue build: Step 1. (1 hours)<br>
Build: Step 3. (1 hours)<br>
Continue build: Step 2. (2 hours)<br>
Edit this log -- Best approach: Edit as you Code, not "big bang"

**Saturday, 15 August 2026**<br>
Start build: Step 2. (2 hours)
Git Branch to `refactor/state-and-routing`from `main`.<br>
If I have known earlier what Git and GitHub actually is practically; perhaps an increase in productivity... (6 hours)<br>
Git on WSL, Project on Windows... Challenging!<br>

**Friday, 14 August 2026** (2 hours), <br>
**Thursday, 13 August 2026** (4 hours),<br>
**Wednesday, 12 August 2026** (2 hours),<br>
**Tuesday, 11 August 2026** (2 hours),<br>
**Monday, 10 August 2026** (2 hours),<br>
**Sunday, 9 August 2026** (8 hours)<br>
A blueprint to refactor Figma prototype codebases (see Assignment Log 4-7 August 2026), or "What to Build" plan. However, I have to be on the lookout for deviation from this plan...
Gemini was 'confused' between prop drilling method and React Router method.<br>
Plan recalibration steps for Gemini with Gemini.<br>
Review and stock take of progress.<br>

**Saturday, 8 August 2026** (3 hours)<br>
Progress is slow...<br>
Context API and Reducers understanding elusive...<br>
Initial thoughts of completing React Routing quick is beginning to disappoint...<br>
See [Architecture: Build Log](https://github.com/odeanowl-yahoo-com-sg-gh/task-manager#task-history-reverse-chronological-order)

**Friday, 7 August 2026**<br>
Submit JavaScript and JavaScript XML port over codebases from Figma TypeScript Tailwind CSS, but no React Router, Context API and Reducer.<br>
Learned Git and GitHub on-the-go.

**Thursday, 6 August 2026**,<br>
**Wednesday, 5 August 2026**,<br>
**Tuesday, 4 August 2026**: <br>
Enlisted Copilot to tweak and localised changes frequent in porting over activities
Figma TypeScript and Tailwind CSS prototpye port over to JavaScript and JavaScript XML.<br>

**Monday, 3 August 2026**<br>
Develop Task Manager Architecture.

**Saturday, 1 August 2026**<br>
After the MCQs assessment, Something ticked, confident boost to work with GenAI, though it is still touch and go but I was beginning to be aware where things are.<br>
Lesson 6 and Lesson 8 were important. Google NotebookLM was instrumental to achieve this.

**Saturday, 29 July 2026**<br>
Worked with Google Gemini in an attempt to move forward...
Pick up where I left off on Thursday, 9 July 2026.<br>

**Thursday, 9 July 2026**<br>
In a way, the assignment presumes a working prototype that could be refactored for React Router, Reducer and Context. CSS was a bigger concern I had than understanding the lectures and the quirky ways of React, JavaScript and XML. It prompted to search for alternatives so that I could focus on coding. Figma caught my attention after several prompts with Google Gemini, including open source CSS design platforms such as v0, Penpot, Plasmic/UXPin. However, Figma worked with TypeScript and Tailwind CSS, and its source code complexity was higher than the lecture materials. I left everything as-is...

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

## Task Manager Architecture (Expected)(Refractored)

### Architectural Log  (Reverse Choronological Order)

**Sunday, 16 August 2026, 5:25 a.m. SGT**<br>
`TaskCard.jsx`
`taskHelpers.js`

**Sunday, 2 August 2026, 6:15 a.m. SGT**<br>
Developed with Google Gemini using learnings of Lesson 6 and Lesson 8: [Final Architecture of Simple CRM Web](./Architecture%20-%20simple-crm-web%20-%20screenshot-1785619698669.png), and prompts such as the following: _Before debating your queries, the adapted architecture needs adjustments when measured against the assignment requirements (from my point of view; I am open to suggestions)._

### Architecture

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
 │ │                           Delete button
 │ └── AddTaskForm.jsx      # **CCR**: 
 │                            Controlled form (
 │                             title,
 │                             description,
 │                             status,
 │                             priority
 │                            )
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
 ├── utils/
 │ └── taskHelpers.js       # `initialTasks`
 │                            `generateNextId`
 │                            `filterTasks`
 │                            `getTaskById`
 │                            `formatTaskDate`
 |
 └── data/
   └── initialTasks.js      # **DATA**: Seed data (at least 6 initial tasks)
```

### Architecture: Build Log (Reverse Chronological Order)

**Monday, 17 August 2026**<br>
* Debugging

**Sunday, 16 August 2026**<br>
* Step 5
    * Wire Everything up
* Step 4
    * `NotFoundPage.jsx`
    * `TaskListPage.jsx`
    * `TaskDetailPage.jsx`
    * `FilterBar.jsx`
    * `TaskCard.jsx`
    * `AddTaskForm.jsx`
    * `StatusBadge.jsx`
    * `PriorityBadge.jsx`
* Step 1:
    * `App.jsx`
* Step 3:
    * `TaskContext.jsx`
* Step 2:
    * `taskHelpers.js`
    * `taskReducers.js`

**Saturday, 15 August 2026**,<br>
**Friday, 14 August 2026**<br>
| Project Structure (`src/`) | Build Steps | Rationale & Strategy |
| :--- | :--- | :--- |
| **`components/`**<br>• `FilterBar`<br>• `TaskList`<br>• `AddTaskForm`<br>• `StatusBadge`<br>• `PriorityBadge`<br>• `Header`<br><br>**`contexts/`**<br>• `TaskContext.jsx`<br><br>**`pages/`**<br>• `TaskListPage.jsx`<br>• `TaskDetailPage.jsx`<br>• `NotFoundPage.jsx`<br><br>**`reducers/`**<br>• `taskReducer.js`<br><br>**`utils/`**<br>• `taskHelpers.js`<br><br>**`App.jsx`**<br>• Router configuration & shell | **Step 1: Configure**<br>`src/App.jsx` with `<BrowserRouter>` and page routes (placeholders for now).<br><br>**Step 2: Write**<br>`src/reducers/taskReducer.js` and `src/utils/taskHelpers.js`.<br><br>**Step 3: Build**<br>`src/contexts/TaskContext.jsx` using `useReducer` and export the custom hook `useTasks()`.<br><br>**Step 4: Place/update component files in**<br>`src/components/` and `src/pages/`, replacing prop-drilling with `useTasks()`. | **Bottom-up** (Step 2 $\rightarrow$ Step 3 $\rightarrow$ Step 1 $\rightarrow$ Step 4) is the safest and most effective strategy.<br><br>**Why Step 2 First Makes More Sense:**<br><br>**Zero Runtime / Compiler Errors**<br>Step 2 consists of **pure JavaScript functions** (`taskReducer.js` and `taskHelpers.js`). They do not depend on React components, context providers, or routing.<br>If you build Step 1 (the Router shell in `App.jsx`) first, it will try to import page components or providers that don't exist or aren't wired up yet, leading to broken imports and console errors in your dev server.<br><br>**Establishes the Data Contract Early**<br>The reducer defines **action types** (`ADD_TASK`, `DELETE_TASK`, `SET_FILTER`) and **state shape** (`{ tasks: [...], filter: 'all' }`).<br>Defining this first gives us complete clarity on what `TaskContext` (Step 3) needs to expose and what the Pages/Components (Step 4) will consume.<br><br>**Easier to Verify & Unit Test**<br>Pure reducer functions are instant to test or mentally verify: *Input State + Action = Output State*. Getting this right first ensures your business logic is bulletproof before plugging it into React's UI tree. |

**Thursday, 13 August 2026**<br>
```plaintext
src/
├── components/     # FilterBar,
│                     TaskList,
│                     AddTaskForm,
│                     StatusBadge,
│                     PriorityBadge,
│                     Header
├── contexts/       # TaskContext.jsx
├── pages/          # TaskListPage.jsx,
│                     TaskDetailPage.jsx,
│                     NotFoundPage.jsx
├── reducers/       # taskReducer.js
├── utils/          # taskHelpers.js
└── App.jsx         # Router configuration & shell
```

**Saturday, 8 August 2026**<br>
Unable to proceed with the next steps planned on Thursday, 6 August 2026. Try to nderstand how `TaskListPage.jsx` fit into Context API and Reducer; need to understand this before any coding. Refactored codebases are more difficult to fix because of the reluctance to 'break code'... React Routing should be easily completed because of the same reason

**Friday, 7 August 2026**<br>
No work done; Unable to work on Step 1 (Router) as stipulated in [Refactoring Strategy for React Router, Context and Reducers](https://github.com/odeanowl-yahoo-com-sg-gh/task-manager#refactoring-strategy-for-react-router-context-and-reducers)

**Thursday, 6 August 2026**<br>
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

**Tuesday, 4 August 2026, 1:01 p.m. SGT**<br>
Refactoring Strategy for React Router, Context and Reducers.

Prompt: _If refactoring is required, what is a good systematic order if React Router, `useContext`, and `useReducer` are required?_. So, after the port over Figma TypeScript Tailwind CSS as-is to JavaScript, JavaScript XML, the following steps have to be executed in that order:

* Step 1 (Router) 
    Fixes visual hierarchy to know where components live.
* Step 2 (`useReducer`) 
    Stabilizes data logic in isolation to not debug broken reducer logic and broken context subscriptions at the same time.
* Step 3 (`useContext`) 
    Creates the distribution pipeline.
* Step 4 (Cleanup) 
    Plugs components into the pipeline and strips away clutter.

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