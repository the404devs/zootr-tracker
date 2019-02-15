define(["require", "classes/item", "data/ages"], function(require, Item, Age){
  return function Song(name){
    return new Item(name, Age.ANY, [], {requirements: [require('data/items').FAIRY_OCARINA]});
  };
});
