import Ember from 'ember';

export default Ember.Component.extend({
  chartData: null,

  init() {
    this._super(...arguments);
    (this.get('chartData') || []).forEach(function(series) {
      series.avgBPM = this.calculateAverage(series.data);
    }.bind(this));
  },

  didInsertElement() {
    this._super(...arguments);
  },

  calculateAverage(data) {
    var sum = 0, count=1;
    data.forEach(function(entry) {
      sum += entry[1];
      count += 1;
    });
    return Math.round(sum/count)
  }
});
