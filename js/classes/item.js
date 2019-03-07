define(["require", "data/ages"], function(require, Age){
  return function Item(name, age, abilities, more){
    this.name = name;
    this.key = name.replace(/'/g, '').replace(/\s/g, '_').toUpperCase();
    this.age = age || Age.ANY
    this.abilities = abilities || [];
    if (more && typeof more === "object"){
      this.supers = more.supers;
      this.requirements = more.requirements;
      this.count = more.count;
      this.max = more.max || 1;
      this.next = more.next;
      this.notes = more.notes;
    }
    this.supers = this.supers || [];
    this.requirements = this.requirements || [];
    this.next = this.next || this.supers[0];

    this.prev = function(){
      if (this.parent) return this.parent;

      var parent, Items = require('data/items');
      for (var i = 0; i < Object.keys(Items).length; i++){
        var item = Items[Object.keys(Items)[i]];
        if (item.next && item.next.key == this.key){
          this.parent = item;
          return item;
        }
      }
    }.bind(this);
  };
});
