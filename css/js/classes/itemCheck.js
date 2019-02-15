define(["data/ages", "data/itemsAndSongs"], function(Age, Items){
  return function ItemCheck(name, location, mapCoords, floor, requirementSets, preset){
    // the combination of name and location should be unique.
    // i.e. you can have 2 checks named "Map Chest", but not
    // in the same location
    this.name = name;
    this.location = location;
    this.requirements = requirementSets || [{}];
    this.preset = preset;
    this.mapCoords = mapCoords;
    this.floor = floor;

    this.available = function(inventory, age){
      var req;
      if (!inventory.hasAccessTo(this.location)) return false;
      for (var i = 0; i < this.requirements.length; i++){
        req = this.requirements[i];
        if (req.items && !inventory.hasActiveItems(req.items))
          continue;
        if (req.abilities && !inventory.hasAbilities(req.abilities))
          continue;
        if (req.locations && !inventory.hasAccessTo(req.locations))
          continue;
        if (req.age && req.age != Age.ANY && req.age != age)
          continue;
        if (req.offLogic && inventory.settings.RULES == 'LOGIC_ONLY')
          continue;
        if (req.glitches && inventory.settings.RULES != 'NO_MAJOR_GLITCHES')
          continue;
        if (req.settings && !inventory.hasSettings(req.settings))
          continue;
        if (req.checks && !inventory.hasChecks(req.checks))
          continue;
        if (req.itemCounts && !inventory.hasCountOfItems(req.itemCounts))
          continue;
        return true;
      }
      return false;
    }.bind(this);

    this.presetItem = function(inventory){
      if (!preset) return null;
      if (preset.item){
        if (preset.settings && !inventory.hasSettings(preset.settings))
          return null;
        return preset.item;
      }
      return null;
    };
  };
});
