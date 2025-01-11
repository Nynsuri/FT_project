<template>
  <div class="toys-page">
    <div class="container">
      <h1 class="page-title">Toy Collection Guides</h1>

      <div class="filters mb-4">
        <div class="row">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedSource">
              <option value="">All Sources</option>
              <option v-for="source in sources" :key="source" :value="source">
                {{ source }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-select" v-model="selectedExpansion">
              <option value="">All Expansions</option>
              <option v-for="exp in expansions" :key="exp" :value="exp">
                {{ exp }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4" v-for="toy in filteredToys" :key="toy.id">
          <GuideCard
              :title="toy.name"
              :description="toy.description"
              :image="toy.image"
              :difficulty="toy.difficulty"
              :patch="toy.patch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGuideStore } from '../stores/guides'
import GuideCard from '../components/GuideCard.vue'

export default {
  name: 'Toys',
  components: {
    GuideCard
  },
  data() {
    return {
      store: useGuideStore(),
      selectedSource: '',
      selectedExpansion: '',
      sources: ['Achievement', 'Vendor', 'Drop', 'Quest', 'Crafting', 'Event'],
      expansions: ['Dragonflight', 'Shadowlands', 'Battle for Azeroth', 'Legion', 'Older']
    }
  },
  computed: {
    filteredToys() {
      let toys = this.store.toys

      if (this.selectedSource) {
        toys = toys.filter(t => t.source === this.selectedSource)
      }

      if (this.selectedExpansion) {
        toys = toys.filter(t => t.expansion === this.selectedExpansion)
      }

      return toys
    }
  },
  created() {
    this.store.fetchToys()
  }
}
</script>