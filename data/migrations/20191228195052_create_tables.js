exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128).notNullable().unique();
            tbl.string('password', 128).notNullable();
            tbl.string('first_name', 128).notNullable();
            tbl.string('last_name', 128).notNullable();
        })
        .createTable('tracks', tbl => {
            tbl.increments();
            tbl.string('track_id').notNullable();
            tbl.string('track_name').notNullable();
            tbl.string('artist_name').notNullable();

        })
        .createTable('favoriteSongs', tbl => {
            tbl.increments();
            tbl
                .integer('user_id')
                .notNullable()
                .references('users.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .string('song_id')
                .notNullable()
                .references('tracks.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('tracks')
        .dropTableIfExists('favoriteSongs')
};
