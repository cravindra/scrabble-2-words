import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['container'],
  filteredWords:function(){
    var words=this.get('words');
    var searchKey=this.get('searchKey');
    if(!searchKey || searchKey===''){
      return words.map(d=>d);
    }
    return words.filter(d=>(d.w.indexOf(searchKey.toUpperCase())===0));
  }.property('searchKey'),
  showDetail:function(){
    var fw=this.get('filteredWords');
    return fw.length===1;
  }.property('filteredWords.[]'),
  what:function(){
    var fw=this.get('filteredWords');
    return fw[0];
  }.property('filteredWords.[]')
});
