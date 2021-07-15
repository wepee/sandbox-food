<template>
  <v-card class="text-center pa-3">
    <h3>Affected Categories</h3>
    <div v-if="!loading" id="chart">
      <client-only>
        <apexchart type="donut" :options="chartOptions" :series="series" />
      </client-only>
    </div>
  </v-card>
</template>

<script>

import { colorizeAffectedCategoriesChart } from '~/components/innovation/InnovationMappers'
import { CATEGORIES } from '~/constants/categories'

export default {
  name: 'ChartAffectedCategories',
  props: {
    serieData: {
      type: Array,
      default: () => [1, 4, 7]
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      series: CATEGORIES.map(() => 1),
      chartOptions: {
        chart: {
          width: 480,
          type: 'donut'
        },
        tooltip: {
          y: {
            formatter (value, { series, seriesIndex, dataPointIndex, w }) {
              return 'C' + (seriesIndex + 1)
            }
          },
          style: {
            fontSize: '16px'
          }
        },
        legend: {
          show: false
        },
        labels: CATEGORIES.map(a => a.name),
        colors: colorizeAffectedCategoriesChart(this.serieData),
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Affected Categories',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return this.serieData.length
                  }.bind(this)
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '18px'
          },
          formatter: (value, { seriesIndex }) => {
            return 'C' + (seriesIndex + 1)
          }
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
