define(["require", "classes/item", "data/items", "data/ages"], function(require, Item, Age) {
    return function Song(name, notes) {
        this.notes = notes;

        return new Item(name, Age.ANY, [], { requirements: [require('data/items').FAIRY_OCARINA], notes: this.notes });
    };
});