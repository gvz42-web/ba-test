import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { socket } from '../socket/socket'

export const useSocketStore = defineStore('socket', () => {

    const connected = ref(false)
    const clients = ref([])

    socket.connect()

    socket.on("connect", () => {
        connected.value = true
      });

    socket.on("update", (data) => {
        clients.value = data
    })

    const getClients = computed(() => clients.value)
    const getStatus = computed(() => connected.value)

    const updateClientPosition = (newPos) => {
        socket.emit('updateClientPos', newPos)
    }

    return {getStatus, updateClientPosition, getClients}
})