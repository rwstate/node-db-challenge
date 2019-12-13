const express = require('express');

const Resources = require('./resources_model.js');

const router = express.Router();

router.get('/', (req,res) => {
  Resources.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({errMsg: err}))
})

router.post('/', (req,res) => {
  Resources.addResource(req.body)
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({errMsg: err}))
})

module.exports = router