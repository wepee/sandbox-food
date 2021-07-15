<template>
  <v-card class="text-center pa-3">
    <h3>Potential Durability</h3>
    <div id="chart">
      <client-only>
        <apexchart type="bar" height="350" :options="chartOptions" :series="series" />
      </client-only>
    </div>
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

      series: [{
        name: 'Marine Sprite',
        data: [44]
      }, {
        name: 'Striking Calf',
        data: [53]
      }, {
        name: 'Tank Picture',
        data: [12]
      }, {
        name: 'Bucket Slope',
        data: [9]
      }, {
        name: 'Reborn Kid',
        data: [25]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [1],
          labels: {
            formatter (val) {
              return val + 'K'
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        tooltip: {
          y: {
            formatter (val) {
              return val + 'K'
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
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
