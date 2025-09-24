# Backend (Express + MongoDB)

Setup

1. Open a terminal in this folder:

```powershell
cd "C:\Users\saipr\OneDrive\Desktop\InventoryManagementSystem WPM\backend"
```

2. Install dependencies:

```powershell
npm install
```

3. Create a `.env` file based on `.env.example` and set `MONGO_URI` and `JWT_SECRET`.

4. Start server (development with nodemon):

```powershell
npm run dev
```

API Endpoints

- POST `/api/auth/signup` { username, email, password }
- POST `/api/auth/login` { email, password }
- All inventory routes require `Authorization: Bearer <token>` header:
  - POST `/api/inventory` { name, quantity, price }
  - GET `/api/inventory`
  - GET `/api/inventory/:id`
  - PUT `/api/inventory/:id` { name, quantity, price }
  - DELETE `/api/inventory/:id`

