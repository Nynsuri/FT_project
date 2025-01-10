<template>
  <div id="app" class="dark-theme">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">WoW Guides</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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