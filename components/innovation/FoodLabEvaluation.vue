<template>
  <v-card :loading="loading" class="text-center pa-3">
    <h3>FoodLab Evaluation</h3>
    <div v-if="!loading" id="chart">
      <highcharts :constructor-type="'chart'" :options="chartOptions" />
    </div>
  </v-card>
</template>

<script>
import { EVALUATION_X, EVALUATION_Y } from '~/constants/evaluation'
import { evaluationToXInt, evaluationToYInt } from '~/components/innovation/InnovationMappers'

export default {
  name: 'FoodLabEvaluation',
  props: {
    serieData: {
      type: Object,
      default: () => { return { x: 'Imitator', y: 'Adventurer', name: 'Tracy Chang' } }
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
          type: 'spline'
        },

        title: false,

        annotations: [{
          labels: {
            text: 'ntm',
            point: {
              x: 1,
              y: 2,
              xAxis: 1,
              yAxis: 1
            }
          },
          labelOptions: {
            x: 1, y: 1
          }
        }
        ],

        legend: {
          enabled: false
        },

        xAxis: {
          arrow: true,
          plotLines: [{
            color: 'grey',
            dashStyle: 'solid',
            width: 1,
            value: 5,
            label: {
              align: 'left',
              rotation: 0,
              y: 15,
              style: {
                fontStyle: 'italic'
              },
              text: 'Safe fat intake 65g/day'
            },
            zIndex: 3
          }],
          left: '-8%',
          top: '-50%',
          min: 0,
          max: 10,
          categories: EVALUATION_X
        },

        yAxis: {
          left: '50%',
          visible: true,
          gridLineWidth: 0,
          min: 0,
          max: 10,
          title: '',
          categories: EVALUATION_Y
        },

        tooltip: {
          enabled: false
        },

        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        },

        series: [{
          data: [{ x: evaluationToXInt(this.serieData.x), y: evaluationToYInt(this.serieData.y), name: this.serieData.name }]
        }]
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
