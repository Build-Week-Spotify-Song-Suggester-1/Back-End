# Back-End

## API Endpoints
| Type | Endpoints          | Description      |
| ---- | ------------------ | ---------------- |
| POST | /api/auth/register | Register         |
| POST | /api/auth/login    | Login            |
| GET  | /api/users         | get all users    |
| GET  | /api/users/:id     | get user by id   |



**User Schema**
| name     | type      | required |
| -------- | --------- | -------- |
| username | string    | yes      |
| password | string    | yes      |