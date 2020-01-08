
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'jennie2', first_name: 'Jennie', last_name: 'Vee', password: '$2a$08$yCN0RJyNGYkkIoiMmbFElu01YYcGTSSe5tq/JfH9D/0asuQcxZpsm' },
        { id: 2, username: 'jennie1', first_name: 'Jen', last_name: 'Vee', password: '$2a$08$0QjsoSyYdZ5OSrUJdXj6fOYd1pVDC73UXxsKjNpS7A8E7DRz7htu6' }
      ]);
    });
};
