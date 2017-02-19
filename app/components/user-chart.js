import Ember from 'ember';

export default Ember.Component.extend({
  name: Ember.computed('chartData', function() {
    return this.get('chartData.name');
  }),

  avgBPM: Ember.computed('chartData', function() {
    return this.get('chartData.avgBPM');
  }),

  restBPM: Ember.computed('avgBPM', 'chartData', function() {
    return this.get('avgBPM') - 15;
  }),

  chartOptions: Ember.computed('chartData', function() {
    return {
          chart: {
              type: 'area',
              height: 100,
              zoomType: 'x'
          },
          title: {
              text: ''
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              title: { text: '' },
              labels: {
                align: 'left',
                x: 3,
                y: -3
              }
          },
          yAxis: {
              tickInterval: 120,
              title: { text: '' },
              labels: {
                enabled: false
              },
              gridLineWidth: 0,
              minorTickLength: 0,
              tickLength: 0
          },
          exporting: { enabled: false },
          credits: { enabled: false },
          legend: {
              enabled: false
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.y} BPM at {point.x}:00'
          },
          plotOptions: {
              area: {
                  fillColor: {
                      linearGradient: {
                          x1: 0,
                          y1: 0,
                          x2: 0,
                          y2: 0
                      },
                      stops: [
                          [0, this.get('chartData').color]
                      ]
                  },
                  marker: {
                      radius: 2
                  },
                  lineWidth: 1,
                  states: {
                      hover: {
                          lineWidth: 1
                      }
                  },
                  threshold: null
              }
          }
      };
  }),

  chartData: null,

  arrayifiedChartData: Ember.computed('chartData', function() {
    return [this.get('chartData')];
  }),

  actions: {
  }
});
