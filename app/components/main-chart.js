import Ember from 'ember';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({
  colorUpdate: null,

  didUpdate() {
    var chart = this.get('chart');
    chart.series.forEach(function(series, index) {
      var correspondingSeries = this.get('content')[index];//this.get('content').findBy('name', series.name);
      if(correspondingSeries.checked === false) {
        series.hide();
      } else {
        series.show();
      }
    }.bind(this));
  },

  chartDidLoad: Ember.observer('chart', function() {
    if(this.get('chart') && !this.get('content.firstObject.color')) {
      this.get('content').forEach(function(series, index) {
        series.color = this.get('chart.series')[index].color;
      }.bind(this));
      this.set('colorUpdate', true);
    }
  })
});
