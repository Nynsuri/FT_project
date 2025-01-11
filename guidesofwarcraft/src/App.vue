<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #2b2b2b;
  --accent-color: #ffd100;
  --text-color: #ffffff;
  --border-color: #404040;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--primary-color) !important;
  color: var(--text-color) !important;
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
}

main {
  flex: 1;
  padding: 20px;
}

.navbar {
  background-color: var(--secondary-color) !important;
  border-bottom: 1px solid var(--border-color);
}

.navbar-brand,
.nav-link {
  color: var(--text-color) !important;
}

.nav-link:hover {
  color: var(--accent-color) !important;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--accent-color);
}
</style>