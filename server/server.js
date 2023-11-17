const express = require('express');
const socketHandler = require('./services/socketHandler');
const path = require('path')

const sequelize = require('./db/db');
const clientRouter = require('./routes/client.route');

sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


const app = express()
app.use('/clients', clientRouter)

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000']
  }
});

if (process.env.NODE_ENV !== 'dev') {
  app.use('/',express.static(path.join(__dirname, '../dist')))
}
  

io.on('connection', (socket) => {
    socketHandler(socket, io)
})

http.listen(3000, () => {
    console.log('Server has started')
})