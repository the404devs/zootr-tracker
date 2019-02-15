define(["jquery", "data/items", "data/songs"], function($, Items, Songs){
  return $.extend({}, Items, Songs);
});
