define(["data/ages", "data/locations", "data/locationAccess", "data/itemsAndSongs"], function(Age, Location, LocationAccess, Items){
  return function Inventory(startingItems, startingLocations){
    this.items = startingItems || [];
    this.age = Age.CHILD;
    this.checks = [];
    this.settings = {};

    this.add = function(item){
      this.items.push(item);
    }.bind(this);

    this.remove = function(item){
      for(var i = this.items.length-1; i >= 0; i--){
        if (this.items[i].key == item.key)
          this.items.splice(i, 1);
      }
    }.bind(this);

    this.upgrade = function(item){
      if (item.next){
        this.add(item.next);
        this.remove(item);
        return item.next;
      }
    }.bind(this);

    this.downgrade = function(item){
      if (item.prev()){
        this.add(item.prev());
        this.remove(item);
        return item.prev();
      }
    };

    this.count = function(item){
      for(var i = 0; i < this.items.length; i++){
        if (this.items[i].key == item.key)
          return this.items[i].count;
      }
      return null;
    }.bind(this);

    this.hasActiveItems = function(items){
      var hasThem = true;
      items.forEach(function(item){
        if (!(this.hasItem(item) && this.itemActive(item))) hasThem = false;
      }, this);
      return hasThem;
    }.bind(this);

    this.hasItem = function(item){
      var hasIt = false;
      if (item.supers.length){
        item.supers.forEach(function(sup){
          hasIt = hasIt || this.items.includes(sup);
        }, this);
      }
      return hasIt || this.items.includes(item);
    }.bind(this);

    this.itemActive = function(item){
      if (![Age.ANY, this.age].includes(item.age) &&
        (this.settings.RULES != 'NO_MAJOR_GLITCHES' || ![ // wrong age, not NMG
          Items.FAIRY_SLINGSHOT.key,
          Items.BOOMERANG.key,
          Items.MEGATON_HAMMER.key
        ].includes(item.key)) // wrong age, NMG, but not hammer, boomerang, or slingshot
      ) return false;
      for (var i = 0; i < item.requirements.length; i++){
        if (!this.hasItem(item.requirements[i])) return false;
      }
      return true;
    }.bind(this);

    this.hasCountOfItems = function(sets){
      if (!Array.isArray(sets)) sets = [sets];
      return sets.every(function(req){
        return (this.hasItem(req.item) && this.count(req.item) >= req.count);
      }.bind(this));
    }.bind(this);

    this.hasAbilities = function(abilities){
      var hasThem = true;
      abilities.forEach(function(ability){
        if (!this.hasAbility(ability)) hasThem = false;
      }, this);
      return hasThem;
    }.bind(this);

    this.hasAbility = function(ability){
      var hasIt = false;
      this.items.forEach(function(item){
        // if (item.key == Items.BOMBCHU.key && ())
        if (item.abilities.includes(ability) && this.itemActive(item))
          hasIt = true;
      }, this);
      return hasIt;
    }.bind(this);

    this.hasSettings = function(settings){
      for (var prop in settings){
        if (this.settings[prop] != settings[prop]) return false;
      }
      return true;
    }.bind(this);

    this.hasChecks = function(checks){
      if (!Array.isArray(checks)) checks = [checks];
      return checks.every(function(p){
        for (var i = 0; i < this.checks.length; i++){
          if (this.checks[i].name == p.name &&
            this.checks[i].location == p.location) return true;
        }
        return false;
      }.bind(this))
    }.bind(this);

    this.check = function(check){
      this.checks.push(check);
    }.bind(this);

    this.uncheck = function(check){
      for(var i = this.checks.length-1; i >= 0; i--){
        if (this.checks[i].name == check.name &&
          this.checks[i].location == check.location
        ) this.checks.splice(i, 1);
      }
    };

    this.hasAccessTo = function(location, visited){
      // handle array of locations
      if (Array.isArray(location)){
        return location.every(function(loc){
          this.hasAccessTo(loc)
        }.bind(this));
      }

      var hasNonLocationRequirements = function(req){
        if (req.abilities && !this.hasAbilities(req.abilities)){
          return false;
        }
        if (req.items && !this.hasActiveItems(req.items)){
          return false;
        }
        if (req.settings && !this.hasSettings(req.settings)){
          return false;
        }
        if (req.checks && !this.hasChecks(req.checks)){
          return false;
        }
        return true;
      }.bind(this);

      // reverse path algorithm
      var access = false, reset;
      if (!visited){
        visited = [];
        reset = true;
      }
      if (LocationAccess[this.age][location] && Array.isArray(LocationAccess[this.age][location])){
        for (var i = 0; i < LocationAccess[this.age][location].length; i++){
          req = LocationAccess[this.age][location][i];
          visited.push(location);
          access = hasNonLocationRequirements(req) && (req.locations || []).every(function(loc){
            if (visited.includes(loc)) return false;
            return this.hasAccessTo(loc, visited);
          }.bind(this));
          if (access) return true;
          if (reset) visited = [];
        }
      }
      return false;

    }.bind(this);
  };
});
