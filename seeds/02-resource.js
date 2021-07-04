exports.seed = function(knex, Promise) {
  return knex('resource').truncate()
    .then(function () {
      return knex('resource').insert([
        { name: 'resource 1', description: "description 1" },
        { name: 'resource 2', description: "description 2" },
      ]);
    });
};