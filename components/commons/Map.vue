<template>
  <v-card :loading="loading" class="text-center pa-3">
    <h3>Location : {{ city }}</h3>
    <div v-if="!loading" id="map-wrap" style="height: 350px">
      <client-only>
        <l-map :zoom="zoom" :center="center" style="z-index: 1">
          <l-tile-layer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png" />
          <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker" />
        </l-map>
      </client-only>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Map',
  props: {
    zoom: {
      type: Number,
      default: 2
    },
    center: {
      type: Array,
      default: () => [37.2689, -121.9236]
    },
    markers: {
      type: Array,
      default: () => [[37.2689, 121.9236]]
    },
    city: {
      type: String,
      default: () => 'California'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
h3{
  margin: 10px;
}
</style>
