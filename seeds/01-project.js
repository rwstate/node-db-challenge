exports.seed = function(knex, Promise) {
  return knex('project').truncate()
    .then(function () {
      return knex('project').insert([
        { name: 'project 1', description: "description 1" },
        { name: 'project 2', description: "description 2" },
      ]);
    });
};
