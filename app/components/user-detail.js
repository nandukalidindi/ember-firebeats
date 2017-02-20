import Ember from 'ember';

export default Ember.Component.extend({

  currentBPM: Ember.computed('series', function() {
     var currentTime = 11;
     return this.get('series').data.find(function(tuple) {
       return tuple[0] === currentTime;
     })[1];
  })
});
