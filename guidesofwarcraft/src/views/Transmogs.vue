<template>
  <div class="transmogs-page">
    <div class="container">
      <h1 class="page-title">Transmog Guides</h1>
      <div class="filters mb-4">
        <div class="row">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedExpansion">
              <option value="">All Classes</option>
              <option v-for="exp in classes" :key="exp" :value="exp">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mounts',
  data() {
    return {
      selectedExpansion: '',
      selectedType: '',
      classes: ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demon Hunter', 'Evoker'],
      types: ['Cloth', 'Leather', 'Mail', 'Plate']
    }
  }
}
</script>