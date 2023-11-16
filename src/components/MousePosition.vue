<script setup>
import { computed } from 'vue'
const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})

const positionCSS = computed(() => ({
  top: props.client.position.y - 40 + 'px',
  left: props.client.position.x + 'px'
}))

const positionInfo = computed(
  () => `client${props.client.id} : (x: ${props.client.position.x}, y: ${props.client.position.y})`
)
</script>

<template>
  <div class="mouse" :style="positionCSS">
    {{ positionInfo }}
  </div>
</template>

<style>
.mouse {
  width: 200px;
  position: absolute;
  pointer-events: none;
}

.mouse::before {
  content: '';
  display: block;
  position: absolute;
  top: 37px;
  left: -3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #131313;
}
</style>
