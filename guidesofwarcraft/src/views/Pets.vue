<template>
  <div class="pets-page">
    <div class="container">
      <h1 class="page-title">Pets Guides</h1>
      <div class="filters mb-4">
        <div class="row">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedExpansion">
              <option value="">All Types</option>
              <option v-for="exp in types" :key="exp" :value="exp">
                {{ exp }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-select" v-model="selectedType">
              <option value="">All Sources</option>
              <option v-for="type in sources" :key="type" :value="type">
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
  name: 'Pets',
  data() {
    return {
      selectedExpansion: '',
      selectedType: '',
      types: ['Humanoid', 'Dragonkin', 'Flying', 'Undead', 'Critter', 'Magical', 'Elemental', 'Beast', 'Aquatic', 'Mechanical'],
      sources: ['Wild', 'Vendor', 'Quest', 'Achievement', 'Store', 'Promotion']
    }
  }
}
</script>