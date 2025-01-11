<template>
  <div class="mount-detail" v-if="mount">
    <div class="container">
      <div class="back-button mb-4">
        <router-link to="/guides/mounts" class="btn btn-secondary">
          <i class="fas fa-arrow-left me-2"></i>Back to Mounts
        </router-link>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img :src="mount.image" :alt="mount.name" class="detail-image">
        </div>
        <div class="col-md-6">
          <h1>{{ mount.name }}</h1>
          <div class="meta-info">
            <span class="difficulty">{{ mount.difficulty }}</span>
            <span class="patch">Patch {{ mount.patch }}</span>
          </div>
          <p class="description">{{ mount.description }}</p>

          <h2>How to obtain</h2>
          <div class="obtain-info">
            <h3>Source: {{ mount.source }}</h3>
            <p v-if="mount.dropRate">Drop Rate: {{ mount.dropRate }}</p>

            <div class="steps">
              <h4>Steps to obtain:</h4>
              <ol>
                <li v-for="(step, index) in mount.obtainSteps" :key="index">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>

          <div class="additional-info" v-if="mount.requirements">
            <h3>Requirements</h3>
            <ul>
              <li v-for="(req, index) in mount.requirements" :key="index">
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
      <router-link to="/guides/mounts" class="btn btn-secondary">
        <i class="fas fa-arrow-left me-2"></i>Back to Mounts
      </router-link>
    </div>
    <h1 class="page-title">Mount not found</h1>
    <p>The requested mount could not be found.</p>
  </div>
</template>

<script>
import { useGuideStore } from '../stores/guides'

export default {
  name: 'MountDetail',
  data() {
    return {
      mount: null
    }
  },
  created() {
    const store = useGuideStore()
    store.fetchMounts()
    const slug = this.$route.params.slug
    this.mount = store.getMountBySlug(slug)
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

.mount-detail {
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

.difficulty, .patch {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: var(--secondary-color);
}

h1 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

h2, h3, h4 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.obtain-info {
  margin: 2rem 0;
  padding: 1rem;
  background: var(--secondary-color);
  border-radius: 8px;
}

.steps {
  margin-top: 1rem;
}

.steps ol {
  padding-left: 1.5rem;
}

.steps li {
  margin-bottom: 0.5rem;
}

.additional-info {
  margin-top: 2rem;
  padding: 1rem;
  background: var(--secondary-color);
  border-radius: 8px;
}

.additional-info ul {
  list-style-type: none;
  padding-left: 0;
}

.additional-info li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.additional-info li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .mount-detail {
    margin-top: 50px;
    padding-top: 1rem;
  }

  .detail-image {
    max-width: 100%;
  }
}
</style>