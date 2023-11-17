const Client = require("../controllers/client.controller")
const Log = require("../controllers/log.controller")

let clients = []

const addClient = async (client) => {
    const {id} = await Client.create(client.socketId)
    client.id = id
    clients.push(client)
    Log.create(client.id, 'Connect')
}

const updatePosition = (data, client) => {
    client.position = data
    Log.create(client.id, `X: ${client.position.x} Y: ${client.position.y}`)
}

const deleteClient = (client) => {
    clients = clients.filter(e => e.id !== client.id)
    Log.create(client.id, 'Disconnect')
    Client.delete(client.id)
}


module.exports = async (socket, io) => {
    const client = {
        socketId: socket.id,
        position: {
            x: 0,
            y: 0
        },
        id: 0
    }
    
    addClient(client)
    
    io.sockets.emit('update', clients)

    socket.on('updateClientPos', (data) => {
        updatePosition(data, client)
        io.sockets.emit('update', clients)
    })

    socket.on("disconnect", () => {
        deleteClient(client)
        io.sockets.emit('update', clients)
      });
}