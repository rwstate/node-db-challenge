const db = require('../data/dbConfig.js')

function getTasks() {
  return (
    db('task')
    .innerJoin('project', 'project.id', 'task.project_id')
  )
}

function addTask(task) {
  return (
    db('task').insert(task)
  )
}

module.exports = {
  getTasks,
  addTask
}