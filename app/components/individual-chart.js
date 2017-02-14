import Ember from 'ember';

export default Ember.Component.extend({
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

    chartData: [
       {
          type: 'area',
          name: 'Nandu',
          gender: 'Male',
          age: 25,
          cell: '(646) 100-929',
          district: 'Bayridge',
          current_location: 'Mercer St',
          data: [
            [1, 93],
            [2, 155],
            [3, 141],
            [4, 133],
            [5, 160],
            [6, 114],
            [7, 128],
            [8, 94],
            [9, 111],
            [10, 160],
            [11, 116],
            [12, 73],
            [13, 138],
            [14, 110],
            [15, 150],
            [16, 89],
            [17, 95],
            [18, 84],
            [19, 125],
            [20, 74],
            [21, 82],
            [22, 145],
            [23, 148],
            [24, 158]
          ]
      }
    ]
});
