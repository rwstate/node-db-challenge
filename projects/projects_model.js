const db = require('../data/dbConfig.js')

function getProjects() {
  return db('project')
}

function addProject(project) {
  return (
    db('project').insert(project)
  )
}

module.exports = {
  getProjects,
  addProject
}