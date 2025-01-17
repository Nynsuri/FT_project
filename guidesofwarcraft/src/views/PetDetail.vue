<template>
  <div class="pet-detail" v-if="pet">
    <div class="container">
      <div class="back-button mb-4">
        <router-link to="/guides/pets" class="btn btn-secondary">
          <i class="fas fa-arrow-left me-2"></i>Back to Pets
        </router-link>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="pet.image" :alt="pet.name" class="detail-image">
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h1>{{ pet.name }}</h1>
            <FavoriteButton :item="pet" category="pets" />
          </div>

          <div class="meta-info">
            <span class="difficulty">{{ pet.difficulty }}</span>
            <span class="patch">Patch {{ pet.patch }}</span>
            <span class="type">{{ pet.type }}</span>
          </div>
          <p class="description">{{ pet.description }}</p>

          <div class="battle-info">
            <h2>Battle Pet Information</h2>
            <div class="stats">
              <p><strong>Type:</strong> {{ pet.type }}</p>
              <p><strong>Level:</strong> {{ pet.level }}</p>
            </div>

            <div v-if="pet.abilities" class="abilities">
              <h3>Abilities</h3>
              <div class="ability-list">
                <div v-for="ability in pet.abilities" :key="ability.name" class="ability">
                  <h4>{{ ability.name }}</h4>
                  <p>{{ ability.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="obtain-info">
            <h2>How to obtain</h2>
            <h3>Source: {{ pet.source }}</h3>
            <div class="steps" v-if="pet.obtainSteps">
              <h4>Steps to obtain:</h4>
              <ol>
                <li v-for="(step, index) in pet.obtainSteps" :key="index">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="back-button mb-4">
      <router-link to="/guides/pets" class="btn btn-secondary">
        <i class="fas fa-arrow-left me-2"></i>Back to Pets
      </router-link>
    </div>
    <h1 class="page-title">Pet not found</h1>
    <p>The requested pet could not be found.</p>
  </div>
</template>

<script>
import { useGuideStore } from '../stores/guides'
import FavoriteButton from '../components/FavoriteButton.vue'

export default {
  name: 'PetDetail',
  components: {
    FavoriteButton
  },
  data() {
    return {
      pet: null
    }
  },
  created() {
    const store = useGuideStore()
    store.fetchPets()
    const slug = this.$route.params.slug
    this.pet = store.getPetBySlug(slug)
  }
}
</script>

<style scoped>
.back-button {
  margin-top: 1rem;
}

.btn-secondary {
  background-color: var(--secondary-color);
  border-color: var(--border-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--primary-color);
}

.pet-detail {
  padding-top: 2rem;
  margin-top: 25px;
}

.detail-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.meta-info {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}

.pet-type, .difficulty {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: var(--secondary-color);
}

.pet-stats {
  margin: 2rem 0;
  padding: 1rem;
  background: var(--secondary-color);
  border-radius: 8px;
}

.abilities {
  margin-top: 1rem;
}

.abilities ul {
  list-style-type: none;
  padding: 0;
}

.ability-list {
  list-style: none;
  padding: 0;
}

.ability-list li {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.ability-list strong {
  color: var(--accent-color);
  display: block;
  margin-bottom: 0.5rem;
}
</style>