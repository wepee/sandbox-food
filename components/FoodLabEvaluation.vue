<template>
  <v-card :loading="loading" class="text-center pa-3">
    <h3>FoodLab Evaluation</h3>
    <div
      id="graphRoot"
      ref="graphRoot"
      :style="{
        width: rootWidth + 'px',
        height: rootHeight + 'px',
        position: 'relative',
      }"
    >
      <div class="triangle-right" />
      <div class="triangle-left" />
      <div class="triangle-up" />
      <div class="triangle-down" />
    </div>
  </v-card>
</template>

<script>
import * as d3 from './d3'
import { EVALUATION_X, EVALUATION_Y } from '~/constants/evaluation'

export default {
  name: 'FoodLabEvaluation',
  props: {
    serieData: {
      type: Array,
      default: () => [{ x: 5, y: 4, name: 'Tracy' }]
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      rootWidth: process.client ? window.innerWidth - 50 : null,
      rootHeight: 500
    }
  },
  mounted () {
    this.buildGraph()
    window.addEventListener('resize', this.resizeWindow)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeWindow)
  },
  methods: {
    buildGraph () {
      d3.select('#graphRoot svg').remove()

      const xAxixTicks = EVALUATION_X
      const yAxixTicks = EVALUATION_Y
      const dataset = this.serieData

      const margin = { top: 20, right: 20, bottom: 50, left: 70 }
      const width = this.rootWidth - margin.left - margin.right
      const height = this.rootHeight - margin.top - margin.bottom

      // add svg with margin !important
      // this is svg is actually group
      const svg = d3
        .select('#graphRoot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g') // add group to leave margin for axis
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      // svg
      //   .append("polygon")
      //   .attr("points", "12.5,3 5,20 20,20")
      //   .attr("class", "triangle");

      dataset.push({ x: 0, y: 0 })
      // for each d, d[0] is the first num, d[1] is the second num
      // set y scale
      const yScale = d3.scaleLinear().rangeRound([0, height]).domain([5, -5]) // show negative
      // add x axis
      const xScale = d3.scaleLinear().rangeRound([0, width]).domain([-5, 5]) // scaleBand is used for  bar chart

      const getIndexNumber = index => (index < 0 ? index + 5 : index + 4)

      // add x and y axis
      const yAxis = d3
        .axisLeft(yScale)
        .tickFormat(d => (d !== 0 ? yAxixTicks[getIndexNumber(d)] : null))

      svg
        .append('g')
        .call(yAxis)
        .attr('transform', 'translate(' + width / 2 + ',0)')
        .selectAll('text')
        .attr('font-family', 'roboto')

        .attr('dx', d => (d > 0 ? '-6em' : '2em'))
        .style('text-anchor', 'start')

      // .attr("dy", "-0.7em");

      const xAxis = d3
        .axisBottom(xScale)
        .tickFormat(d => (d !== 0 ? xAxixTicks[getIndexNumber(d)] : null))

      svg
        .append('g')
        .call(xAxis)
        .attr('transform', 'translate(0,' + height / 2 + ')')
        .selectAll('text')
        .attr('font-family', 'roboto')

        .style('text-anchor', 'end')
        .attr('dx', d => (d < 0 ? '-.8em' : '4em'))
        .attr('dy', '-0.7em')
        .attr('transform', 'rotate(-90)')

      // add label for x axis and y axis
      svg
        .append('text')
        .text('GLOBAL GROWTH')
        .attr('x', 0 - height / 4)
        .attr('y', 0 - margin.left)
        .attr('dy', '1em')
        .attr('font-family', 'roboto')

        .style('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
      svg
        .append('text')
        .text('LOCAL GROWTH')
        .attr('x', 0 - (3 * height) / 4)
        .attr('y', 0 - margin.left)
        .attr('font-family', 'roboto')

        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
      svg
        .append('text')
        .text('LOW RISK')
        .attr('x', width / 4)
        .attr('font-family', 'roboto')

        .attr('y', height + margin.bottom)
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('HIGH RISK')
        .attr('x', (width * 3) / 4)
        .attr('font-family', 'roboto')

        .attr('y', height + margin.bottom)
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('VISIONARY')
        .attr('x', (width * 3) / 4)
        .attr('y', height / 4)
        .attr('font-family', 'roboto')

        .style('opacity', '0.5')
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('FOLLOWER')
        .attr('x', width / 4)
        .attr('y', height / 4)
        .attr('font-family', 'roboto')

        .style('opacity', '0.5')
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('SOLUTIONIST')
        .attr('x', width / 4)
        .attr('y', (height * 3) / 4)
        .attr('class', 'graph-text')
        .attr('font-family', 'roboto')

        .style('text-anchor', 'middle')
        .style('opacity', '0.5')
      svg
        .append('text')
        .text('TRIAL AND ERROR')
        .attr('x', (width * 3) / 4)
        .attr('y', (height * 3) / 4)
        .attr('font-family', 'roboto')
        .style('opacity', '0.5')
        .style('text-anchor', 'middle')

      const circles = svg
        .selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
      circles
        .attr('cx', function (d) {
          return xScale(d.x) // i*(width/dataset.length);
        })
        .attr('cy', function (d) {
          return yScale(d.y)
        }) // for bottom to top
        .attr('r', 5)
      circles.attr('fill', '#e33c28')
    },
    resizeWindow (e) {
      console.log('resize', e)
      this.rootWidth = e.currentTarget.innerWidth - 50
      this.buildGraph()
    }
  }
}
</script>

<style scoped>
h3{
  margin: 10px;
}

 .triangle-right {
   width: 0;
   height: 0;
   border-top: 6.25px solid transparent;
   border-left: 12.5px solid #000;
   border-bottom: 6.25px solid transparent;
   position: absolute;
   left: calc(100% - 12.5px - 7.25px);
   top: calc(50% - 12.5px - 7.25px);
 }
.triangle-left {
  width: 0;
  height: 0;
  border-top: 6.25px solid transparent;
  border-right: 12.5px solid #000;
  border-bottom: 6.25px solid transparent;
  position: absolute;
  left: calc(70px - 11.5px);
  top: calc(50% - 12.5px - 7.25px);
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: 6.25px solid transparent;
  border-right: 6.25px solid transparent;
  border-bottom: 12.5px solid #000;
  position: absolute;
  left: calc(50% + 12.5px + 5.5px);
  top: calc(20px - 11.5px);
}
.triangle-down {
  width: 0;
  height: 0;
  border-left: 6.25px solid transparent;
  border-right: 6.25px solid transparent;
  border-top: 12.5px solid #000;
  position: absolute;
  left: calc(50% + 12.5px + 5.5px);
  top: calc(100% - 50px);
}
#graphRoot {
  position: relative;
}
</style>
