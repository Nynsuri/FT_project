Copy<template>
  <div class="transmog-detail" v-if="transmog">
    <div class="container">
      <div class="back-button mb-4">
        <router-link to="/guides/transmogs" class="btn btn-secondary">
          <i class="fas fa-arrow-left me-2"></i>Back to Transmogs
        </router-link>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="transmog.image" :alt="transmog.name" class="detail-image">
        </div>
        <div class="col-md-6">
          <h1>{{ transmog.name }}</h1>
          <div class="meta-info">
            <span class="difficulty">{{ transmog.difficulty }}</span>
            <span class="patch">Patch {{ transmog.patch }}</span>
            <span class="type">{{ transmog.type }}</span>
            <span class="class">{{ transmog.class }}</span>
          </div>
          <p class="description">{{ transmog.description }}</p>

          <div class="set-info">
            <h2>Set Information</h2>
            <div v-if="transmog.pieces" class="set-pieces">
              <h3>Set Pieces</h3>
              <div class="piece" v-for="piece in transmog.pieces" :key="piece.slot">
                <div class="piece-header">
                  <strong>{{ piece.slot }}</strong>
                  <span class="source">{{ piece.source }}</span>
                </div>
                <div class="piece-name">{{ piece.item }}</div>
              </div>
            </div>
          </div>

          <div class="obtain-info">
            <h3>How to obtain</h3>
            <div class="steps">
              <ol>
                <li v-for="(step, index) in transmog.obtainSteps" :key="index">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>

          <div class="additional-info" v-if="transmog.requirements">
            <h3>Requirements</h3>
            <ul>
              <li v-for="(req, index) in transmog.requirements" :key="index">
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
      <router-link to="/guides/transmogs" class="btn btn-secondary">
        <i class="fas fa-arrow-left me-2"></i>Back to Transmogs
      </router-link>
    </div>
    <h1 class="page-title">Transmog set not found</h1>
    <p>The requested transmog set could not be found.</p>
  </div>
</template>

<script>
import { useGuideStore } from '../stores/guides'

export default {
  name: 'TransmogDetail',
  data() {
    return {
      transmog: null
    }
  },
  created() {
    const store = useGuideStore()
    store.fetchTransmogs()
    const slug = this.$route.params.slug
    this.transmog = store.getTransmogBySlug(slug)
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

.transmog-detail {
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
  flex-wrap: wrap;
}

.class-type, .armor-type, .difficulty {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: var(--secondary-color);
}

.set-info, .obtain-info, .requirements {
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--secondary-color);
  border-radius: 8px;
}

.set-pieces ul {
  list-style: none;
  padding: 0;
}

.set-pieces li {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.slot {
  font-weight: bold;
  color: var(--accent-color);
}

.source {
  color: #888;
}

.piece {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.piece-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.piece-header strong {
  color: var(--accent-color);
}

.source {
  font-size: 0.9rem;
  color: #888;
}

.piece-name {
  font-size: 1.1rem;
}

.class {
  background-color: var(--secondary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
</style>