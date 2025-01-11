<template>
  <router-link :to="detailLink" class="guide-card-link">
    <div class="guide-card">
      <div class="guide-image">
        <img :src="image" :alt="title">
      </div>
      <div class="guide-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="guide-meta">
          <span class="difficulty">{{ difficulty }}</span>
          <span class="patch">Patch {{ patch }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GuideCard',
  props: {
    title: String,
    description: String,
    image: String,
    difficulty: String,
    patch: String,
    slug: String,
    category: String
  },
  computed: {
    detailLink() {
      return `/guides/${this.category}/${this.slug}`
    }
  }
}
</script>

<style scoped>
.guide-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.guide-card {
  background: #2b2b2b;
  border: 1px solid #404040;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s;
  margin-bottom: 1rem;
}

.guide-card:hover {
  transform: translateY(-2px);
}

.guide-image {
  width: 100%;
  height: auto;
  padding: 1rem;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.guide-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.guide-content {
  padding: 1rem;
}

.guide-content h3 {
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.guide-content p {
  color: #999;
  margin: 0;
  margin-bottom: 1rem;
}

.guide-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #888;
}
</style>