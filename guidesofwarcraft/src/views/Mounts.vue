<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">Mount Guides</h1>

      <div class="filters mb-4">
        <div class="row align-items-center">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedExpansion">
              <option value="">All Expansions</option>
              <option v-for="exp in expansions" :key="exp" :value="exp">
                {{ exp }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-select" v-model="selectedType">
              <option value="">All Types</option>
              <option v-for="type in types" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4" v-for="mount in filteredMounts" :key="mount.id">
          <GuideCard
              :title="mount.name"
              :description="mount.description"
              :image="mount.image"
              :difficulty="mount.difficulty"
              :patch="mount.patch"
              :slug="mount.slug || ''"
              category="mounts"
          >
            <template #actions>
              <FavoriteButton :item="mount" category="mounts" />
            </template>
          </GuideCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGuideStore } from '../stores/guides'
import GuideCard from '../components/GuideCard.vue'
import FavoriteButton from '../components/FavoriteButton.vue'

export default {
  name: 'Mounts',
  components: {
    GuideCard,
    FavoriteButton
  },
  data() {
    return {
      store: useGuideStore(),
      selectedExpansion: '',
      selectedType: '',
      expansions: ['Dragonflight', 'Shadowlands', 'Battle for Azeroth', 'Legion'],
      types: ['Ground', 'Flying', 'Aquatic', 'Special']
    }
  },
  computed: {
    filteredMounts() {
      let mounts = this.store.mounts || []

      if (this.selectedExpansion) {
        mounts = mounts.filter(m => m.expansion === this.selectedExpansion)
      }

      if (this.selectedType) {
        mounts = mounts.filter(m => m.type === this.selectedType)
      }

      return mounts
    }
  },
  created() {
    this.store.fetchMounts()
  }
}
</script>