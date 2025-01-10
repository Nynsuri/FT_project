<template>
  <div class="toys-page">
    <div class="container">
      <h1 class="page-title">Toys Guides</h1>
      <div class="filters mb-4">
        <div class="row">
          <div class="col-md-3">
            <select class="form-select" v-model="selectedExpansion">
              <option value="">All Sources</option>
              <option v-for="exp in sources" :key="exp" :value="exp">
                {{ exp }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-select" v-model="selectedType">
              <option value="">All Expansions</option>
              <option v-for="type in expansions" :key="type" :value="type">
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
      sources: ['Achievement', 'Vendor', 'Drop', 'Quest', 'Crafting', 'Event'],
      expansions: ['Dragonflight', 'Shadowlands', 'Battle for Azeroth', 'Legion', 'Older']
    }
  }
}
</script>