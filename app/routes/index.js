import Ember from 'ember';

export default Ember.Route.extend({
model(){
return $.getJSON('res/words.json');
}
});
