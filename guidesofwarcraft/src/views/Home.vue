<template>
  <div class="home">
    <div class="hero-section">
      <h1>Welcome to Guides of Warcraft</h1>
      <p>Your ultimate resource for World of Warcraft guides and information</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="category in categories" :key="category.name">
          <router-link :to="category.path" class="category-card">
            <i :class="category.icon"></i>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      categories: [
        {
          name: 'Mounts',
          path: '/guides/mounts',
          icon: 'fas fa-horse',
          description: 'Discover rare and unique mounts'
        },
        {
          name: 'Pets',
          path: '/guides/pets',
          icon: 'fas fa-paw',
          description: 'Complete guide to battle pets'
        },
        {
          name: 'Toys',
          path: '/guides/toys',
          icon: 'fas fa-gamepad',
          description: 'Fun items and collectibles'
        },
        {
          name: 'Transmogs',
          path: '/guides/transmogs',
          icon: 'fas fa-tshirt',
          description: 'Best looking gear sets'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  background-image: url('../assets/wow-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin-bottom: 2rem;
}

.category-card {
  background: #2b2b2b;
  border: 1px solid #404040;
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s;
  display: block;
  margin-bottom: 1rem;
}

.category-card:hover {
  transform: translateY(-2px);
  text-decoration: none;
  color: white;
}

.category-card i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd100;
}
</style>