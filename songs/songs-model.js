const db = require('../data/db-config');

module.exports = {
    saveTrack, 
    removeTrack,
    getSavedTrack,
    findTrack,
    findTrackById
};

function findTrack() {
    return db('tracks')
};

function findTrackById(id) {
    return db('tracks').where({ id });
}

function saveTrack() {
    return db('favoriteSongs')
        .insert(song)
};