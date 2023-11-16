const Client = require("../controllers/client.controller")
const Log = require("../controllers/log.controller")

let clients = []

module.exports = async (socket, io) => {
    const client = {
        socketId: socket.id,
        position: {
            x: 0,
            y: 0
        }
    }
    const {id} = await Client.create(client.socketId)
    client.id = id
    clients.push(client)
    await Log.create(id, 'Connect')
    

    io.sockets.emit('update', clients)

    socket.on('updateClientPos', async (data) => {
        await Log.create(id, `X: ${client.position.x} Y: ${client.position.y}`)
        clients.find(e => e.socketId == socket.id).position = data
        io.sockets.emit('update', clients)
    })

    socket.on("disconnect", async () => {
        clients = clients.filter(e => e.socketId !== socket.id)
        io.sockets.emit('update', clients)
        await Log.create(id, 'Disconnect')
        await Client.delete(id)
      });
}