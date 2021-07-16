<template>
  <v-container>
    <h1>Families</h1>
    <graph :data="[{ x: 5, y: 4, name: 'Tracy' }]" />
    <p>{{ test }}</p>
  </v-container>
</template>

<script>
import { colorizeAffectedCategoriesChart } from '~/components/innovation/InnovationMappers'
import graph from '~/components/innovation/graph'

export default {
  components: {
    graph
  },
  data () {
    return {
      test: colorizeAffectedCategoriesChart([1, 3, 4])
    }
  }
}
</script>
