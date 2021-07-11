<template>
  <v-container>
    <h1>Categories</h1>
    <v-row>
      <v-col v-for="(family, index) in families" :key="index" cols="3">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            :src="family.src"
            height="200px"
          />

          <v-card-subtitle class="pa-2">
            {{ index + 1 }}
          </v-card-subtitle>

          <v-card-title class="pa-2">
            {{ family.name }}
          </v-card-title>

          <v-card-actions>
            <v-btn
              class="action-button"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FAMILIES } from '../constants/families'

export default {
  data () {
    return {
      families: FAMILIES
    }
  },
  head () {
    return {
      title: 'Families'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables";

.action-button{
  color: $SECONDARY;
}

.v-card__subtitle {
  font-size: large;
}
.v-card__title {
  word-break: break-word;
}

</style>
