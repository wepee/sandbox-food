<template>
  <v-card width="95%" class="text-center pa-3">
    <h3>CSR Profile</h3>
    <div v-if="!loading" id="chart">
      <client-only>
        <apexchart type="bar" height="350" :options="chartOptions" :series="serieData" />
      </client-only>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ChartCsrProfile',
  props: {
    serieData: {
      type: Array,
      default: () => [{
        data: [{
          x: '2011',
          y: 12,
          goals: [
            {
              name: 'Expected',
              value: 14,
              strokeWidth: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2012',
          y: 44,
          goals: [
            {
              name: 'Expected',
              value: 54,
              strokeWidth: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2013',
          y: 54,
          goals: [
            {
              name: 'Expected',
              value: 52,
              strokeWidth: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2014',
          y: 66,
          goals: [
            {
              name: 'Expected',
              value: 65,
              strokeWidth: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2015',
          y: 81,
          goals: [
            {
              name: 'Expected',
              value: 66,
              strokeWidth: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2016',
          y: 67,
          goals: [
            {
              name: 'Expected',
              value: 70,
              strokeWidth: 5,
              strokeColor: '#775DD0'
            }
          ]
        }]
      }]
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E']
        }
      }
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
