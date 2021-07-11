<template>
  <v-card width="95%" class="text-center pa-3">
    <h3>Potential Durability</h3>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      :item-class="itemRowBackground"
    />
  </v-card>
</template>

<script>
export default {
  name: 'ChartPotentialDurability',
  props: {
    serieData: {
      type: Array,
      default: () => [80, 50, 30, 40, 100, 20]
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        }
      ]
    }
  },
  methods: {
    itemRowBackground (item) {
      return item.protein > 4.2 ? 'style-1' : 'style-2'
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
