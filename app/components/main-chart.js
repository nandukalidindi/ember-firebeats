import Ember from 'ember';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({
  contentDidChange: Ember.observer('content.@each.name', function() {
    debugger;
  })
});
