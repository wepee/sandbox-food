<template>
  <v-card class="text-center pa-3">
    <h3>Positioning Comparison</h3>
    <v-data-table
      :sort-by="'index'"
      :sort-desc="true"
      :headers="headers"
      :items="data"
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
    serieData: {
      type: Object,
      default: () => {
        return {
          currentInnovation: { name: 'Tracy Chang innovation', id: 13, countryCode: 'DE', index: 76.54 },
          topInnovations: [{ name: 'innovation 1', countryCode: 'fr', index: 66.6 }, { name: 'innovation 2', countryCode: 'usa', index: 86.6 }, { name: 'innovation 3', countryCode: 'dz', index: 63.6 }, { name: 'innovation 4', countryCode: 'CH', index: 71.6 }]
        }
      }
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Innovation',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Index', value: 'index' }
      ],
      data: [
        this.serieData.currentInnovation,
        ...this.serieData.topInnovations
      ]
    }
  },
  methods: {
    itemRowBackground (item) {
      return item.name === this.serieData.currentInnovation.name ? 'style-2' : 'style-1'
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
