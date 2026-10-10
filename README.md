# DataGuard Frontend

React + Vite dashboard for the DataGuard FastAPI backend. It uses the existing REST APIs and the `/ws/alerts` WebSocket. It does not add a separate frontend server or queue.

## Requirements
- Node.js 18+ (Node 20 LTS recommended)
- DataGuard backend running at `http://127.0.0.1:8000`

## Run locally (PowerShell)

```powershell
cd D:\path\to\dataguard-frontend
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

Configure `.env` if your backend URL differs:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
VITE_WS_URL=ws://127.0.0.1:8000/ws/alerts
```

Restart Vite after changing `.env`.

## Pages
- Overview: dashboard metrics, risk trend, recent alerts, WebSocket connection status.
- Security alerts: filter alerts and update analyst status; inspect alert evidence.
- Employees & access: create/edit employees; assign READ, DOWNLOAD, SHARE/UPLOAD, and COPY permissions for each file.
- Sensitive files: inspect file classifications and users with access; grant/revoke permissions.
- Activity events: submit simulated events and inspect permission outcomes/risk score.
- Approved exceptions: create and remove exception approvals.
- Employee detail route: `/users/:id` shows activity, risk, and file grants.

## REST APIs used

| Method | Endpoint | Used for |
|---|---|---|
| GET | `/api/dashboard/summary` | Dashboard counters |
| GET | `/api/dashboard/risk-trend` | Risk chart |
| GET | `/api/dashboard/recent-alerts` | Recent alerts |
| GET | `/api/alerts` | Alert queue / filters |
| GET | `/api/alerts/{id}` | Alert evidence |
| PATCH | `/api/alerts/{id}` | Analyst status |
| GET | `/api/events` | Event list |
| POST | `/api/events` | Submit simulated activity |
| GET/POST | `/api/users` | List/create employees |
| GET | `/api/users/{id}` | Employee details |
| PATCH | `/api/users/{id}` | Update employee |
| GET | `/api/users/{id}/activity` | Employee activity timeline |
| GET | `/api/users/{id}/risk` | Employee risk summary |
| GET | `/api/users/{id}/permissions` | Read employee file grants |
| PUT | `/api/users/{id}/permissions/{file_id}` | Create/update file grants |
| DELETE | `/api/users/{id}/permissions/{file_id}` | Revoke file grants |
| GET | `/api/files` | File catalog |
| GET | `/api/files/{id}` | File details and assigned users |
| GET/POST | `/api/exceptions` | List/create approved exceptions |
| DELETE | `/api/exceptions/{id}` | Remove exception |
| WebSocket | `/ws/alerts` | Live alert updates |

## Test the access-control workflow
1. Start the backend and seed demo data if the database is empty (`python seed.py`).
2. Open **Employees & access** and add a test employee.
3. Select **Permissions** for that employee and choose a file.
4. Grant only `Read / View`, leaving Download, Share and Copy unchecked, then save.
5. Open **Activity events**. Submit `DOWNLOAD` for that employee and file. The event should show `DENIED` and, depending on file sensitivity/risk score, create an alert.
6. Try `SHARE` with `PERSONAL_CLOUD` to test an unapproved data transfer attempt.
7. Open **Security alerts** to inspect reasons and change the analyst status.
8. Return to **Sensitive files** to verify the assigned permissions and revoke access.

## Important security limitation
This is a hackathon/demo prototype. The current backend has no login/authentication or administrator authorization layer, so the user/permission management APIs are not protected against arbitrary callers. Do not expose this prototype publicly until authentication and authorization are implemented. Events simulate telemetry; a permission-denied event creates a detection/alert but does not block an actual OS-level file transfer.
