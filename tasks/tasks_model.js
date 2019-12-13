const db = require('../data/dbConfig.js')

function getTasks() {
  return db('task')
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