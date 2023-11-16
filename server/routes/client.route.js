const express = require('express')
const { findOne } = require('../controllers/client.controller')

const clientRouter = express.Router()

clientRouter.get('/history/:id', async (req, res) => {
    const client = await findOne(req.params.id)
    res.send(client)
})

module.exports = clientRouter