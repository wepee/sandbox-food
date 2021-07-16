<template>
  <v-card class="text-center pa-3">
    <h3>CSR Profile</h3>
    <div v-if="!loading" id="chart">
      <client-only>
        <apexchart type="bar" height="350" :options="chartOptions" :series="series" />
      </client-only>
    </div>
  </v-card>
</template>

<script>

import { CSR_COLORS } from '~/constants/colors'
import { getAnnotationOffset } from '~/components/innovation/InnovationMappers'
import { INITIAL_OFFSET } from '~/constants/chart'

export default {
  name: 'ChartCsrProfile',
  props: {
    name: {
      type: String,
      default: 'Tracy Chang'
    },
    serieData: {
      type: Number,
      default: 2.5
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      series: [{
        data: [50, 40, 30, 20, 10]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 380
        },
        annotations: {
          yaxis: [{
            y: 'A',
            borderColor: 'black',
            borderWidth: 3,
            strokeDashArray: 0,
            offsetY: INITIAL_OFFSET - getAnnotationOffset(this.serieData) - INITIAL_OFFSET / 10,
            label: {
              offsetY: INITIAL_OFFSET - getAnnotationOffset(this.serieData) - INITIAL_OFFSET / 10,
              borderColor: 'black',
              style: {
                color: '#fff',
                background: 'black'
              },
              text: this.name
            }
          }]
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            }
          }
        },
        colors: CSR_COLORS,
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex]
          },
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E']
        },
        yaxis: {
          labels: {
            show: true,
            seriesName: ['ntm', 'ntm']
          }
        },
        tooltip: {
          theme: 'light',
          enabled: false,
          x: {
            show: false,
            title: {
              formatter (val) {
                return val
              }
            }
          },
          y: {
            title: {
              formatter (val) {
                return ''
              }
            }
          }
        }
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
