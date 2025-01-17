<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">My Favorites</h1>

      <div class="category-section" v-for="category in categories" :key="category.name">
        <h2>{{ category.title }}</h2>
        <div class="row" v-if="getFavoritesByCategory(category.name).length">
          <div class="col-md-4 mb-4" v-for="item in getFavoritesByCategory(category.name)" :key="item.id">
            <GuideCard
                :title="item.name"
                :description="item.description"
                :image="item.image"
                :difficulty="item.difficulty"
                :patch="item.patch"
                :slug="item.slug"
                :category="category.name"
            >
              <template #actions>
                <FavoriteButton :item="item" :category="category.name" />
              </template>
            </GuideCard>
          </div>
        </div>
        <p v-else class="text-white">No favorite {{ category.name }} yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoritesStore } from '../stores/favorites';
import GuideCard from '../components/GuideCard.vue';
import FavoriteButton from '../components/FavoriteButton.vue';

export default {
  name: 'Favorites',
  components: {
    GuideCard,
    FavoriteButton
  },
  data() {
    return {
      categories: [
        {name: 'mounts', title: 'Favorite Mounts'},
        {name: 'pets', title: 'Favorite Pets'},
        {name: 'toys', title: 'Favorite Toys'},
        {name: 'transmogs', title: 'Favorite Transmogs'}
      ]
    };
  },
  computed: {
    getFavoritesByCategory() {
      const store = useFavoritesStore();
      return store.getFavoritesByCategory;
    }
  }
};
</script>

<style scoped>
.category-section {
  margin-bottom: 3rem;
}

.text-white {
  color: white;
}

.category-section h2 {
  color: var(--accent-color);
  margin-bottom: 1.5rem;
}
</style>
