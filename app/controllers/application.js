import Ember from 'ember';

export default Ember.Controller.extend({
  chartData: [
    {
      name: 'Prabodh',
      gender: 'Male',
      age: 23,
      cell: '(917) 123-456',
      district: 'Brooklyn',
      current_location: 'Abu Dhabi',
      data: [
        [1, 105],
        [2, 130],
        [3, 138],
        [4, 100],
        [5, 152],
        [6, 72],
        [7, 106],
        [8, 86],
        [9, 113],
        [10, 119],
        [11, 152],
        [12, 77],
        [13, 107],
        [14, 79],
        [15, 137],
        [16, 138],
        [17, 73],
        [18, 140],
        [19, 149],
        [20, 99],
        [21, 129],
        [22, 123],
        [23, 119],
        [24, 107]
      ]
    },
    {
      name: 'Waqid',
      gender: 'Male',
      age: 26,
      cell: '(917) 123-456',
      district: 'Bronx',
      current_location: 'NJ',
      data: [
        [1, 157],
        [2, 158],
        [3, 117],
        [4, 148],
        [5, 114],
        [6, 112],
        [7, 94],
        [8, 90],
        [9, 103],
        [10, 76],
        [11, 135],
        [12, 72],
        [13, 147],
        [14, 144],
        [15, 124],
        [16, 159],
        [17, 117],
        [18, 152],
        [19, 137],
        [20, 114],
        [21, 81],
        [22, 130],
        [23, 130],
        [24, 139]
      ]
    }, {
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
    }, {
      name: 'Parth',
      gender: 'Male',
      age: 24,
      cell: '(917) 909-552',
      district: 'NJ',
      current_location: 'Brooklyn',
      data: [
        [1, 62],
        [2, 114],
        [3, 149],
        [4, 156],
        [5, 64],
        [6, 107],
        [7, 77],
        [8, 105],
        [9, 78],
        [10, 77],
        [11, 69],
        [12, 145],
        [13, 149],
        [14, 117],
        [15, 93],
        [16, 106],
        [17, 82],
        [18, 148],
        [19, 100],
        [20, 122],
        [21, 144],
        [22, 110],
        [23, 114],
        [24, 97]
      ]
    }, {
      name: 'Ananth',
      gender: 'Male',
      age: 22,
      cell: '(646) 222-190',
      district: 'Staten Island',
      current_location: 'Brooklyn',
      data: [
        [1, 121],
        [2, 101],
        [3, 81],
        [4, 73],
        [5, 68],
        [6, 158],
        [7, 115],
        [8, 87],
        [9, 133],
        [10, 159],
        [11, 159],
        [12, 134],
        [13, 124],
        [14, 106],
        [15, 119],
        [16, 142],
        [17, 75],
        [18, 145],
        [19, 156],
        [20, 100],
        [21, 77],
        [22, 139],
        [23, 137],
        [24, 99]
      ]
    }, {
      name: "Dong",
      gender: 'Male',
      age: 23,
      cell: '(616) 123-456',
      district: 'Manhattan',
      current_location: "Brooklyn",
      data: [
        [1, 148],
        [2, 123],
        [3, 104],
        [4, 121],
        [5, 110],
        [6, 71],
        [7, 135],
        [8, 108],
        [9, 131],
        [10, 69],
        [11, 80],
        [12, 78],
        [13, 71],
        [14, 104],
        [15, 72],
        [16, 149],
        [17, 63],
        [18, 137],
        [19, 119],
        [20, 77],
        [21, 122],
        [22, 127],
        [23, 109],
        [24, 125]
      ]
    }, {
      name: "Bruce",
      gender: 'Male',
      age: 30,
      cell: '(609) 143-152',
      district: 'Gotham',
      current_location: 'Wayne Towers',
      data: [
        [1, 117],
        [2, 77],
        [3, 144],
        [4, 116],
        [5, 102],
        [6, 121],
        [7, 138],
        [8, 142],
        [9, 159],
        [10, 77],
        [11, 135],
        [12, 141],
        [13, 60],
        [14, 121],
        [15, 128],
        [16, 76],
        [17, 64],
        [18, 116],
        [19, 121],
        [20, 108],
        [21, 103],
        [22, 113],
        [23, 120],
        [24, 144]
      ]
    }, {
      name: "Rachel",
      gender: 'Female',
      age: 30,
      cell: '(901) 124-152',
      district: 'Gotham',
      current_location: 'Downtown',
      data: [
        [1, 76],
        [2, 103],
        [3, 108],
        [4, 141],
        [5, 107],
        [6, 109],
        [7, 101],
        [8, 123],
        [9, 117],
        [10, 100],
        [11, 73],
        [12, 73],
        [13, 99],
        [14, 136],
        [15, 76],
        [16, 148],
        [17, 117],
        [18, 67],
        [19, 158],
        [20, 61],
        [21, 90],
        [22, 157],
        [23, 154],
        [24, 93]
      ]
    }, {
      name: "Gordon",
      gender: 'Male',
      age: 30,
      cell: '(790) 321-152',
      district: 'Gotham',
      current_location: 'GCPD HQ',
      data: [
        [1, 69],
        [2, 61],
        [3, 93],
        [4, 107],
        [5, 97],
        [6, 89],
        [7, 99],
        [8, 155],
        [9, 83],
        [10, 96],
        [11, 64],
        [12, 157],
        [13, 116],
        [14, 122],
        [15, 96],
        [16, 94],
        [17, 149],
        [18, 77],
        [19, 151],
        [20, 134],
        [21, 116],
        [22, 143],
        [23, 113],
        [24, 122]
      ]
    }
  ],

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

  colorUpdate: false,

  init() {
    this._super(...arguments);
    (this.get('chartData') || []).forEach(function(series) {
      series.avgBPM = this.calculateAverage(series.data);
      series.checked = true;
    }.bind(this));
  },

  contentDidChange: Ember.observer('chartData.@each.color', function() {
    debugger;
  }),

  calculateAverage(data) {
    var sum = 0, count=1;
    data.forEach(function(entry) {
      sum += entry[1];
      count += 1;
    });
    return Math.round(sum/count);
  }

});
