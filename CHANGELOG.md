# Changelog

## [0.0.0] - 2025-09-25

### Added

- "progress" field into Project-model
- Links to HomePage and ProjectPage in Header component
- RightActions section in Header component

### Changed

- ProjectCard UI
- Tailwind Theme Settings

### Fixed

- change Cyrillic notes and field to English version

## [0.0.0] - initial note

### Added

- Client-side application built with React + TypeScript using Vite.
- Routing via `react-router-dom`.
- Tailwind CSS (v4) via the `@tailwindcss/vite` plugin.
- Base project structure (feature-sliced at `entities/`, `pages/`, `widgets/`, `features/`, `shared/`).
- Layouts: `widgets/Layouts/MainLayout.tsx`, `widgets/Layouts/AuthLayout.tsx`, and aggregator `widgets/Layouts/index.tsx`.
- Widgets: `widgets/Header`, `widgets/Footer`.
- Pages:
  - `pages/AuthPage` — basic authentication page.
  - `pages/HomePage` — home page and `ThemePreviewPage` for theme preview.
  - `pages/ProjectsPage` — projects list, project details, project tasks (`ProjectDetailsPage`, `ProjectTasksPage`) and `components/ProjectCard` component.
- Entities (`entities/`): `project`, `task`, `habit`, `user` — each scaffolded with `api.ts`, `lib.ts`, `model.ts`, `ui.tsx`.
- Mock data in `src/mocks/`: `projects.ts`, `tasks.ts`, `habits.ts`, `habitsLogs.ts`, `user.ts`.
- ESLint setup and base scripts:
  - `dev`, `build`, `preview`, `lint`.

### Notes

- Key dependency versions: React 19, Vite 7, TypeScript 5, Tailwind 4.
- Current package version from `package.json`: `0.0.0` (initialization, pre-release).
