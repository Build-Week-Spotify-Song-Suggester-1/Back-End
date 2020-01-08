
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favoriteSongs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('favoriteSongs').insert([
        { id: 1, user_id: 1, song_id: 1 },
        { id: 2, user_id: 1, song_id: 2 },
        { id: 3, user_id: 1, song_id: 3 },
      ]);
    });
};
