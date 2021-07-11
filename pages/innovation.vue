<template>
  <v-row justify="center" class="ma-0 fill-height">
    <v-col sm="12" md="4" lg="2" class="pa-0">
      <InnovationInfoCard :loading="loading" :innovation="innovation" />
    </v-col>
    <v-col sm="12" md="8" lg="10">
      <Header :loading="loading" :innovation="innovation" />
      <v-row justify="center">
        <v-col align="center" sm="12" md="6">
          <Map :loading="loading" :city="loading ? '' : innovation.city" :markers="loading ? [] : [innovation.location]" />
        </v-col>
        <v-col align="center" sm="12" md="6">
          <FoodLabEvaluation :loading="loading" />
        </v-col>
        <v-col align="center" sm="12" md="6">
          <ChartPotentialDurability />
        </v-col>
        <v-col align="center" sm="12" md="6">
          <ChartAffectedCategories :loading="loading" />
        </v-col>
        <v-col align="center" sm="12" md="6">
          <ChartCsrProfile :loading="loading" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

import Map from '../components/commons/Map'
import InnovationInfoCard from '../components/innovation/InnovationInfoCard'
import Header from '../components/innovation/Header'
import FoodLabEvaluation from '../components/innovation/FoodLabEvaluation'
import ChartPotentialDurability from '../components/innovation/ChartPotentialDurability'
import ChartAffectedCategories from '../components/innovation/ChartAffectedCategories'
import { getInnovation } from '../services/innovations-services'
import ChartCsrProfile from '../components/innovation/ChartCsrProfile'

export default {
  components: {
    ChartCsrProfile,
    ChartPotentialDurability,
    Map,
    InnovationInfoCard,
    Header,
    FoodLabEvaluation,
    ChartAffectedCategories
  },
  data () {
    return {
      loading: true,
      innovation: null
    }
  },
  head () {
    return {
      title: 'Innovation'
    }
  },
  async mounted () {
    this.loading = true
    this.innovation = await getInnovation()
    this.loading = false
  }
}
</script>

<style scoped lang="scss">

</style>
