<template>
  <GuideDetail :item="pet" category="pets" />
</template>

<script>
import { useGuideStore } from '../stores/guides'
import GuideDetail from '../components/GuideDetail.vue'

export default {
  name: 'PetDetail',
  components: {
    GuideDetail
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
    if (!this.pet) {
      document.title = '404 Not Found - Guides of Warcraft'
    }
  }
}
</script>