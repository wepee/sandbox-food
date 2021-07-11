<template>
  <v-card :loading="Loading" width="95%" class="text-center pa-3">
    <h3>FoodLab Evaluation</h3>
    <div v-if="!Loading" id="chart">
      <client-only>
        <apexchart type="bubble" height="350" :options="chartOptions" :series="series" />
      </client-only>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FoodLabEvaluation',
  props: {
    serieData: {
      type: Array,
      default: () => [2, 3, 1, 3.7, 4]
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      series: [{
        name: 'Bubble1',
        data: [[3, 3, 10]]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bubble'
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        title: {
          text: 'Simple Bubble Chart'
        },
        xaxis: {
          max: 10,
          labels: {
            formatter (val) {
              return val
            }
          }
        },
        yaxis: {
          max: 10,
          labels: {
            formatter (val) {
              return val
            }
          }
        },
        annotations: {
          xaxis: [
            {
              x: 0,
              x2: 5,
              fillColor: '#B3F7CA',
              label: {
                text: 'X-axis range'
              }
            }
          ],
          yaxis: [
            {
              y: 5,
              y2: 0,
              borderColor: '#000',
              fillColor: '#FEB019',
              label: {
                text: 'Y-axis range'
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    SerieData () {
      return this.serieData
    },
    Loading () {
      return this.loading
    }
  }
}
</script>

<style scoped>
h3{
  margin: 10px;
}
</style>
