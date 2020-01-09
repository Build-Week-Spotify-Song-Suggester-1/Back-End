# Back-End

#### Deployed at 
https://symphinity-backend.herokuapp.com/

## API Endpoints
| Type   | Endpoints                      | Description                           |
| ------ | ------------------------------ | ------------------------------------- |
| POST   | /api/auth/register             | Register                              |
| POST   | /api/auth/login                | Login                                 |
| GET    | /api/users                     | get all users                         | 
| GET    | /api/users/:id                 | get user by id                        |
| POST   | /api/music/faves               | save a favorite song                  |
| GET    | /api/music/:id/faves           | get a user's favorited songs          |
| POST   | /api/music/singletrack         | use one song to get recommendations   |
| POST   | /api/music/singletrack/data    | get song's audio features radio chart |
| DELETE | /api/music/:id/faves/:track_id | removes a song from faveSongs list    |




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
The response (song suggestions) will return as an array of objects like the following: 
```javascript
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
```


## Register a new user

```javascript 
{
  "username": "testerUsername",
  "first_name": "John",
  "last_name": "Doe",
  "password": "password123"
}
```

## Login

```javascript 
{
  "username": "testerUsername",
  "password": "password123"
}
```
## Use a single track for song suggestions/radar graph

```javascript 
{
  "track_id": "6vx0xD9tCnPhbOdC1s0cHM"
}
```

## Save a song to a user's favorites 

```javascript
{
	"song_id": "3",
	"user_id": "1",
	"full_track_id": "6vx0xD9tCnPhbOdC1s0cHM"
}
```

