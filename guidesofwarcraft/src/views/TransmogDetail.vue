<template>
  <GuideDetail :item="transmog" category="transmogs" />
</template>

<script>
import { useGuideStore } from '../stores/guides'
import GuideDetail from '../components/GuideDetail.vue'

export default {
  name: 'TransmogDetail',
  components: {
    GuideDetail
  },
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
    if (!this.transmog) {
      document.title = '404 Not Found - Guides of Warcraft'
    }
  }
}
</script>