import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'

import highcharts3D from 'highcharts/highcharts-3d'
import cylinder from 'highcharts/modules/cylinder'
import funnel3d from 'highcharts/modules/funnel3d'
import pyramid3d from 'highcharts/modules/pyramid3d'

highcharts3D(Highcharts)
cylinder(Highcharts)
funnel3d(Highcharts)
pyramid3d(Highcharts)

if (typeof HighchartsVue === 'function') {
  Vue.use(HighchartsVue)
}
