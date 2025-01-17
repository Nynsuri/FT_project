<template>
  <button
      @click.prevent="toggleFavorite"
      class="favorite-btn"
      :class="{ 'is-favorite': isFavorite }"
  >
    <i class="fas" :class="isFavorite ? 'fa-heart text-red' : 'fa-heart text-white'"
    ></i>  </button>
</template>

<script>
import { useFavoritesStore } from '../stores/favorites'

export default {
  name: 'FavoriteButton',
  props: {
    item: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      store: useFavoritesStore()
    }
  },
  computed: {
    isFavorite() {
      return this.store.isFavorite(this.category, this.item.id)
    }
  },
  methods: {
    toggleFavorite() {
      if (this.isFavorite) {
        this.store.removeFavorite(this.category, this.item.id)
      } else {
        this.store.addFavorite(this.category, this.item)
      }
    }
  }
}
</script>

<style scoped>
.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.text-red {
  color: red;
}

.text-white {
  color: white;
}
</style>