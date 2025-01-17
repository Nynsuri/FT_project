<template>
  <GuideDetail :item="mount" category="mounts" />
</template>

<script>
import { useGuideStore } from '../stores/guides'
import GuideDetail from '../components/GuideDetail.vue'

export default {
  name: 'MountDetail',
  components: {
    GuideDetail
  },
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
    if (!this.mount) {
      document.title = '404 Not Found - Guides of Warcraft'
    }
  }
}
</script>