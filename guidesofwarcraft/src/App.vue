<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">WoW Guides</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" @mouseover="showGuides = true" @mouseleave="hideDropdown">
                Guides
              </a>
              <div class="dropdown-menu" :class="{ 'show': showGuides }" @mouseover="showGuides = true" @mouseleave="hideDropdown">
                <router-link class="dropdown-item" to="/guides/mounts">Mounts</router-link>
                <router-link class="dropdown-item" to="/guides/pets">Pets</router-link>
                <router-link class="dropdown-item" to="/guides/toys">Toys</router-link>
                <router-link class="dropdown-item" to="/guides/transmogs">Transmogs</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGuides: false,
      timeoutId: null
    }
  },
  methods: {
    hideDropdown() {
      this.timeoutId = setTimeout(() => {
        this.showGuides = false
      }, 100)
    }
  },
  beforeUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
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