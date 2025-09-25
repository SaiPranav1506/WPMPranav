Simple AngularJS frontend for the Inventory backend.

How to serve locally (static):

1. From the `frontend` folder install a static server if you don't have one (optional):

   npm install -g http-server

2. Start a static server in this folder:

   http-server -c-1

3. Open the browser at the printed URL (e.g. http://127.0.0.1:8080). The frontend expects the backend API at the same host under `/api` (e.g. http://localhost:4000/api). If backend runs on a different host/port, use a proxy or modify the `ApiService` base URL.

Notes:
- This is a minimal AngularJS (1.x) app for quick integration and local testing.
- It does basic error routing — if an API call fails the user is redirected to `/error`.
