<template>
  <v-card class="text-center pa-3">
    <h3>Potential Durability</h3>
    <v-data-table
      :loading="loading"
      :sort-by="'index'"
      :sort-desc="true"
      :headers="headers"
      :items="loading ? [] : data"
      :items-per-page="5"
      :item-class="itemRowBackground"
      @click:row="rowClick"
    >
      <template #[`item.name`]="{ item }">
        <div style="display: flex; align-items: center">
          <country-flag style="margin: 1px" :country="item.countryCode" size="small" />
          {{ item.name }}
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'ChartPotentialDurability',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    currentInnovation: {
      type: Object,
      default: () => {
        return { name: 'Tracy Chang', id: 13, countryCode: 'DE', index: 76.54 }
      }
    },
    categoryRanking: {
      type: Array,
      default: () => {
        return [{ name: 'innovation 1', countryCode: 'fr', index: 66.6 }, { name: 'innovation 2', countryCode: 'usa', index: 86.6 }, { name: 'innovation 3', countryCode: 'dz', index: 63.6 }, { name: 'innovation 4', countryCode: 'CH', index: 71.6 }]
      }
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Innovation name',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Incremental', align: 'center', value: 'incrementalValueInnovation' },
        { text: 'Acceleration', align: 'center', value: 'accelerationDiffusionScalability' },
        { text: 'Ecosystem dynamics', align: 'center', value: 'ecosystemDynamics' },
        { text: 'Index', align: 'center', value: 'index' }
      ],
      data: [
        this.currentInnovation,
        ...this.categoryRanking
      ]
    }
  },

  methods: {
    itemRowBackground (item) {
      return item.name === this.currentInnovation.name ? 'style-2' : 'style-1'
    },
    rowClick (item) {
      this.$router.replace('/innovation?id=' + item.id)
    }
  }
}
</script>

<style scoped>
h3{
  margin: 10px;
}
</style>

<style>
h3{
  margin: 10px;
}

.style-1 {
}

.style-2 {
  background-color: lightblue;

}
</style>
