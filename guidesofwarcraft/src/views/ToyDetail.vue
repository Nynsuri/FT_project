<template>
  <div class="toy-detail" v-if="toy">
    <div class="container">
      <div class="back-button mb-4">
        <router-link to="/guides/toys" class="btn btn-secondary">
          <i class="fas fa-arrow-left me-2"></i>Back to Toys
        </router-link>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="toy.image" :alt="toy.name" class="detail-image">
        </div>
        <div class="col-md-6">
          <h1>{{ toy.name }}</h1>
          <div class="meta-info">
            <span class="difficulty">{{ toy.difficulty }}</span>
            <span class="patch">Patch {{ toy.patch }}</span>
            <span class="expansion">{{ toy.expansion }}</span>
          </div>
          <p class="description">{{ toy.description }}</p>

          <div class="toy-info">
            <h2>Toy Information</h2>
            <div class="cooldown-info" v-if="toy.cooldown || toy.duration">
              <p v-if="toy.cooldown"><strong>Cooldown:</strong> {{ toy.cooldown }}</p>
              <p v-if="toy.duration"><strong>Duration:</strong> {{ toy.duration }}</p>
            </div>
          </div>

          <div class="obtain-info">
            <h3>How to obtain</h3>
            <p><strong>Source:</strong> {{ toy.source }}</p>
            <div class="steps">
              <h4>Steps to obtain:</h4>
              <ol>
                <li v-for="(step, index) in toy.obtainSteps" :key="index">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>

          <div class="additional-info" v-if="toy.requirements">
            <h3>Requirements</h3>
            <ul>
              <li v-for="(req, index) in toy.requirements" :key="index">
                {{ req }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="back-button mb-4">
      <router-link to="/guides/toys" class="btn btn-secondary">
        <i class="fas fa-arrow-left me-2"></i>Back to Toys
      </router-link>
    </div>
    <h1 class="page-title">Toy not found</h1>
    <p>The requested toy could not be found.</p>
  </div>
</template>

<script>
import { useGuideStore } from '../stores/guides'

export default {
  name: 'ToyDetail',
  data() {
    return {
      toy: null
    }
  },
  created() {
    const store = useGuideStore()
    store.fetchToys()
    const slug = this.$route.params.slug
    this.toy = store.getToyBySlug(slug)
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

.toy-detail {
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

.expansion, .difficulty {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: var(--secondary-color);
}

.toy-info, .obtain-info, .additional-info {
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--secondary-color);
  border-radius: 8px;
}

.cooldown-info {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
}

.cooldown-info p {
  margin: 0.5rem 0;
}

.cooldown-info strong {
  color: var(--accent-color);
}
</style>