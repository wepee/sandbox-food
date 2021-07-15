<template>
  <v-container>
    <h1>Families</h1>
    <p>{{ test }}</p>
  </v-container>
</template>

<script>
import { colorizeAffectedCategoriesChart } from '~/components/innovation/InnovationMappers'

export default {
  data () {
    return {
      test: colorizeAffectedCategoriesChart([1, 3, 4])
    }
  }
}
</script>
