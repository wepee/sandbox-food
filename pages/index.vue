<template>
  <v-row justify="center" class="ma-0 fill-height">
    <v-col cols="12" sm="12" md="4" lg="2" class="pa-0">
      <v-card />
    </v-col>
    <v-col cols="12" sm="12" md="8" lg="10">
      <v-card />
      <v-row justify="center">
        <v-col align="center" cols="12" sm="12" md="6">
          <v-card height="400">
            <v-card-title>An other graph</v-card-title>
          </v-card>
        </v-col>
        <v-col align="center" cols="12" sm="12" md="6">
          <FoodLabEvaluation :loading="loading" />
        </v-col>
        <v-col align="center" cols="12" sm="12" md="6">
          <v-card height="400">
            <v-card-title>An other graph</v-card-title>
          </v-card>
        </v-col>
        <v-col align="center" cols="12" sm="12" md="6">
          <v-card height="400">
            <v-card-title>An other graph</v-card-title>
          </v-card>
        </v-col>
        <v-col align="center" cols="12" sm="12" md="6">
          <v-card height="400">
            <v-card-title>An other graph</v-card-title>
          </v-card>
        </v-col>
        <v-col align="center" cols="12" sm="12" md="6">
          <v-card height="400">
            <v-card-title>An other graph</v-card-title>
          </v-card>
        </v-col>
        <v-col align="center" cols="12" sm="12" md="6">
          <v-card height="400">
            <v-card-title>An other graph</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

import FoodLabEvaluation from '~/components/FoodLabEvaluation'

export default {
  components: {
    FoodLabEvaluation
  },
  data () {
    return {
      loading: true,
      innovation: null,
      categoryRanking: []
    }
  },
  head () {
    return {
      title: 'Innovation'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
