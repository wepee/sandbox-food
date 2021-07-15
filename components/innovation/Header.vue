<template>
  <v-row class="py-8" align="center" justify="center">
    <v-col cols="6" sm="4" md="3" lg="1">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Index
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.index }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" sm="4" md="3" lg="2">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Incremental value
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.incrementalValueInnovation }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" sm="4" md="3" lg="2">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Acceleration
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.accelerationDiffusionScalability }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" sm="4" md="3" lg="2">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Ecosystem dynamics
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.ecosystemDynamics }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" sm="4" md="3" lg="2">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Impact value
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.impactValue }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" sm="4" md="3" lg="2">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Risk profile
        </v-card-title>
        <v-card-text v-if="!loading">
          {{ innovation.risk }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" sm="4" md="3" lg="1">
      <v-card elevation="1" :loading="loading" class="text-center" max-width="256">
        <v-card-title class="justify-center">
          Rank
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

.row{
  overflow-x: scroll;
}

.v-card__title {
  word-break: break-word;
  font-size: large;
  color: $SECONDARY;
}

.v-card__text {
  font-size: large;
  font-weight: bold;
  color: $ACCENT!important;
}

</style>
