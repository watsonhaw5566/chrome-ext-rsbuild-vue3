<template>
  <div class="content">
    <img class="logo" src="favicon.png" alt="logo" />
    <h1>Popup</h1>
    <p>Vue 3 + Rsbuild</p>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

.content {
  display: flex;
  width: 360px;
  height: 520px;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 12px;
  overflow: auto;
}

.content h1 {
  font-size: 2.2rem;
  font-weight: 700;
}

.content p {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.5;
}

.logo {
  width: 96px;
  height: 96px;
  margin: 0 auto 12px;
}
</style>
