define(["classes/item", "classes/song", "data/ages", "data/abilities", "data/locations"], function(Item, Song, Age, Abilities, Locations){
  var Items = {
    "DEKU_STICK": new Item("Deku Stick", Age.CHILD, [Abilities.ATTACK, Abilities.SLASH]),
    "DEKU_NUTS": new Item("Deku Nuts", Age.ANY),
    "BOMBS": new Item("Bombs", Age.ANY, [Abilities.ATTACK, Abilities.BOMB, Abilities.BLAST, Abilities.IGNITE, Abilities.CRUMBLE]),
    "FAIRY_BOW": new Item("Fairy Bow", Age.ADULT, [Abilities.ATTACK, Abilities.SHOOT, Abilities.IGNITE]),
    "FAIRY_SLINGSHOT": new Item("Fairy Slingshot", Age.CHILD, [Abilities.ATTACK, Abilities.SHOOT]),
    "OCARINA_OF_TIME": new Item("Ocarina of Time", Age.ANY, [Abilities.PLAY_SONG]),
    "BOMBCHU": new Item("Bombchu", Age.ANY, [Abilities.ATTACK, Abilities.BOMB, Abilities.BLAST, Abilities.IGNITE, Abilities.CRUMBLE]),
    "LONGSHOT": new Item("Longshot", Age.ADULT, [Abilities.FETCH]),
    "BOOMERANG": new Item("Boomerang", Age.CHILD, [Abilities.FETCH]),
    "MAGIC_BEANS": new Item("Magic Beans"),
    "MEGATON_HAMMER": new Item("Megaton Hammer", Age.ADULT, [Abilities.ATTACK, Abilities.BLAST, Abilities.CRUMBLE, Abilities.SLASH]),
    "BOTTLE": new Item("Bottle", Age.ANY, [Abilities.BOTTLE], {count: 0, max: 4}),
    "RUTOS_LETTER": new Item("Ruto's Letter", Age.ANY, [Abilities.BOTTLE]),
    "BLUE_FIRE": new Item("Blue Fire", Age.ANY, [Abilities.CRUMBLE, Abilities.BOTTLE, Abilities.IGNITE]),
    "MASK_OF_TRUTH": new Item("Mask of Truth", Age.CHILD),
    "CLAIM_CHECK": new Item("Claim Check", Age.ADULT),
    "KOKIRI_SWORD": new Item("Kokiri Sword", Age.CHILD, [Abilities.ATTACK, Abilities.SLASH]),
    "MASTER_SWORD": new Item("Master Sword", Age.ADULT, [Abilities.ATTACK, Abilities.SLASH]),
    "BIGGORONS_SWORD": new Item("Biggoron's Sword", Age.ADULT, [Abilities.ATTACK, Abilities.SLASH]),
    "DEKU_SHIELD": new Item("Deku Shield", Age.CHILD, [Abilities.SHIELD]),
    "HYLIAN_SHIELD": new Item("Hylian Shield", Age.ADULT, [Abilities.SHIELD]), // useless for child
    "MIRROR_SHIELD": new Item("Mirror Shield", Age.ADULT, [Abilities.SHIELD]),
    "GORON_TUNIC": new Item("Goron Tunic", Age.ADULT),
    "ZORA_TUNIC": new Item("Zora Tunic", Age.ADULT),
    "IRON_BOOTS": new Item("Iron Boots", Age.ADULT, [Abilities.SINK]),
    "HOVER_BOOTS": new Item("Hover Boots", Age.ADULT),
    "GOLDEN_GAUNTLETS": new Item("Golden Gauntlets", Age.ADULT, [Abilities.STRENGTH]),
    "GOLDEN_SCALE": new Item("Golden Scale", Age.ANY, [Abilities.DIVE, Abilities.SINK]),
    "GIANTS_WALLET": new Item("Giant's Wallet", Age.ANY),
    "FOREST_MEDALLION": new Item("Forest Medallion", Age.ADULT),
    "FIRE_MEDALLION": new Item("Fire Medallion", Age.ADULT),
    "WATER_MEDALLION": new Item("Water Medallion", Age.ADULT),
    "SPIRIT_MEDALLION": new Item("Spirit Medallion", Age.ADULT),
    "SHADOW_MEDALLION": new Item("Shadow Medallion", Age.ADULT),
    "LIGHT_MEDALLION": new Item("Light Medallion", Age.ADULT),
    "KOKIRI_EMERALD": new Item("Kokiri Emerald", Age.CHILD),
    "GORONS_RUBY": new Item("Goron's Ruby", Age.CHILD),
    "ZORAS_SAPPHIRE": new Item("Zora's Sapphire", Age.CHILD),
    "STONE_OF_AGONY": new Item("Stone of Agony", Age.ANY),
    "GERUDOS_CARD": new Item("Gerudo's Card", Age.ANY),
    "GOLD_SKULLTULA": new Item("Gold Skulltula", Age.ANY, [], {count: 0, max: 100}),
    "MAGIC": new Item("Magic", Age.ANY),
  };

  // items with requirements or supers
  Items.LENS_OF_TRUTH = new Item("Lens of Truth", Age.ANY, [], {requirements: [Items.MAGIC]});
  Items.FIRE_ARROWS = new Item("Fire Arrows", Age.ADULT, [Abilities.BURN], {requirements: [Items.FAIRY_BOW, Items.MAGIC]});
  Items.DINS_FIRE = new Item("Din's Fire", Age.ANY, [Abilities.ATTACK, Abilities.BURN, Abilities.IGNITE], {requirements: [Items.MAGIC]});
  Items.FAIRY_OCARINA = new Item("Fairy Ocarina", Age.ANY, [Abilities.PLAY_SONG], {supers: [Items.OCARINA_OF_TIME]});
  Items.HOOKSHOT = new Item("Hookshot", Age.ADULT, [Abilities.FETCH], {supers: [Items.LONGSHOT]});
  Items.ICE_ARROWS = new Item("Ice Arrows", Age.ADULT, [], {requirements: [Items.FAIRY_BOW, Items.MAGIC]});
  Items.FARORES_WIND = new Item("Farore's Wind", Age.ANY, [], {requirements: [Items.MAGIC]});
  Items.LIGHT_ARROWS = new Item("Light Arrows", Age.ADULT, [], {requirements: [Items.FAIRY_BOW, Items.MAGIC]});
  Items.NAYRUS_LOVE = new Item("Nayru's Love", Age.ANY, [], {requirements: [Items.MAGIC]});
  Items.SILVER_GAUNTLETS = new Item("Silver Gauntlets", Age.ADULT, [Abilities.STRENGTH], {supers: [Items.GOLDEN_GAUNTLETS]});
  Items.GORONS_BRACELET = new Item("Goron's Bracelet", Age.ANY, [Abilities.STRENGTH], {supers: [Items.SILVER_GAUNTLETS, Items.GOLDEN_GAUNTLETS]});
  Items.SILVER_SCALE = new Item("Silver Scale", Age.ANY, [Abilities.DIVE, Abilities.SINK], {supers: [Items.GOLDEN_SCALE]});
  Items.ADULTS_WALLET = new Item("Adult's Wallet", Age.ANY, [], {supers: [Items.GIANTS_WALLET]});

  // trade items
  Items.BUNNY_HOOD = new Item("Bunny Hood", Age.CHILD, [], {next: Items.MASK_OF_TRUTH});
  Items.SPOOKY_MASK = new Item("Spooky Mask", Age.CHILD, [], {next: Items.BUNNY_HOOD});
  Items.SKULL_MASK = new Item("Skull Mask", Age.CHILD, [], {next: Items.SPOOKY_MASK});
  Items.KEATON_MASK = new Item("Keaton Mask", Age.CHILD, [], {next: Items.SKULL_MASK});
  Items.ZELDAS_LETTER = new Item("Zelda's Letter", Age.CHILD, [], {next: Items.KEATON_MASK});
  Items.CHICKEN = new Item("Chicken", Age.CHILD, [], {next: Items.ZELDAS_LETTER});
  Items.WEIRD_EGG = new Item("Weird Egg", Age.CHILD, [], {next: Items.CHICKEN});
  Items.EYE_DROPS = new Item("Eye Drops", Age.ADULT, [], {next: Items.CLAIM_CHECK});
  Items.EYEBALL_FROG = new Item("Eyeball Frog", Age.ADULT, [], {next: Items.EYE_DROPS});
  Items.PRESCRIPTION = new Item("Prescription", Age.ADULT, [], {next: Items.EYEBALL_FROG});
  Items.BROKEN_GORONS_SWORD = new Item("Broken Goron's Sword", Age.ADULT, [], {next: Items.PRESCRIPTION});
  Items.POACHERS_SAW = new Item("Poacher's Saw", Age.ADULT, [], {next: Items.BROKEN_GORONS_SWORD});
  Items.ODD_POTION = new Item("Odd_Potion", Age.ADULT, [], {next: Items.POACHERS_SAW});
  Items.ODD_MUSHROOM = new Item("Odd Mushroom", Age.ADULT, [], {next: Items.ODD_POTION});
  Items.COJIRO = new Item("Cojiro", Age.ADULT, [], {next: Items.ODD_MUSHROOM});
  Items.POCKET_CUCCO = new Item("Pocket Cucco", Age.ADULT, [], {next: Items.COJIRO});
  Items.POCKET_EGG = new Item("Pocket Egg", Age.ADULT, [], {next: Items.POCKET_CUCCO});
  
  // keys
  Items['SMALL_KEY_' + Locations.FOREST_TEMPLE] = new Item("Small Key (" + Locations.FOREST_TEMPLE + ")", Age.ANY, [], {count: 0, max: 5});
  Items['SMALL_KEY_' + Locations.FIRE_TEMPLE] = new Item("Small Key (" + Locations.FIRE_TEMPLE + ")", Age.ANY, [], {count: 0, max: 8});
  Items['SMALL_KEY_' + Locations.WATER_TEMPLE] = new Item("Small Key (" + Locations.WATER_TEMPLE + ")", Age.ANY, [], {count: 0, max: 6});
  Items['SMALL_KEY_' + Locations.SHADOW_TEMPLE] = new Item("Small Key (" + Locations.SHADOW_TEMPLE + ")", Age.ANY, [], {count: 0, max: 5});
  Items['SMALL_KEY_' + Locations.SPIRIT_TEMPLE] = new Item("Small Key (" + Locations.SPIRIT_TEMPLE + ")", Age.ANY, [], {count: 0, max: 5});
  Items['SMALL_KEY_' + Locations.BOTTOM_OF_THE_WELL] = new Item("Small Key (" + Locations.BOTTOM_OF_THE_WELL + ")", Age.ANY, [], {count: 0, max: 3});
  Items['SMALL_KEY_' + Locations.GERUDO_FORTRESS] = new Item("Small Key (" + Locations.GERUDO_FORTRESS + ")", Age.ANY, [], {count: 0, max: 4});
  Items['SMALL_KEY_' + Locations.GERUDO_TRAINING_GROUNDS] = new Item("Small Key (" + Locations.GERUDO_TRAINING_GROUNDS + ")", Age.ANY, [], {count: 0, max: 9});
  Items['SMALL_KEY_' + Locations.INSIDE_GANONS_CASTLE] = new Item("Small Key (" + Locations.INSIDE_GANONS_CASTLE + ")", Age.ANY, [], {count: 0, max: 2});
  Items['BIG_KEY_' + Locations.FOREST_TEMPLE] = new Item("Big Key (" + Locations.FOREST_TEMPLE + ")");
  Items['BIG_KEY_' + Locations.FIRE_TEMPLE] = new Item("Big Key (" + Locations.FIRE_TEMPLE + ")");
  Items['BIG_KEY_' + Locations.WATER_TEMPLE] = new Item("Big Key (" + Locations.WATER_TEMPLE + ")");
  Items['BIG_KEY_' + Locations.SHADOW_TEMPLE] = new Item("Big Key (" + Locations.SHADOW_TEMPLE + ")");
  Items['BIG_KEY_' + Locations.SPIRIT_TEMPLE] = new Item("Big Key (" + Locations.SPIRIT_TEMPLE + ")");
  Items['BIG_KEY_' + Locations.INSIDE_GANONS_CASTLE] = new Item("Big Key (" + Locations.INSIDE_GANONS_CASTLE + ")");

  //maps (dungeons)
  Items['MAP_' + Locations.DEKU_TREE] = new Item("Map (" + Locations.DEKU_TREE + ")");
  Items['MAP_' + Locations.DODONGOS_CAVERN] = new Item("Map (" + Locations.DODONGOS_CAVERN + ")");
  Items['MAP_' + Locations.JABU_JABUS_BELLY] = new Item("Map (" + Locations.JABU_JABUS_BELLY + ")");
  Items['MAP_' + Locations.FOREST_TEMPLE] = new Item("Map (" + Locations.FOREST_TEMPLE + ")");
  Items['MAP_' + Locations.FIRE_TEMPLE] = new Item("Map (" + Locations.FIRE_TEMPLE + ")");
  Items['MAP_' + Locations.WATER_TEMPLE] = new Item("Map (" + Locations.WATER_TEMPLE + ")");
  Items['MAP_' + Locations.SHADOW_TEMPLE] = new Item("Map (" + Locations.SHADOW_TEMPLE + ")");
  Items['MAP_' + Locations.SPIRIT_TEMPLE] = new Item("Map (" + Locations.SPIRIT_TEMPLE + ")");
  Items['MAP_' + Locations.BOTTOM_OF_THE_WELL] = new Item("Map (" + Locations.BOTTOM_OF_THE_WELL + ")");
  Items['MAP_' + Locations.ICE_CAVERN] = new Item("Map (" + Locations.ICE_CAVERN + ")");
  Items['MAP_' + Locations.GERUDO_FORTRESS] = new Item("Map (" + Locations.GERUDO_FORTRESS + ")");
  Items['MAP_' + Locations.GERUDO_TRAINING_GROUNDS] = new Item("Map (" + Locations.GERUDO_TRAINING_GROUNDS + ")");
  Items['MAP_' + Locations.INSIDE_GANONS_CASTLE] = new Item("Map (" + Locations.INSIDE_GANONS_CASTLE + ")");

  //maps (elsewhere)
  Items['MAP_' + Locations.KOKIRI_FOREST] = new Item("Map (" + Locations.KOKIRI_FOREST + ")");
  Items['MAP_' + Locations.LOST_WOODS] = new Item("Map (" + Locations.LOST_WOODS + ")");
  Items['MAP_' + Locations.SACRED_FOREST_MEADOW] = new Item("Map (" + Locations.SACRED_FOREST_MEADOW + ")");
  Items['MAP_' + Locations.HYRULE_FIELD] = new Item("Map (" + Locations.HYRULE_FIELD + ")");
  Items['MAP_' + Locations.HYRULE_CASTLE] = new Item("Map (" + Locations.HYRULE_CASTLE + ")");
  Items['MAP_' + Locations.MARKET] = new Item("Map (" + Locations.MARKET + ")");
  Items['MAP_' + Locations.TEMPLE_OF_TIME] = new Item("Map (" + Locations.TEMPLE_OF_TIME + ")");
  Items['MAP_' + Locations.LON_LON_RANCH] = new Item("Map (" + Locations.LON_LON_RANCH + ")");
  Items['MAP_' + Locations.KAKARIKO_VILLAGE] = new Item("Map (" + Locations.KAKARIKO_VILLAGE + ")");
  Items['MAP_' + Locations.GRAVEYARD] = new Item("Map (" + Locations.GRAVEYARD + ")");
  Items['MAP_' + Locations.DEATH_MOUNTAIN_TRAIL] = new Item("Map (" + Locations.DEATH_MOUNTAIN_TRAIL + ")");
  Items['MAP_' + Locations.DEATH_MOUNTAIN_CRATER] = new Item("Map (" + Locations.DEATH_MOUNTAIN_CRATER + ")");
  Items['MAP_' + Locations.GORON_CITY] = new Item("Map (" + Locations.GORON_CITY + ")");
  Items['MAP_' + Locations.ZORAS_RIVER] = new Item("Map (" + Locations.ZORAS_RIVER + ")");
  Items['MAP_' + Locations.ZORAS_DOMAIN] = new Item("Map (" + Locations.ZORAS_DOMAIN + ")");
  Items['MAP_' + Locations.ZORAS_FOUNTAIN] = new Item("Map (" + Locations.ZORAS_FOUNTAIN+ ")");
  Items['MAP_' + Locations.LAKE_HYLIA] = new Item("Map (" + Locations.LAKE_HYLIA + ")");
  Items['MAP_' + Locations.GERUDO_VALLEY] = new Item("Map (" + Locations.GERUDO_VALLEY + ")");
  Items['MAP_' + Locations.GERUDO_FORTRESS] = new Item("Map (" + Locations.GERUDO_FORTRESS + ")");
  Items['MAP_' + Locations.HAUNTED_WASTELAND] = new Item("Map (" + Locations.HAUNTED_WASTELAND + ")");
  Items['MAP_' + Locations.DESERT_COLOSSUS] = new Item("Map (" + Locations.DESERT_COLOSSUS + ")");
  Items['MAP_' + Locations.GANONS_CASTLE] = new Item("Map (" + Locations.GANONS_CASTLE + ")");

  //Fake Medallions/Stones, for pedestal hints
  Items['HINT_KOKIRI_EMERALD'] = new Item('HINT_KOKIRI_EMERALD');
  Items['HINT_GORONS_RUBY'] = new Item('HINT_GORONS_RUBY');
  Items['HINT_ZORAS_SAPPHIRE'] = new Item('HINT_ZORAS_SAPPHIRE');
  Items['HINT_FOREST_MEDALLION'] = new Item('HINT_FOREST_MEDALLION');
  Items['HINT_FIRE_MEDALLION'] = new Item('HINT_FIRE_MEDALLION');
  Items['HINT_WATER_MEDALLION'] = new Item('HINT_WATER_MEDALLION');
  Items['HINT_SPIRIT_MEDALLION'] = new Item('HINT_SPIRIT_MEDALLION');
  Items['HINT_SHADOW_MEDALLION'] = new Item('HINT_SHADOW_MEDALLION');
  Items['HINT_LIGHT_MEDALLION'] = new Item('HINT_LIGHT_MEDALLION');
  return Items;
});
