const express = require('express')
const { findOne, getActive, getAll } = require('../controllers/client.controller')

const clientRouter = express.Router()

clientRouter.get('/history/:id', async (req, res) => {
    const client = await findOne(req.params.id)
    res.send(client)
})

clientRouter.get('/active', async (req, res) => {
    const activeClients = await getActive()
    res.send(activeClients)
})

clientRouter.get('/', async (req, res) => {
    const allClients = await getAll()
    res.send(allClients)
})

module.exports = clientRouter