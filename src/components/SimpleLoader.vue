<template>
  <div class="loader"></div>
</template>

<style>
.loader {
  width: 100px;
  height: 100px;
  background-color: rgb(37, 58, 107);
  animation: rotation 0.8s ease infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
