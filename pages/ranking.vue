<template>
  <v-container>
    <h1>Ranking</h1>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="data"
        :search="search"
      >
        <template #[`item.name`]="{ item }">
          <div style="display: flex; align-items: center">
            <country-flag style="margin: 1px" :country="item.countryCode" size="small" />
            {{ item.name }}
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { getCategoriesRanking, getInnovation } from '~/services/innovations-services'

export default {
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
      search: '',
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
  head () {
    return {
      title: 'Ranking'
    }
  },
  async mounted () {
    const currentInnovation = await getInnovation()
    const categoriesRanking = await getCategoriesRanking()
    this.data = [currentInnovation, ...categoriesRanking]
  }
}
</script>
