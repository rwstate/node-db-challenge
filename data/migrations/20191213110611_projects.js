
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments()
      tbl.text('name', 256).notNullable().unique()
      tbl.text('description', 512)
      tbl.integer('completed').defaultTo(0).notNullable()
    })
    .createTable('resource', tbl => {
      tbl.increments()
      tbl.text('name', 256).notNullable().unique()
      tbl.text('description', 512)
    })
    .createTable('task', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
      tbl.text('task_description', 512).notNullable()
      tbl.text('notes', 512)
      tbl.integer('completed').defaultTo(0).notNullable()
    })
    .createTable('project_resource', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
      tbl.primary(['project_id', 'resource_id'])

    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resource')
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
};
