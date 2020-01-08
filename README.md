# Back-End

#### Deployed at 
https://symphinity-backend.herokuapp.com/

## API Endpoints
| Type | Endpoints              | Description                        |
| ---- | ---------------------- | ---------------------------------- |
| POST | /api/auth/register     | Register                           |
| POST | /api/auth/login        | Login                              |
| GET  | /api/users             | get all users                      |
| GET  | /api/users/:id         | get user by id                     |
| POST | /api/music/faves       | save a favorite song               |
| GET  | /api/music/:id/faves   | get a user's favorited songs       |
| POST | /api/music/singletrack | use one song to get recommendations|



### User Schema

| name       | type      | required |
| ---------- | --------- | -------- |
| username   | string    | yes      |
| password   | string    | yes      |
| first_name | string    | yes      |
| last_name  | string    | yes      |

### Song Schema 

| name        | type    | required |
| ----------- | --------| -------- |
| track_id    | string  | yes      |
| track_name  | string  | yes      |
| artist_name | string  | yes      |

### Response Format 
The response (song suggestions) will return as an array of objects ike the following: 
[
 {
    "index": 20273,
    "artist_name": "Eric Bellinger",
    "track_id": "2kssikTr9YmMS2Ab5WXNsK",
    "track_name": "Valentine",
    "acousticness": 0.0264,
    "danceability": 0.654,
    "duration_ms": 192052,
    "energy": 0.607,
    "instrumentalness": 0.0,
    "key": 5,
    "liveness": 0.146,
    "loudness": -7.191,
    "mode": 0,
    "speechiness": 0.0556,
    "tempo": 120.003,
    "time_signature": 4,
    "valence": 0.592,
    "popularity": 43,
    "genre": "rnb"
  },
  {
    "index": 42268,
    "artist_name": "Doja Cat",
    "track_id": "2nNlfZtsryTNse0Oru6FcO",
    "track_name": "Wild Beach",
    "acousticness": 0.249,
    "danceability": 0.715,
    "duration_ms": 204360,
    "energy": 0.675,
    "instrumentalness": 0.000725,
    "key": 4,
    "liveness": 0.115,
    "loudness": -6.669,
    "mode": 0,
    "speechiness": 0.0859,
    "tempo": 120.042,
    "time_signature": 4,
    "valence": 0.355,
    "popularity": 42,
    "genre": "rnb"
  }
]