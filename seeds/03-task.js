exports.seed = function(knex, Promise) {
  return knex('task').truncate()
    .then(function () {
      return knex('task').insert([
        { project_id: 1, description: "description 1", notes: "notes 1" },
        { project_id: 2, description: "description 2", notes: "notes 2" },
      ]);
    });
};
