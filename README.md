# Todo List Collection
Contains three Todo List applications, built using different approaches and technologies — from basic JavaScript to a full-stack authenticated system.

---

## Preview
[Live demo](https://todo-fullstackkk.vercel.app)


## Screen Recorded Video

https://github.com/user-attachments/assets/82887dbb-2f47-4a0f-9e15-0d7449f6e716

---

## Projects Included
### 1. Full-Stack Todo App (JWT Authentication)
### 2. React Todo App
### 3. Vanilla Todo App (HTML, CSS, JavaScript)


---

## API Routes (Full-Stack App – Protected with JWT)

### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user
- `POST /api/auth/logout` – Logout user
- `GET /api/auth/me` – Get logged-in user (protected)

### Tasks (Protected)
- `GET /api/tasks` – Get all user tasks
- `POST /api/tasks` – Create a task
- `PATCH /api/tasks/:id` – Toggle task completion
- `DELETE /api/tasks/:id` – Delete a task
- `DELETE /api/tasks/clear` – Delete all tasks

> All task routes require JWT authentication. Authentication is handled using JWTs stored in **HTTP-only cookies** for better security.

---

## Screenshots and Walkthrough

**Simple Login UI with set cookies** 
<img width="1919" height="826" alt="image" src="https://github.com/user-attachments/assets/3bcc498f-5ff2-4e02-b17f-250d5d85927c" />


**Authenticated API Call** – Cookies are shared with each request for authentication
<img width="1906" height="699" alt="image" src="https://github.com/user-attachments/assets/f5d669a1-19cc-415c-b3c8-3d62720da1fb" />


<img width="1700" height="947" alt="image" src="https://github.com/user-attachments/assets/40a2d7c6-1580-4e70-a50d-12673a355ee9" />

---
## Project Structure (Full-Stack)

```
todo-fullstack
├── backend
│ ├── src
│ │ ├── config
│ │ │ └── db.js
│ │ ├── controllers
│ │ │ ├── authController.js
│ │ │ └── taskController.js
│ │ ├── middleware
│ │ │ ├── authMiddleware.js
│ │ │ └── errorMiddleware.js
│ │ ├── models
│ │ │ ├── auth.js
│ │ │ └── task.js
│ │ ├── routes
│ │ │ ├── authRoutes.js
│ │ │ └── taskRoutes.js
│ │ ├── utils
│ │ │ └── generateToken.js
│ │ └── server.js
│ └── package.json
│
├── frontend
│ ├── src
│ │ ├── api
│ │ │ └── api.ts
│ │ ├── components
│ │ │ └── auth
│ │ │ ├── LoginPage.tsx
│ │ │ ├── RegisterPage.tsx
│ │ │ └── ProtectedRoute.tsx
│ │ ├── pages
│ │ │ ├── MainPage.tsx
│ │ │ ├── Header.tsx
│ │ │ └── Tasks.tsx
│ │ ├── App.tsx
│ │ └── main.tsx
│ └── package.json

```
---

## Tech Stack

### Frontend
- React (Vite)
- TypeScript
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- Cookie Parser
- CORS

---















