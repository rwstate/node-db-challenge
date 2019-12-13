const express = require('express');

const ProjectRouter = require('./projects/projects_router.js')
const ResourceRouter = require('./resources/resources_router.js')
const TaskRouter = require('./tasks/tasks_router.js')

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.use('/api/resources', ResourceRouter);

server.use('/api/tasks', TaskRouter);

module.exports = server