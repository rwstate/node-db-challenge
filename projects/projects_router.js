const express = require('express');

const Projects = require('./projects_model.js');

const router = express.Router();

router.get('/', (req,res) => {
  Projects.getProjects()
  .then(projects => {      
    res.status(200).json(projects.map(project => {
      if (project.completed) {
        return {...project, completed: true}
      } else {
        return {...project, completed: false}
      }
    }))
  })
    .catch(err => res.status(500).json({errMsg: err}))
})

router.post('/', (req,res) => {
  Projects.addProject(req.body)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({errMsg: err}))
})

module.exports = router