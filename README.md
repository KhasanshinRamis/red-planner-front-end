This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Red Planner Frontend

Фронтенд часть приложения Red Planner, разработанная с использованием [Next.js](https://nextjs.org/). Предоставляет пользовательский интерфейс для управления задачами, временем и фокусировкой.

## Стек технологий

- **Фреймворк:** [Next.js](https://nextjs.org/) (App Router)
- **Стилизация:** [Tailwind CSS](https://tailwindcss.com/)
- **Язык разработки:** TypeScript
- **Управление состоянием:** React Query (TanStack Query)

## Структура приложения и страницы

Приложение разделено на публичную зону (аутентификация) и приватную зону (личный кабинет).

### Аутентификация
- **/auth/auth**: Страница входа и регистрации. Позволяет пользователям создать аккаунт или войти в существующий.

### Личный кабинет (`/i`)
Все страницы внутри `/i` требуют авторизации.

- **/i (Dashboard/Статистика):** Главная страница дашборда. Здесь отображается статистика пользователя, помогающая отслеживать продуктивность.
- **/i/tasks (Задачи):** Страница управления задачами.
  - Поддерживает различные режимы просмотра (Kanban доска, Список).
  - Позволяет создавать, редактировать, удалять задачи и менять их приоритет.
- **/i/timer (Таймер Pomodoro):** Страница с таймером Pomodoro для фокусировки.
  - Управляет рабочими интервалами и перерывами.
  - Отображает текущую сессию и раунды.
- **/i/time-blocking (Временные блоки):** Страница для Time Blocking (планирование дня по блокам).
  - Позволяет распределять задачи по временным слотам дня.
  - Визуализирует расписание.
- **/i/settings (Настройки):** Страница настроек профиля.
  - Позволяет изменять данные пользователя (email, имя, пароль).
  - Настройки таймера (длительность интервалов, количество раундов).

## Запуск проекта

Сначала запустите сервер разработки:

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

## Deploy with Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
