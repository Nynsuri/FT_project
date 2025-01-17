<template>
  <router-link to="/favorites" class="favorite-counter">
    <i class="fas fa-heart"></i>
    <span class="count" v-if="totalFavorites > 0">{{ totalFavorites }}</span>
  </router-link>
</template>

<script>
import { useFavoritesStore } from '../stores/favorites'
import { computed } from 'vue'

export default {
  name: 'FavoriteCounter',
  setup() {
    const store = useFavoritesStore()
    const totalFavorites = computed(() => store.totalFavorites)

    return {
      totalFavorites
    }
  }
}
</script>

<style scoped>
.favorite-counter {
  position: relative;
  color: var(--text-color);
  text-decoration: none;
  margin-left: 1rem;
}

.count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent-color);
  color: var(--primary-color);
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  min-width: 18px;
  text-align: center;
}
</style>