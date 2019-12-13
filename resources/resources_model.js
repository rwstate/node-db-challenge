const db = require('../data/dbConfig.js')

function getResources() {
  return db('resource')
}

function addResource(resource) {
  return (
    db('resource').insert(resource)
  )
}

module.exports = {
  getResources,
  addResource
}