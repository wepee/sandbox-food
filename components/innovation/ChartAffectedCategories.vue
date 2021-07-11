<template>
  <v-card width="95%" class="text-center pa-3">
    <h3>Affected Categories</h3>
    <div v-if="!loading" id="chart">
      <client-only>
        <apexchart type="treemap" height="350" :options="chartOptions" :series="serieData" />
      </client-only>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ChartAffectedCategories',
  props: {
    serieData: {
      type: Array,
      default: () => [{
        data: [
          {
            x: 'C1',
            y: 10
          },
          {
            x: 'C2',
            y: 10
          },
          {
            x: 'C3',
            y: 10
          },
          {
            x: 'C4',
            y: 10
          },
          {
            x: 'C5',
            y: 1
          },
          {
            x: 'C6',
            y: 1
          },
          {
            x: 'C7',
            y: 1
          },
          {
            x: 'C8',
            y: 1
          },
          {
            x: 'C9',
            y: 1
          },
          {
            x: 'C10',
            y: 1
          },
          {
            x: 'C11',
            y: 1
          },
          {
            x: 'C12',
            y: 1
          },
          {
            x: 'C13',
            y: 1
          },
          {
            x: 'C14',
            y: 1
          },
          {
            x: 'C15',
            y: 1
          },
          {
            x: 'C16',
            y: 1
          }
        ]
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
        legend: {
          show: true,
          showForSingleSeries: true,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: 'bottom',
          horizontalAlign: 'center',
          floating: true,
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 400,
          formatter: undefined,
          inverseOrder: false,
          width: undefined,
          height: undefined,
          tooltipHoverFormatter: undefined,
          customLegendItems: [],
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: undefined,
            useSeriesColors: false
          },
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 5,
            vertical: 0
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          }
        },
        yaxis: {
          labels: {
            formatter (value) {
              return value === 1 ? 'Not affected' : 'Affected'
            }
          }
        },
        xaxis: {
          labels: {
            show: true,
            formatter (value) {
              return value === 'C1'
            }
          }
        },
        chart: {
          height: 350,
          type: 'treemap'
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
