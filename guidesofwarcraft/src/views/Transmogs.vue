<template>
  <div class="transmogs-page">
    <div class="container">
      <h1 class="page-title">Transmog Guides</h1>

      <div class="filters mb-4">
        <div class="row">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedClass">
              <option value="">All Classes</option>
              <option v-for="class_ in classes" :key="class_" :value="class_">
                {{ class_ }}
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
        <div class="col-md-4 mb-4" v-for="transmog in filteredTransmogs" :key="transmog.id">
          <GuideCard
              :title="transmog.name"
              :description="transmog.description"
              :image="transmog.image"
              :difficulty="transmog.difficulty"
              :patch="transmog.patch"
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
  name: 'Transmogs',
  components: {
    GuideCard
  },
  data() {
    return {
      store: useGuideStore(),
      selectedClass: '',
      selectedType: '',
      classes: ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demon Hunter', 'Evoker'],
      types: ['Cloth', 'Leather', 'Mail', 'Plate']
    }
  },
  computed: {
    filteredTransmogs() {
      let transmogs = this.store.transmogs

      if (this.selectedClass) {
        transmogs = transmogs.filter(t => t.class === this.selectedClass)
      }

      if (this.selectedType) {
        transmogs = transmogs.filter(t => t.type === this.selectedType)
      }

      return transmogs
    }
  },
  created() {
    this.store.fetchTransmogs()
  }
}
</script>