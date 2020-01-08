# Back-End

## API Endpoints
| Type | Endpoints          | Description      |
| ---- | ------------------ | ---------------- |
| POST | /api/auth/register | Register         |
| POST | /api/auth/login    | Login            |
| GET  | /api/users         | get all users    |
| GET  | /api/users/:id     | get user by id   |



### User Schema

| name       | type      | required |
| ---------- | --------- | -------- |
| username   | string    | yes      |
| password   | string    | yes      |
| first_name | string    | yes      |
| last_name | string     | yes      |

### Song Schema 

| name        | type    | required |
| ----------- | --------| -------- |
| track_id    | string  | yes      |
| track_name  | string  | yes      |
| artist_name | string  | yes      |