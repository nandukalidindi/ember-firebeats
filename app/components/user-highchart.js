import Ember from 'ember';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({
  chartDidLoad: Ember.observer('chart', function() {
    var chart = this.get('chart');
    var color = chart.series[0].color;
    var chartOptions = this.get('chartOptions');
    chartOptions.plotOptions.area.fillColor.stops[0][1] = color;
  })

});
