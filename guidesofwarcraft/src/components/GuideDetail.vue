<template>
  <div v-if="item" class="guide-detail">
    <div class="container">
      <div class="back-button mb-4">
        <router-link :to="'/guides/' + category" class="btn btn-secondary">
          <i class="fas fa-arrow-left me-2"></i>Back to {{ categoryTitle }}
        </router-link>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="item.image" :alt="item.name" class="detail-image">
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h1>{{ item.name }}</h1>
            <FavoriteButton :item="item" :category="category" />
          </div>

          <div class="meta-info">
            <span class="difficulty">{{ item.difficulty }}</span>
            <span class="patch">Patch {{ item.patch }}</span>
            <span v-if="item.type" class="type">{{ item.type }}</span>
            <span v-if="item.class" class="class">{{ item.class }}</span>
          </div>
          <p class="description">{{ item.description }}</p>

          <h2>How to obtain</h2>
          <div class="obtain-info">
            <h3>Source: {{ item.source }}</h3>
            <p v-if="item.dropRate">Drop Rate: {{ item.dropRate }}</p>
            <div v-if="item.pieces" class="set-pieces">
              <h4>Set Pieces:</h4>
              <div v-for="piece in item.pieces" :key="piece.slot" class="piece">
                <strong>{{ piece.slot }}:</strong> {{ piece.item }}
                <span class="source">({{ piece.source }})</span>
              </div>
            </div>
            <div class="steps">
              <h4>Steps to obtain:</h4>
              <ol>
                <li v-for="(step, index) in item.obtainSteps" :key="index">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>

          <div class="additional-info" v-if="item.requirements">
            <h3>Requirements</h3>
            <ul>
              <li v-for="(req, index) in item.requirements" :key="index">
                {{ req }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NotFound v-else />
</template>

<script>
import FavoriteButton from './FavoriteButton.vue'
import NotFound from '../views/NotFound.vue'

export default {
  name: 'GuideDetail',
  components: {
    FavoriteButton,
    NotFound
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    categoryTitle() {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1)
    }
  }
}
</script>

<style scoped>
.guide-detail {
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

.difficulty, .patch, .type, .class {
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

.piece {
  margin-bottom: 0.5rem;
}

.piece .source {
  color: #888;
  font-size: 0.9rem;
  margin-left: 0.5rem;
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

@media (max-width: 768px) {
  .guide-detail {
    margin-top: 50px;
    padding-top: 1rem;
  }

  .detail-image {
    max-width: 100%;
  }
}
</style>