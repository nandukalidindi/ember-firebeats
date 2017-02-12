import Ember from 'ember';

export default Ember.Controller.extend({
  importantProperty: "HELLO",

  modelComputed: Ember.computed(function() {
   return 'something!';
 })
});
