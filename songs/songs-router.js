const express = require('express');
const router = express.Router();
const axios = require('axios');

const Tracks = require('./songs-model');
const authenticate = require('../auth/auth-middleware');

//'/api/music' is part of the base url

// get req from ds with one song (7)
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
// save song to favoriteSongs (5)
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

//get all savedsongs from favoritesongs WORKING 
router.get('/:id/faves', (req, res) => {
    const id = req.params.id;
    Tracks.getSavedTrack(id)
        .then(savedTracks => {
            console.log(id)
            res.status(200).json(savedTracks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve favorites playlist', error: err })
        })
});

//endpoint to post playlist to ds api (8)




//remove song from favorites list (9) WIP
router.delete('/:id/faves/:track_id', (req, res) => {
    const id = req.params.id;
    const track_id = req.params.track_id;
    if (id === req.users.id) {
        Tracks.removeTrack(id, track_id)
            .then(trackToDelete => {
                res.status(200).json({ removed: trackToDelete })
            })
            .catch(err => console.log(err))
    } else {
        res.status(403).json({ message: 'Song ID not found' })
    }
  
});


module.exports = router;