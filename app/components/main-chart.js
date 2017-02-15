import Ember from 'ember';

export default Ember.Component.extend({

  chartOptions: {
      chart: { type: 'spline' },
      title: { text: '' },
      subtitle: { text: '' },
      exporting: { enabled: false },
      credits: { enabled: false },
      xAxis: [
        {
          title: { text: '' },
          gridLineWidth: 1,
          tickInterval: 1
        },
        {
          className: "highcharts-color-1",
          opposite: true,
        }
      ],
      legend: {
          enabled: false
      },
      yAxis: {
        title: { text: '' },
        tickInterval: 60,
        gridLineWidth: 0,
        minorTickLength: 0,
        tickLength: 0
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.y} BPM at {point.x}:00'
      },
      plotOptions: {
        series: {
          // lineWidth: 2,
        },
        spline: {
          marker: {
              enabled: false
          }
        }
      },
      lang: {
          noData: "No data to display"
      },
      noData: {
          style: {
              fontWeight: 'bold',
              fontSize: '15px',
              color: '#303030'
          }
      }
  },

  chartData: null
});
