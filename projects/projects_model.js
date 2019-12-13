const db = require('../data/dbConfig.js')

function getProjects() {
  return db('project')
}

function addProject(project) {
  return (
    db('project').insert(project)
  )
}

function getProject(id) {
  return (
    db('project').where({id}).first()
      .then(project => {
        return (
          db('task').where({project_id:id})
            .then(taskList => {
              return (
                db('project_resource')
                .innerJoin('resource', 'project_resource.resource_id', 'resource.id')
                .where({project_id:id})
                  .then(resourceList => {
                    filteredTasks = taskList.map(task => {
                      if (task.completed) {
                        return {...task, completed: true}
                      } else {
                        return {...task, completed: false}
                      }
                    })
                    if (project.completed) {
                      return {...project, completed: true, tasks:filteredTasks, resources: resourceList}
                    } else {
                      return {...project, completed: false, tasks:filteredTasks, resources: resourceList}
                    }
                  })
              )
            })
        )
      })
  )

}

module.exports = {
  getProjects,
  addProject,
  getProject
}