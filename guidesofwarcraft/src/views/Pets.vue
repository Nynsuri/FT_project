<template>
  <div class="pets-page">
    <div class="container">
      <h1 class="page-title">Battle Pet Guides</h1>

      <div class="filters mb-4">
        <div class="row align-items-center">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedType">
              <option value="">All Types</option>
              <option v-for="type in types" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-select" v-model="selectedSource">
              <option value="">All Sources</option>
              <option v-for="source in sources" :key="source" :value="source">
                {{ source }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4" v-for="pet in filteredPets" :key="pet.id">
          <GuideCard
              :title="pet.name"
              :description="pet.description"
              :image="pet.image"
              :difficulty="pet.difficulty"
              :patch="pet.patch"
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
  name: 'Pets',
  components: {
    GuideCard,
  },
  data() {
    return {
      store: useGuideStore(),
      selectedType: '',
      selectedSource: '',
      searchQuery: '',
      types: ['Humanoid', 'Dragonkin', 'Flying', 'Undead', 'Critter', 'Magical', 'Elemental', 'Beast', 'Aquatic', 'Mechanical'],
      sources: ['Wild', 'Vendor', 'Quest', 'Achievement', 'Store', 'Promotion']
    }
  },
  computed: {
    filteredPets() {
      let pets = this.store.pets

      if (this.selectedType) {
        pets = pets.filter(p => p.type === this.selectedType)
      }

      if (this.selectedSource) {
        pets = pets.filter(p => p.source === this.selectedSource)
      }

      return pets
    }
  },
  created() {
    this.store.fetchPets()
  }
}
</script>