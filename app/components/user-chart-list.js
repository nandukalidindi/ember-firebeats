import Ember from 'ember';

export default Ember.Component.extend({
  chartData: null,

  dataDidChange: Ember.observer('chartData', function() {
    debugger;
  })
});
