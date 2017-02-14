import Ember from 'ember';

export default Ember.Component.extend({

  checked: true,

  name: "Nandu",

  avgBPM: 180,

  restBPM: Ember.computed('avgBPM', 'chartData', function() {
    return this.get('avgBPM') - 15;
  }),

  chartOptions: {
        chart: {
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
              // align: 'left',
              // x: 3,
              // y: -3
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
                        [0, "#FF0000"]
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
    },

  chartData: null,

  didInsertElement() {
    this._super(...arguments);
    var chartData = this.get('chartData');
    chartData.type = 'area';
    this.set('chartData', [chartData]);
  }
});
