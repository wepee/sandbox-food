<template>
  <v-row class="py-8" align="center" justify="center">
    <v-col align="right" cols="4">
      <v-card :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Index Number
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.index }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col align="center" cols="4">
      <v-card :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Risk profile
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.risk }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col align="left" cols="4">
      <v-card :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Ranking / Category
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.ranking }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Header',
  props: {
    innovation: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/variables";

.v-card__title {
  color: $SECONDARY;
}

.v-card__text {
  font-size: x-large;
  font-weight: bold;
  color: $ACCENT!important;
}

</style>
