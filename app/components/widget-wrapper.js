import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['container'],
  filteredWords:function(){
    var words=this.get('words');
    var searchKey=this.get('searchKey');
    if(!searchKey || searchKey===''){
      return words.map(d=>d);
    }
    return words.filter(d=>(d.indexOf(searchKey)===0));
  }.property('searchKey')
});
