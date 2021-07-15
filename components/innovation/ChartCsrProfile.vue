<template>
  <v-card class="text-center pa-3">
    <h3>CSR Profile</h3>
    <div v-if="!loading" id="chart">
      <client-only>
        <highcharts :options="chartOptions" :callback="myCallback" />
      </client-only>
    </div>
  </v-card>
</template>

<script>

import { CSR_COLORS } from '~/constants/colors'

export default {
  name: 'ChartCsrProfile',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chartOptions: {
        annotations: [{
          shapes: [{
            point: 30,
            type: 'circle',
            r: 10
          }, {
            point: '3',
            type: 'rect',
            width: 20,
            height: 20
          }],
          labels: [{
            point: { x: 'D', y: 10 },
            text: 'Label'
          }]
        }],
        chart: {
          type: 'pyramid3d',
          options3d: {
            enabled: true,
            alpha: 10,
            depth: 50,
            viewDistance: 50
          }
        },
        colorByPoint: true,
        colors: CSR_COLORS,
        title: {
          text: ''
        },
        plotOptions: {

          series: {
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>',
              allowOverlap: true,
              x: 10,
              y: -5
            },
            width: '60%',
            height: '80%',
            center: ['50%', '45%']
          }
        },
        series: [
          {
            data: [
              ['E', 10],
              ['D', 10],
              [' ', 5],
              ['Your innovation', 1],
              ['C', 5],
              ['B', 10],
              ['A', 10]
            ]
          }
        ]
      }
    }
  },
  mounted () {},
  methods: {
    myCallback () {
      console.log('this is callback function')
    }
  }
}
</script>

<style>
</style>
