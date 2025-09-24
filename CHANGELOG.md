# Changelog

All notable changes to this project will be documented in this file.
The format is based on Keep a Changelog and this project adheres to Semantic Versioning.

## [Unreleased]

### Added

- Страница деталей проекта `ProjectDetailsPage` с таблицей задач проекта:
  - Вывод названия, описания, статусов, тегов и ключевых дат задач
  - Пустое состояние при отсутствии задач
  - Бейджи статусов ("В работе"/"Готово")
- Вложенная маршрутизация для проектов:
  - `GET /projects/:projectId` — детали проекта (индексный маршрут)
  - `GET /projects/:projectId/tasks` — страница задач проекта (заготовка)
- Обновлённый лэйаут `MainLayout` с поддержкой `headerProps` для передачи заголовка и описания в `Header`
- Утилита форматирования дат внутри `ProjectDetailsPage` для локали `ru-RU`

### Changed

- Конфигурация `App.tsx` переведена на вложенные `Routes` с `Outlet` для группировки страниц проекта
- Верстка секций страницы деталей проекта: таблица задач (3/4) и карточка метаданных проекта (1/4)

### Tech/Mocks

- Данные проектов и задач берутся из моков (`mocks/projects`, `mocks/tasks`) для первичного прототипирования

### Current state (overview)

- Базовая навигация: `/`, `/projects`, `/projects/:projectId`, `/projects/:projectId/tasks`, `/auth`
- UI собран на React + Vite + Tailwind (подключен плагин)
- Заголовок/описание страниц передаются через `MainLayout` → `Header`
- Нет реального API; используется мок-слой. Авторизация и управление задачами — в планах
