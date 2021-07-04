const express = require('express');

const Tasks = require('./tasks_model.js');

const router = express.Router();

router.get('/', (req,res) => {
  Tasks.getTasks()
    .then(tasks => {    
      res.status(200).json(tasks.map(task => {
        if (task.completed) {
          return {...task, completed: true}
        } else {
          return {...task, completed: false}
        }
      }))
    })
    .catch(err => res.status(500).json({errMsg: err}))
})

router.post('/', (req,res) => {
  Tasks.addTask(req.body)
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({errMsg: err}))
})

module.exports = router