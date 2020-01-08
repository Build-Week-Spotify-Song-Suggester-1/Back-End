const express = require('express');
const router = express.Router();
const axios = require('axios');

const Tracks = require('./songs-model');
const authenticate = require('../auth/auth-middleware');

//'/api/music'
router.post('/', (req, res) => {
    const track_id = req.body.track_id;
    axios.get(`https://spotifyflask.herokuapp.com/song/${track_id}`)
        .then(res => {
            res.status(200).json(res)
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve suggested playlist for track', error: err })
        })
});

//'/api/music/faves'
router.post('/faves', (req, res) => {
    const trackToSave = req.body;
    console.log(trackToSave);
    Tracks.saveTrack(trackToSave)
        .then(newTrack => {
            res.status(200).json(newTrack);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Unable to save track', error: err })
        })
});

router.get('/:id/faves', (req, res) => {
    const id = req.params.id;
    Tracks.getSavedTrack(id)
        .then(savedTracks => {
            res.status(200).json(savedTracks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve favorites playlist', error: err })
        })
});


module.exports = router;