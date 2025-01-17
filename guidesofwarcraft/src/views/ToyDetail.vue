<template>
  <GuideDetail :item="toy" category="toys" />
</template>

<script>
import { useGuideStore } from '../stores/guides'
import GuideDetail from '../components/GuideDetail.vue'

export default {
  name: 'ToyDetail',
  components: {
    GuideDetail
  },
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
    if (!this.toy) {
      document.title = '404 Not Found - Guides of Warcraft'
    }
  }
}
</script>