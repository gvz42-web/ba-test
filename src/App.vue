<script setup>
import { useSocketStore } from './stores/socket'
import MousePosition from './components/MousePosition.vue'
import SimpleLoader from './components/SimpleLoader.vue'

const socket = useSocketStore()

const updateCoordinates = (event) => {
  const { clientX, clientY } = event
  const { x, y } = event.target.getBoundingClientRect()
  socket.updateClientPosition({
    x: Math.floor(clientX - x),
    y: Math.floor(clientY - y)
  })
}
</script>

<template>
  <main>
    <div class="state" v-if="socket.getStatus">Пользователей: {{ socket.getClients.length }}</div>
    <div class="square" @mousemove="updateCoordinates" v-if="socket.getStatus">
      <MousePosition v-for="client of socket.getClients" v-bind:key="client.id" :client="client" />
    </div>
    <SimpleLoader v-else />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
}
.state {
  width: 600px;
  background-color: #fff;
  padding: 20px 40px;
}
.square {
  width: 600px;
  height: 600px;
  background-color: #fff;
  position: relative;
}
</style>
