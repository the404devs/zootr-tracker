define(["data/locations", "data/itemsAndSongs", "data/abilities", "data/ages", "data/settings"], function(Locations, Items, Abilities, Age, Settings){
  access = {};

  // CHILD
  access[Age.CHILD] = {};
  access[Age.CHILD][Locations.KOKIRI_FOREST] = [{}];
  access[Age.CHILD][Locations.LOST_WOODS] = [
    {locations: [Locations.KOKIRI_FOREST]},
    {locations: [Locations.SACRED_FOREST_MEADOW]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.STRENGTH]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.BLAST]},
    {locations: [Locations.GORON_CITY], items: [Items.ZELDAS_LULLABY, Items.DEKU_STICK]},
    {locations: [Locations.ZORAS_RIVER], abilities: [Abilities.SINK]}
  ];
  access[Age.CHILD][Locations.SACRED_FOREST_MEADOW] = [
    {items: [Items.MINUET_OF_FOREST]},
    {locations: [Locations.LOST_WOODS]},
    {locations: [Locations.FOREST_TEMPLE]}
  ];
  access[Age.CHILD][Locations.HYRULE_FIELD] = [
    {locations: [Locations.KOKIRI_FOREST], checks: [{name: "Queen Gohma", location: Locations.DEKU_TREE}]},
    {locations: [Locations.KOKIRI_FOREST], settings: {FOREST: 'OPEN'}},
    {locations: [Locations.MARKET]},
    {locations: [Locations.LON_LON_RANCH]},
    {locations: [Locations.KAKARIKO_VILLAGE]},
    {locations: [Locations.LAKE_HYLIA]},
    {locations: [Locations.ZORAS_RIVER]},
    {locations: [Locations.GERUDO_VALLEY]}
  ];
  access[Age.CHILD][Locations.HYRULE_CASTLE] = [
    {locations: [Locations.MARKET]}
  ];
  access[Age.CHILD][Locations.MARKET] = [
    {locations: [Locations.TEMPLE_OF_TIME]},
    {locations: [Locations.HYRULE_CASTLE]},
    {locations: [Locations.HYRULE_FIELD]}
  ];
  access[Age.CHILD][Locations.TEMPLE_OF_TIME] = [
    {items: [Items.PRELUDE_OF_LIGHT]},
    {locations: [Locations.MARKET]}
  ];
  access[Age.CHILD][Locations.LON_LON_RANCH] = [
    {locations: [Locations.HYRULE_FIELD]}
  ];
  access[Age.CHILD][Locations.KAKARIKO_VILLAGE] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.GRAVEYARD]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL]},
    {locations: [Locations.BOTTOM_OF_THE_WELL]}
  ];
  access[Age.CHILD][Locations.GRAVEYARD] = [
    {items: [Items.NOCTURNE_OF_SHADOW]},
    {locations: [Locations.KAKARIKO_VILLAGE]},
    {locations: [Locations.SHADOW_TEMPLE]}
  ];
  access[Age.CHILD][Locations.DEATH_MOUNTAIN_TRAIL] = [
    {locations: [Locations.KAKARIKO_VILLAGE]},
    // {locations: [Locations.DEATH_MOUNTAIN_CRATER]},
    {locations: [Locations.DODONGOS_CAVERN]},
    {locations: [Locations.GORON_CITY]}
  ];
  access[Age.CHILD][Locations.DEATH_MOUNTAIN_CRATER] = [
    {items: [Items.BOLERO_OF_FIRE]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], abilities: [Abilities.BLAST]},
    {locations: [Locations.FIRE_TEMPLE]},
  ];
  access[Age.CHILD][Locations.GORON_CITY] = [
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL]},
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.IGNITE]},
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.BLAST]}
    // {locations: [Locations.DEATH_MOUNTAIN_CRATER], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.DEKU_SHIELD], abilities: [Abilities.BOMB]}
  ];
  access[Age.CHILD][Locations.ZORAS_RIVER] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.ZORAS_DOMAIN]},
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.SINK]}
  ];
  access[Age.CHILD][Locations.ZORAS_DOMAIN] = [
    // lower ZR (from HF)
    {locations: [Locations.HYRULE_FIELD], abilities: [Abilities.BLAST]},
    // upper ZR (from LW)
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.SINK]},
    {locations: [Locations.LAKE_HYLIA], abilities: [Abilities.SINK]},
  ];
  access[Age.CHILD][Locations.ZORAS_FOUNTAIN] = [
    {locations: [Locations.ZORAS_DOMAIN], items: [Items.RUTOS_LETTER]},
    {locations: [Locations.JABU_JABUS_BELLY]},
    {locations: [Locations.ICE_CAVERN]}
  ];
  access[Age.CHILD][Locations.LAKE_HYLIA] = [
    {items: [Items.SERENADE_OF_WATER]},
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.GERUDO_VALLEY]},
    {locations: [Locations.ZORAS_DOMAIN], abilities: [Abilities.SINK]},
    {locations: [Locations.WATER_TEMPLE]}
  ];
  access[Age.CHILD][Locations.GERUDO_VALLEY] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.GERUDO_FORTRESS]}
  ];
  access[Age.CHILD][Locations.GERUDO_FORTRESS] = [
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}}
  ];
  access[Age.CHILD][Locations.HAUNTED_WASTELAND] = [
    {locations: [Locations.DESERT_COLOSSUS], settings: {RULES: 'ACCESSIBLE'}},
    {locations: [Locations.DESERT_COLOSSUS], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {locations: [Locations.GERUDO_FORTRESS], settings: {RULES: 'NO_MAJOR_GLITCHES'}}
  ];
  access[Age.CHILD][Locations.DESERT_COLOSSUS] = [
    {items: [Items.REQUIEM_OF_SPIRIT]},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'ACCESSIBLE'}},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'LOGIC_ONLY'}, items: [Items.LENS_OF_TRUTH]},
    {locations: [Locations.SPIRIT_TEMPLE]}
  ];
  access[Age.CHILD][Locations.DEKU_TREE] = [
    {locations: [Locations.KOKIRI_FOREST], items: [Items.DEKU_SHIELD, Items.KOKIRI_SWORD]},
    {locations: [Locations.KOKIRI_FOREST], settings: {FOREST: 'OPEN'}}
  ];
  access[Age.CHILD][Locations.DODONGOS_CAVERN] = [
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], abilities: [Abilities.BOMB]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], abilities: [Abilities.STRENGTH]}
  ];
  access[Age.CHILD][Locations.JABU_JABUS_BELLY] = [
    {locations: [Locations.ZORAS_FOUNTAIN], abilities: [Abilities.BOTTLE]},
    {locations: [Locations.ZORAS_FOUNTAIN], settings: {RULES: 'NO_MAJOR_GLITCHES'}}
  ];
  access[Age.CHILD][Locations.FIRE_TEMPLE] = [
    {locations: [Locations.DEATH_MOUNTAIN_CRATER], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.DEKU_SHIELD], abilities: [Abilities.BOMB]},
    {locations: [Locations.DEATH_MOUNTAIN_CRATER], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.BOLERO_OF_FIRE, Items.MEGATON_HAMMER]}
  ];
  access[Age.CHILD][Locations.SPIRIT_TEMPLE] = [
    {locations: [Locations.DESERT_COLOSSUS]}
  ];
  access[Age.CHILD][Locations.BOTTOM_OF_THE_WELL] = [
    {locations: [Locations.KAKARIKO_VILLAGE], items: [Items.SONG_OF_STORMS]},
    {locations: [Locations.KAKARIKO_VILLAGE], settings: {RULES: 'NO_MAJOR_GLITCHES'}}
  ];
  access[Age.CHILD][Locations.GERUDO_TRAINING_GROUNDS] = [
    {locations: [Locations.GERUDO_FORTRESS], settings: {RULES: 'NO_MAJOR_GLITCHES'}}
  ];

  // ADULT
  access[Age.ADULT] = {};
  access[Age.ADULT][Locations.KOKIRI_FOREST] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.LOST_WOODS]},
    {locations: [Locations.DEKU_TREE]}
  ];
  access[Age.ADULT][Locations.LOST_WOODS] = [
    {locations: [Locations.KOKIRI_FOREST]},
    {locations: [Locations.SACRED_FOREST_MEADOW]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.STRENGTH]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.BLAST]},
    {locations: [Locations.ZORAS_RIVER], abilities: [Abilities.SINK]}
  ];
  access[Age.ADULT][Locations.SACRED_FOREST_MEADOW] = [
    {items: [Items.MINUET_OF_FOREST]},
    {locations: [Locations.LOST_WOODS], items: [Items.SARIAS_SONG]},
    {locations: [Locations.LOST_WOODS], settings: {RULES: 'ACCESSIBLE'}},
    {locations: [Locations.LOST_WOODS], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {locations: [Locations.FOREST_TEMPLE]}
  ];
  access[Age.ADULT][Locations.HYRULE_FIELD] = [
    {locations: [Locations.KOKIRI_FOREST]},
    {locations: [Locations.MARKET]},
    {locations: [Locations.LON_LON_RANCH]},
    {locations: [Locations.KAKARIKO_VILLAGE]},
    {locations: [Locations.LAKE_HYLIA]},
    {locations: [Locations.ZORAS_RIVER]},
    {locations: [Locations.GERUDO_VALLEY]}
  ];
  access[Age.ADULT][Locations.MARKET] = [
    {locations: [Locations.TEMPLE_OF_TIME]},
    {locations: [Locations.GANONS_CASTLE]},
    {locations: [Locations.HYRULE_FIELD]}
  ];
  access[Age.ADULT][Locations.TEMPLE_OF_TIME] = [{}];
  access[Age.ADULT][Locations.LON_LON_RANCH] = [
    {locations: [Locations.HYRULE_FIELD]}
  ];
  access[Age.ADULT][Locations.KAKARIKO_VILLAGE] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.GRAVEYARD]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL]},
    {locations: [Locations.BOTTOM_OF_THE_WELL]}
  ];
  access[Age.ADULT][Locations.GRAVEYARD] = [
    {items: [Items.NOCTURNE_OF_SHADOW]},
    {locations: [Locations.KAKARIKO_VILLAGE]},
    {locations: [Locations.SHADOW_TEMPLE]}
  ];
  access[Age.ADULT][Locations.DEATH_MOUNTAIN_TRAIL] = [
    {locations: [Locations.KAKARIKO_VILLAGE]},
    {locations: [Locations.DEATH_MOUNTAIN_CRATER], items: [Items.HOOKSHOT]},
    {locations: [Locations.DODONGOS_CAVERN]},
    {locations: [Locations.GORON_CITY]}
  ];
  access[Age.ADULT][Locations.DEATH_MOUNTAIN_CRATER] = [
    {items: [Items.BOLERO_OF_FIRE]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], abilities: [Abilities.BLAST]},
    {locations: [Locations.FIRE_TEMPLE]},
    {locations: [Locations.GORON_CITY], abilities: [Abilities.BOMB]}
  ];
  access[Age.ADULT][Locations.GORON_CITY] = [
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL]},
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.IGNITE]},
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.BLAST]},
    {locations: [Locations.DEATH_MOUNTAIN_CRATER], items: [Items.HOOKSHOT]}
  ];
  access[Age.ADULT][Locations.ZORAS_RIVER] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.ZORAS_DOMAIN]},
    {locations: [Locations.LOST_WOODS], abilities: [Abilities.SINK]}
  ];
  access[Age.ADULT][Locations.ZORAS_DOMAIN] = [
    {locations: [Locations.ZORAS_RIVER], items: [Items.ZELDAS_LULLABY]},
    {locations: [Locations.ZORAS_RIVER], items: [Items.HOVER_BOOTS]},
    {locations: [Locations.ZORAS_RIVER], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB]},
    {locations: [Locations.ZORAS_RIVER], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB]}
  ];
  access[Age.ADULT][Locations.ZORAS_FOUNTAIN] = [
    {locations: [Locations.ZORAS_DOMAIN], items: [Items.RUTOS_LETTER]},
    {locations: [Locations.JABU_JABUS_BELLY]},
    {locations: [Locations.ICE_CAVERN]}
  ];
  access[Age.ADULT][Locations.LAKE_HYLIA] = [
    {items: [Items.SERENADE_OF_WATER]},
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.GERUDO_VALLEY]},
    {locations: [Locations.WATER_TEMPLE]}
  ];
  access[Age.ADULT][Locations.GERUDO_VALLEY] = [
    {locations: [Locations.HYRULE_FIELD]},
    {locations: [Locations.GERUDO_FORTRESS]}
  ];
  access[Age.ADULT][Locations.GERUDO_FORTRESS] = [
    // bridge is repaired
    {locations: [Locations.GERUDO_VALLEY], checks: [{name: "Free the Carpenters", location: Locations.GERUDO_FORTRESS}]},
    // epona or longshot
    {locations: [Locations.GERUDO_VALLEY], items: [Items.EPONAS_SONG]},
    {locations: [Locations.GERUDO_VALLEY], items: [Items.LONGSHOT]},
    // precise hookshot
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOOKSHOT]},
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOOKSHOT]},
    // megaflip
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB]},
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB]},
    // hammer recoil
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MEGATON_HAMMER, Items.HOVER_BOOTS]},
    // crouch stab recoil
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MIRROR_SHIELD, Items.HOVER_BOOTS], abilities: [Abilities.SLASH]},
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HYLIAN_SHIELD, Items.HOVER_BOOTS], abilities: [Abilities.SLASH]},
    // reverse wasteland (jail)
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOOKSHOT]},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOOKSHOT]},
    // reverse wasteland (gate open)
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'ACCESSIBLE'}, checks: [{name: "Free the Carpenters", location: Locations.GERUDO_FORTRESS}]},
    {locations: [Locations.GERUDO_VALLEY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, checks: [{name: "Free the Carpenters", location: Locations.GERUDO_FORTRESS}]}
  ];
  access[Age.ADULT][Locations.HAUNTED_WASTELAND] = [
    {locations: [Locations.GERUDO_FORTRESS], checks: [{name: "Free the Carpenters", location: Locations.GERUDO_FORTRESS}]},
    {locations: [Locations.GERUDO_FORTRESS], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {locations: [Locations.DESERT_COLOSSUS], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {locations: [Locations.DESERT_COLOSSUS], settings: {RULES: 'ACCESSIBLE'}}
  ];
  access[Age.ADULT][Locations.DESERT_COLOSSUS] = [
    {items: [Items.REQUIEM_OF_SPIRIT]},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'ACCESSIBLE'}},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'LOGIC_ONLY'}, items: [Items.LENS_OF_TRUTH, Items.HOVER_BOOTS]},
    {locations: [Locations.HAUNTED_WASTELAND], settings: {RULES: 'LOGIC_ONLY'}, items: [Items.LENS_OF_TRUTH, Items.HOOKSHOT]},
    {locations: [Locations.SPIRIT_TEMPLE]}
  ];
  access[Age.ADULT][Locations.DODONGOS_CAVERN] = [
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL]}
  ];
  access[Age.ADULT][Locations.FOREST_TEMPLE] = [
    {locations: [Locations.SACRED_FOREST_MEADOW], items: [Items.HOOKSHOT]}
  ];
  access[Age.ADULT][Locations.FIRE_TEMPLE] = [ // tunic required for logic
    {items: [Items.BOLERO_OF_FIRE]},
    // hammer+hook from top to bottom, or scarecrow
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], items: [Items.MEGATON_HAMMER, Items.HOOKSHOT, Items.GORON_TUNIC]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], settings: {RULES: 'ACCESSIBLE'}, items: [Items.MEGATON_HAMMER, Items.HOOKSHOT]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MEGATON_HAMMER, Items.HOOKSHOT]},
    // hammer+hovers from top to bottom
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], items: [Items.MEGATON_HAMMER, Items.HOVER_BOOTS, Items.GORON_TUNIC]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], settings: {RULES: 'ACCESSIBLE'}, items: [Items.MEGATON_HAMMER, Items.HOVER_BOOTS]},
    {locations: [Locations.DEATH_MOUNTAIN_TRAIL], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MEGATON_HAMMER, Items.HOVER_BOOTS]},
    // no need to check for explosive methods from the top, since having explosives means you can go through goron city (below)
    // blast link the goron, hookshot through crater
    {locations: [Locations.GORON_CITY], items: [Items.HOOKSHOT, Items.GORON_TUNIC], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOOKSHOT], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOOKSHOT], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], items: [Items.HOOKSHOT, Items.GORON_TUNIC], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOOKSHOT], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOOKSHOT], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], items: [Items.HOOKSHOT, Items.GORON_TUNIC], abilities: [Abilities.STRENGTH]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOOKSHOT], abilities: [Abilities.STRENGTH]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOOKSHOT], abilities: [Abilities.STRENGTH]},
    // blast link the goron, hover boots through crater
    {locations: [Locations.GORON_CITY], items: [Items.HOVER_BOOTS, Items.GORON_TUNIC], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], items: [Items.HOVER_BOOTS, Items.GORON_TUNIC], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.IGNITE]},
    {locations: [Locations.GORON_CITY], items: [Items.HOVER_BOOTS, Items.GORON_TUNIC], abilities: [Abilities.STRENGTH]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'ACCESSIBLE'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
    // blast link the goron, megaflip through crater
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB]},
    {locations: [Locations.GORON_CITY], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB]}
  ];
  access[Age.ADULT][Locations.WATER_TEMPLE] = [ // tunic required for logic
    // iron boots
    {locations: [Locations.LAKE_HYLIA], items: [Items.IRON_BOOTS, Items.HOOKSHOT, Items.ZORA_TUNIC]},
    {locations: [Locations.LAKE_HYLIA], settings: {RULES: 'ACCESSIBLE'}, items: [Items.IRON_BOOTS, Items.HOOKSHOT]},
    {locations: [Locations.LAKE_HYLIA], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.IRON_BOOTS, Items.HOOKSHOT]},
    // gold scale (longshot or precise hookshot)
    {locations: [Locations.LAKE_HYLIA], items: [Items.GOLDEN_SCALE, Items.LONGSHOT, Items.ZORA_TUNIC]},
    {locations: [Locations.LAKE_HYLIA], settings: {RULES: 'ACCESSIBLE'}, items: [Items.GOLDEN_SCALE, Items.HOOKSHOT]},
    {locations: [Locations.LAKE_HYLIA], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.GOLDEN_SCALE, Items.HOOKSHOT]},
    // cutscene dive (ocarina, hovers+bottle)
    {locations: [Locations.LAKE_HYLIA], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.FAIRY_OCARINA, Items.HOOKSHOT]},
    {locations: [Locations.LAKE_HYLIA], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOVER_BOOTS, Items.HOOKSHOT], abilities: [Abilities.BOTTLE]}
  ];
  access[Age.ADULT][Locations.SHADOW_TEMPLE] = [
    // do gating on the lens & first gap here since nothing is in the dungeon before that
    // noctune, light torches, hover boots for gap
    {items: [Items.NOCTURNE_OF_SHADOW, Items.DINS_FIRE, Items.HOVER_BOOTS, Items.LENS_OF_TRUTH]},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.DINS_FIRE, Items.HOVER_BOOTS], settings: {RULES: 'ACCESSIBLE'}},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.DINS_FIRE, Items.HOVER_BOOTS], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.FIRE_ARROWS, Items.HOVER_BOOTS], settings: {RULES: 'ACCESSIBLE'}},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.FIRE_ARROWS, Items.HOVER_BOOTS], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    // noctune, light torches, hookshot for gap
    {items: [Items.NOCTURNE_OF_SHADOW, Items.DINS_FIRE, Items.HOOKSHOT, Items.LENS_OF_TRUTH]},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.DINS_FIRE, Items.HOOKSHOT], settings: {RULES: 'ACCESSIBLE'}},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.DINS_FIRE, Items.HOOKSHOT], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.FIRE_ARROWS, Items.HOOKSHOT], settings: {RULES: 'ACCESSIBLE'}},
    {items: [Items.NOCTURNE_OF_SHADOW, Items.FIRE_ARROWS, Items.HOOKSHOT], settings: {RULES: 'NO_MAJOR_GLITCHES'}},
    // seamwalk (NMG)
    {locations: [Locations.GRAVEYARD], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOOKSHOT]},
    {locations: [Locations.GRAVEYARD], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MAGIC_BEANS, Items.HOVER_BOOTS], abilities: [Abilities.BOMB]},
    {locations: [Locations.GRAVEYARD], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MAGIC_BEANS, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB]},
    {locations: [Locations.GRAVEYARD], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.MAGIC_BEANS, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB]}
  ];
  access[Age.ADULT][Locations.SPIRIT_TEMPLE] = [
    {locations: [Locations.DESERT_COLOSSUS], items: [Items.SILVER_GAUNTLETS]}
  ];
  access[Age.ADULT][Locations.ICE_CAVERN] = [
    {locations: [Locations.ZORAS_FOUNTAIN]}
  ];
  access[Age.ADULT][Locations.GERUDO_TRAINING_GROUNDS] = [
    {locations: [Locations.GERUDO_FORTRESS], items: [Items.GERUDOS_CARD], checks: [{name: "Free the Carpenters", location: Locations.GERUDO_FORTRESS}]},
    {locations: [Locations.GERUDO_FORTRESS], settings: {RULES: 'NO_MAJOR_GLITCHES'}}
  ];
  access[Age.ADULT][Locations.GANONS_CASTLE] = [
    {locations: [Locations.MARKET]}
  ];
  access[Age.ADULT][Locations.INSIDE_GANONS_CASTLE] = [
    // rainbow: open
    {locations: [Locations.GANONS_CASTLE], settings: {RAINBOW_BRIDGE: 'OPEN'}},
    // rainbow: vanilla
    {locations: [Locations.GANONS_CASTLE], items: [Items.LIGHT_ARROWS, Items.SPIRIT_MEDALLION, Items.SHADOW_MEDALLION], settings: {RAINBOW_BRIDGE: 'VANILLA'}},
    // rainbow: medallions
    {locations: [Locations.GANONS_CASTLE], items: [Items.SPIRIT_MEDALLION, Items.SHADOW_MEDALLION, Items.FOREST_MEDALLION, Items.FIRE_MEDALLION, Items.WATER_MEDALLION, Items.LIGHT_MEDALLION], settings: {RAINBOW_BRIDGE: 'MEDALLIONS'}},
    // rainbow: all dungeons
    {locations: [Locations.GANONS_CASTLE], items: [Items.KOKIRI_EMERALD, Items.GORONS_RUBY, Items.ZORAS_SAPPHIRE, Items.SPIRIT_MEDALLION, Items.SHADOW_MEDALLION, Items.FOREST_MEDALLION, Items.FIRE_MEDALLION, Items.WATER_MEDALLION, Items.LIGHT_MEDALLION], settings: {RAINBOW_BRIDGE: 'ALL_DUNGEONS'}},
    // crazy seamwalk stuff
    {locations: [Locations.GANONS_CASTLE], settings: {RULES: 'NO_MAJOR_GLITCHES'}, items: [Items.HOVER_BOOTS], abilities: [Abilities.BOMB]},
  ];

  return access;
});