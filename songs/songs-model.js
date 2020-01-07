const db = require('../data/db-config');

module.exports = {
    saveTrack, 
    removeTrack,
    getSavedTrack
};

function saveTrack() {
    return db()
}