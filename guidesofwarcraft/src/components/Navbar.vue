<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="Logo" height="40">
      </router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item dropdown"
              @mouseenter="showGuides = true"
              @mouseleave="hideDropdown">
            <a class="nav-link dropdown-toggle" href="#" @click.prevent>
              Guides
            </a>
            <div class="dropdown-menu"
                 :class="{ 'show': showGuides }"
                 @mouseenter="showGuides = true"
                 @mouseleave="hideDropdown">
              <router-link class="dropdown-item" to="/guides/mounts" @click="showGuides = false">
                Mounts
              </router-link>
              <router-link class="dropdown-item" to="/guides/pets" @click="showGuides = false">
                Pets
              </router-link>
              <router-link class="dropdown-item" to="/guides/toys" @click="showGuides = false">
                Toys
              </router-link>
              <router-link class="dropdown-item" to="/guides/transmogs" @click="showGuides = false">
                Transmogs
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
        <SearchBar />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.dropdown-menu {
  margin-top: 0;
  background-color: #343a40;
  border: 1px solid #4e5458;
  min-width: 180px;
}

.dropdown-item {
  color: #fff;
  padding: 0.5rem 1rem;
}

.dropdown-item:hover {
  background-color: #4e5458;
  color: #ffd100;
}

.dropdown-menu {
  display: block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown {
  padding-bottom: 10px;
}

.nav-link {
  padding: 0.5rem 1rem;
}
</style>