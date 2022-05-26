const route = require('express').Router()

const { getClient, getClientid } = require('../controller/client.controller')

route.route('/').get(getClient)
route.route('/:id').get(getClientid)

module.exports = route;