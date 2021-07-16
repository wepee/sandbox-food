<script src="data.js"></script>
<template>
  <client-only>
    <div id="graph" ref="graphBody" />
  </client-only>
</template>

<script>

import * as d3 from './d3'
import { EVALUATION_X, EVALUATION_Y } from '~/constants/evaluation'

export default {
  name: 'Graph',
  props: [
    'data',
    'EVALUATION_X',
    'EVALUATION_Y'
  ],
  mounted () {
    this.buildGraph()
  },
  methods: {
    buildGraph () {
      const xAxixTicks = EVALUATION_X
      const yAxixTicks = EVALUATION_Y
      const dataset = this.data

      const margin = { top: 20, right: 20, bottom: 50, left: 70 }
      const width = 1200 - margin.left - margin.right
      const height = 500 - margin.top - margin.bottom

      // add svg with margin !important
      // this is svg is actually group
      const svg = d3
        .select('body')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g') // add group to leave margin for axis
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      // the code above should be same

      // var dataset = [
      //   { x: 5, y: 4, name: "Tracy" },
      //   { x: 1, y: 1, name: "ammar" },
      //   { x: -4, y: 4, name: "ziyan" },
      //   { x: -3, y: -2, name: "laraib" },
      //   { x: 3, y: 2, name: "zeeshan" },
      //   { x: 1, y: -1, name: "shifa" },
      // ];

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
        .attr('dx', d => d > 0 ? '-6em' : '2em')
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
        .style('text-anchor', 'end')
        .attr('dx', d => d < 0 ? '-.8em' : '4em')
        .attr('dy', '-0.7em')
        .attr('transform', 'rotate(-90)')

      // add label for x axis and y axis
      svg
        .append('text')
        .text('GLOBAL GROWTH')
        .attr('x', 0 - height / 4)
        .attr('y', 0 - margin.left)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
      svg
        .append('text')
        .text('LOCAL GROWTH')
        .attr('x', 0 - (3 * height) / 4)
        .attr('y', 0 - margin.left)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
      svg
        .append('text')
        .text('LOW RISK')
        .attr('x', width / 4)
        .attr('y', height + margin.bottom)
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('HIGH RISK')
        .attr('x', (width * 3) / 4)
        .attr('y', height + margin.bottom)
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('VISIONARY')
        .attr('x', (width * 3) / 4)
        .attr('y', height / 4)
        .style('opacity', '0.5')
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('FOLLOWER')
        .attr('x', (width) / 4)
        .attr('y', height / 4)
        .style('opacity', '0.5')
        .style('text-anchor', 'middle')
      svg
        .append('text')
        .text('SOLUTIONIST')
        .attr('x', (width) / 4)
        .attr('y', (height * 3) / 4)
        .attr('class', 'graph-text')
        .style('text-anchor', 'middle')
        .style('opacity', '0.5')
      svg
        .append('text')
        .text('TRIAL AND ERROR')
        .attr('x', (width * 3) / 4)
        .attr('y', (height * 3) / 4)
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
    }
  }

}
</script>
