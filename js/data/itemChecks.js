define(["data/locations", "classes/itemCheck", "data/itemsAndSongs", "data/abilities", "data/ages"], function(Locations, ItemCheck, Items, Abilities, Age){
  return [
    // Kokiri Forest
    new ItemCheck("Mido's House (x4)", Locations.KOKIRI_FOREST, [70,85], "0"),
    new ItemCheck("Kokiri Sword", Locations.KOKIRI_FOREST, [78,230], "0", [{age: Age.CHILD}]),
    new ItemCheck("Song of Storms Grotto", Locations.KOKIRI_FOREST, [65,55], "0", [{items: [Items.SONG_OF_STORMS]}]),
    // Lost Woods
    new ItemCheck("Saria on Bridge", Locations.LOST_WOODS, [33,251], "0", [
      {settings: {FOREST: 'OPEN'}},
      {checks: {location: Locations.DEKU_TREE, name: "Queen Gohma"}}
    ], {item: Items.FAIRY_OCARINA, settings: {SHUFFLE_OCARINAS: false}}),
    new ItemCheck("Scrub under Bridge", Locations.LOST_WOODS, [40,270], "0", [
      {age: Age.CHILD, abilities: [Abilities.ATTACK]},
      {age: Age.CHILD, items: [Items.DEKU_SHIELD]},
      {age: Age.CHILD, items: [Items.DEKU_NUTS]},
      {age: Age.CHILD, items: [Items.BOOMERANG]}
    ]),
    new ItemCheck("Skull Kid", Locations.LOST_WOODS, [25,185], "0", [
      {age: Age.CHILD, items: [Items.SARIAS_SONG]}
    ]),
    new ItemCheck("Slingshot Target", Locations.LOST_WOODS, [155,177], "0", [
      {age: Age.CHILD, items: [Items.FAIRY_SLINGSHOT]}
    ]),
    new ItemCheck("Ocarina Game", Locations.LOST_WOODS, [155,218], "0", [
      {age: Age.CHILD, items: [Items.FAIRY_OCARINA]}
    ]),
    new ItemCheck("Grotto (GC)", Locations.LOST_WOODS, [140,125], "0", [
      {abilities: [Abilities.BLAST]}
    ]),
    new ItemCheck("Grotto (SFM)", Locations.LOST_WOODS, [120,15], "0", [
      {abilities: [Abilities.BLAST]}
    ]),
    new ItemCheck("Skull Mask Reward", Locations.LOST_WOODS, [25,185], "0", [
      {age: Age.CHILD, items: [Items.SKULL_MASK]}
    ]),
    new ItemCheck("Mask of Truth Reward", Locations.LOST_WOODS, [125,83], "0", [
      {age: Age.CHILD, items: [Items.MASK_OF_TRUTH]}
    ]),
    // Sacred Forest Meadow
    new ItemCheck("Wolfos Grotto", Locations.SACRED_FOREST_MEADOW, [95,250], "0", [{abilities: [Abilities.BLAST]}]),
    new ItemCheck("Saria's Song", Locations.SACRED_FOREST_MEADOW, [115,20], "0", [
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Zelda's Lullaby"}},
    ]),
    new ItemCheck("Minuet of Forest", Locations.SACRED_FOREST_MEADOW, [105,30], "0", [
      {age: Age.ADULT, items: [Items.SARIAS_SONG]},
      {age: Age.ADULT, items: [Items.MINUET_OF_FOREST]},
      {age: Age.ADULT, offLogic: true},
    ]),
    // Hyrule Field
    new ItemCheck("Grotto Near Market", Locations.HYRULE_FIELD, [180,30], "0", [{abilities: [Abilities.BLAST]}]),
    new ItemCheck("Heart Dive Grotto", Locations.HYRULE_FIELD, [120,60], "0", [
      {items: [Items.IRON_BOOTS], abilities: [Abilities.BLAST]},
      {items: [Items.GOLDEN_SCALE], abilities: [Abilities.BLAST]},
    ]),
    new ItemCheck("Grotto Near Lake (scrub)", Locations.HYRULE_FIELD, [130,230], "0", [{abilities: [Abilities.BLAST]}]),
    new ItemCheck("Grotto Near Lake (open)", Locations.HYRULE_FIELD, [140,238], "0"),
    new ItemCheck("Grotto in southeast woods", Locations.HYRULE_FIELD, [195,215], "0", [{abilities: [Abilities.BLAST]}]),
    new ItemCheck("Ocarina of Time", Locations.HYRULE_FIELD, [215,30], "0", [
      {age: Age.CHILD, items: [Items.KOKIRI_EMERALD, Items.GORONS_RUBY, Items.ZORAS_SAPPHIRE]}
    ], {item: Items.OCARINA_OF_TIME, settings: {SHUFFLE_OCARINAS: false}}),
    // Hyrule Castle
    new ItemCheck("Malon outside Castle", Locations.HYRULE_CASTLE, [110,165], "0", [
      {age: Age.CHILD},
    ], {item: Items.WEIRD_EGG, settings: {SHUFFLE_WEIRD_EGG: false}}),
    new ItemCheck("Zelda's Lullaby", Locations.HYRULE_CASTLE, [130,30], "0", [
      {age: Age.CHILD, items: [Items.CHICKEN]},
      {age: Age.CHILD, items: [Items.ZELDAS_LETTER]},
      {age: Age.CHILD, abilities: [Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Din's Fire", Locations.HYRULE_CASTLE, [220,134], "0", [
      {age: Age.CHILD, items: [Items.ZELDAS_LULLABY], abilities: [Abilities.BLAST]},
    ]),
    // Hyrule Market
    new ItemCheck("Slingshot Game", Locations.MARKET, [95,32], "0", [{age: Age.CHILD}]),
    new ItemCheck("Bombchu Bowling (Bag)", Locations.MARKET, [60,69], "0", [{age: Age.CHILD, items: [Items.BOMBS]}]),
    new ItemCheck("Bombchu Bowling (Heart)", Locations.MARKET, [60,69], "0", [{age: Age.CHILD, items: [Items.BOMBS]}]),
    new ItemCheck("Richard the Dog", Locations.MARKET, [155,90], "0", [{age: Age.CHILD}]),
    new ItemCheck("Treasure Chest Game", Locations.MARKET, [92,107], "0", [
      {age: Age.CHILD, offLogic: true},
      {age: Age.CHILD, items: [Items.LENS_OF_TRUTH]},
    ]),
    new ItemCheck("Big Poes", Locations.MARKET, [148,160], "0", [
      {age: Age.ADULT, items: [Items.EPONAS_SONG, Items.FAIRY_BOW], abilities: [Abilities.BOTTLE]},
      {age: Age.ADULT, items: [Items.FAIRY_BOW], abilities: [Abilities.BOTTLE], offLogic: true},
      {age: Age.ADULT, items: [Items.BOMBCHU], abilities: [Abilities.BOTTLE], offLogic: true},
    ]),
    // Temple of Time
    new ItemCheck("Master Sword", Locations.TEMPLE_OF_TIME, [200,217], "0", [
      {age: Age.CHILD, settings: {DOOR_OF_TIME: 'OPEN'}},
      {age: Age.CHILD, items: [Items.SONG_OF_TIME]}
    ], {item: Items.MASTER_SWORD}),
    new ItemCheck("Prelude of Light", Locations.TEMPLE_OF_TIME, [200,217], "0", [
      {age: Age.ADULT, items: [Items.FOREST_MEDALLION]}
    ]),
    new ItemCheck("Light Arrows", Locations.TEMPLE_OF_TIME, [200,217], "0", [
      {age: Age.ADULT, items: [Items.SHADOW_MEDALLION, Items.SPIRIT_MEDALLION]}
    ]),
    // Lon Lon Ranch
    new ItemCheck("Talon's Cuccos", Locations.LON_LON_RANCH, [190,37], "0", [
      {age: Age.CHILD, items: [Items.CHICKEN]},
      {age: Age.CHILD, items: [Items.ZELDAS_LETTER]},
      {age: Age.CHILD, items: [Items.KEATON_MASK]},
      {age: Age.CHILD, items: [Items.SKULL_MASK]},
      {age: Age.CHILD, items: [Items.SPOOKY_MASK]},
      {age: Age.CHILD, items: [Items.BUNNY_HOOD]},
      {age: Age.CHILD, items: [Items.MASK_OF_TRUTH]},
    ]),
    new ItemCheck("Epona's Song", Locations.LON_LON_RANCH, [140,130], "0", [
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.CHICKEN]},
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.ZELDAS_LETTER]},
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.KEATON_MASK]},
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.SKULL_MASK]},
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.SPOOKY_MASK]},
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.BUNNY_HOOD]},
      {age: Age.CHILD, checks: {location: Locations.HYRULE_CASTLE, name: "Malon outside Castle"}, items: [Items.FAIRY_OCARINA, Items.MASK_OF_TRUTH]},
    ]),
    new ItemCheck("Heart Piece", Locations.LON_LON_RANCH, [80,214], "0", [{age: Age.CHILD}]),
    // Kakariko Village
    new ItemCheck("Anju's Cuccos", Locations.KAKARIKO_VILLAGE, [200,190], "0", [{age: Age.CHILD}]),
    new ItemCheck("Redead Grotto", Locations.KAKARIKO_VILLAGE, [145,125], "0", [{abilities: [Abilities.BLAST]}]),
    new ItemCheck("Man on Roof", Locations.KAKARIKO_VILLAGE, [200,102], "0", [
      {age: Age.ADULT, items: [Items.HOOKSHOT]},
      {offLogic: true}
    ]),
    new ItemCheck("Anju's Egg", Locations.KAKARIKO_VILLAGE, [200,190], "0", [{age: Age.ADULT}]),
    new ItemCheck("Cow Cage", Locations.KAKARIKO_VILLAGE, [175,205], "0", [
      {age: Age.ADULT, items: [Items.HOOKSHOT]},
      {offLogic: true}
    ]),
    new ItemCheck("Archery Game", Locations.KAKARIKO_VILLAGE, [188,162], "0", [{age: Age.ADULT, items: [Items.FAIRY_BOW]}]),
    new ItemCheck("Back Grotto", Locations.KAKARIKO_VILLAGE, [210,82], "0"),
    new ItemCheck("Windmill Heart", Locations.KAKARIKO_VILLAGE, [252,130], "0", [
      {age: Age.CHILD, items: [Items.BOOMERANG]},
      {age: Age.ADULT, items: [Items.SONG_OF_TIME]},
      {age: Age.ADULT, offLogic: true},
    ]),
    new ItemCheck("10 Gold Skulltulas", Locations.KAKARIKO_VILLAGE, [144,158], "0", [
      {itemCounts: [{count: 10, item: Items.GOLD_SKULLTULA}]},
    ]),
    new ItemCheck("20 Gold Skulltulas", Locations.KAKARIKO_VILLAGE, [144,158], "0", [
      {itemCounts: [{count: 20, item: Items.GOLD_SKULLTULA}]},
    ]),
    new ItemCheck("30 Gold Skulltulas", Locations.KAKARIKO_VILLAGE, [144,158], "0", [
      {itemCounts: [{count: 30, item: Items.GOLD_SKULLTULA}]},
    ]),
    new ItemCheck("40 Gold Skulltulas", Locations.KAKARIKO_VILLAGE, [144,158], "0", [
      {itemCounts: [{count: 40, item: Items.GOLD_SKULLTULA}]},
    ]),
    new ItemCheck("50 Gold Skulltulas", Locations.KAKARIKO_VILLAGE, [144,158], "0", [
      {itemCounts: [{count: 50, item: Items.GOLD_SKULLTULA}]},
    ]),
    new ItemCheck("Song of Storms", Locations.KAKARIKO_VILLAGE, [252,130], "0", [{age: Age.ADULT, items: [Items.FAIRY_OCARINA]}]),
    new ItemCheck("Nocturne of Shadow", Locations.KAKARIKO_VILLAGE, [205,125], "0", [{age: Age.ADULT, items: [Items.FOREST_MEDALLION, Items.FIRE_MEDALLION, Items.WATER_MEDALLION]}]),
    // Graveyard
    new ItemCheck("Shield Grave", Locations.GRAVEYARD, [95,55], "0"),
    new ItemCheck("Dampe's Tour", Locations.GRAVEYARD, [85,70], "0", [{age: Age.CHILD}]),
    new ItemCheck("Dampe's Race 1", Locations.GRAVEYARD, [75,25], "0", [{age: Age.ADULT}]),
    new ItemCheck("Dampe's Race 2", Locations.GRAVEYARD, [75,25], "0", [{age: Age.ADULT}]),
    new ItemCheck("Redead Grave", Locations.GRAVEYARD, [129,75], "0", [{items: [Items.SUNS_SONG]}]),
    new ItemCheck("Royal Tomb Torches", Locations.GRAVEYARD, [160,63], "0", [
      {items: [Items.ZELDAS_LULLABY], abilities: [Abilities.BURN]},
      {age: Age.CHILD, items: [Items.ZELDAS_LULLABY, Items.DEKU_STICK], glitches: true}
    ]),
    new ItemCheck("Sun's Song", Locations.GRAVEYARD, [160,63], "0", [{items: [Items.ZELDAS_LULLABY]}]),
    new ItemCheck("High Crate", Locations.GRAVEYARD, [45,30], "0", [
      {age: Age.ADULT, items: [Items.LONGSHOT]},
      {age: Age.ADULT, items: [Items.MAGIC_BEANS]},
      {age: Age.CHILD, items: [Items.BOOMERANG], offLogic: true},
      {age: Age.ADULT, items: [Items.HOOKSHOT], glitches: true},
    ]),
    // Death Mountain Trail
    new ItemCheck("Heart above DC", Locations.DEATH_MOUNTAIN_TRAIL, [55,150], "0"),
    new ItemCheck("Chest behind Wall", Locations.DEATH_MOUNTAIN_TRAIL, [95,170], "0", [
      {abilities: [Abilities.BLAST]},
      {age: Age.CHILD, abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Storms Grotto", Locations.DEATH_MOUNTAIN_TRAIL, [100,130], "0", [{items: [Items.SONG_OF_STORMS]}]),
    new ItemCheck("Magic Fairy", Locations.DEATH_MOUNTAIN_TRAIL, [100,5], "0", [{items: [Items.ZELDAS_LULLABY], abilities: [Abilities.BLAST]}]),
    new ItemCheck("Biggoron", Locations.DEATH_MOUNTAIN_TRAIL, [130,15], "0", [
      {age: Age.ADULT, items: [Items.CLAIM_CHECK], abilities: [Abilities.BLAST]},
      {age: Age.ADULT, items: [Items.CLAIM_CHECK], abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, items: [Items.CLAIM_CHECK], abilities: [Abilities.IGNITE]},
      {age: Age.ADULT, items: [Items.CLAIM_CHECK, Items.BOLERO_OF_FIRE, Items.HOOKSHOT]},
      {age: Age.ADULT, items: [Items.CLAIM_CHECK, Items.BOLERO_OF_FIRE, Items.MAGIC_BEANS]}
    ]),
    // Death Mountain Crater
    new ItemCheck("Wall Heart", Locations.DEATH_MOUNTAIN_CRATER, [175,200], "0", [
      {abilities: [Abilities.BLAST]},
      {age: Age.ADULT, abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, abilities: [Abilities.IGNITE]},
      {age: Age.ADULT, items: [Items.BOLERO_OF_FIRE, Items.HOOKSHOT]},
      {age: Age.ADULT, items: [Items.BOLERO_OF_FIRE, Items.MAGIC_BEANS]}
    ]),
    new ItemCheck("Volcano Heart", Locations.DEATH_MOUNTAIN_CRATER, [120,130], "0", [
      // hover boots
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.BLAST]},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.IGNITE]},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS, Items.BOLERO_OF_FIRE, Items.HOOKSHOT]},
      // magic beans
      {age: Age.ADULT, items: [Items.MAGIC_BEANS, Items.HOOKSHOT], abilities: [Abilities.BLAST]},
      {age: Age.ADULT, items: [Items.MAGIC_BEANS, Items.HOOKSHOT], abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, items: [Items.MAGIC_BEANS, Items.HOOKSHOT], abilities: [Abilities.IGNITE]},
      {age: Age.ADULT, items: [Items.MAGIC_BEANS, Items.BOLERO_OF_FIRE]},
      // megaflip
      {age: Age.ADULT, items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {age: Age.ADULT, items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Double Magic Fairy", Locations.DEATH_MOUNTAIN_CRATER, [85,190], "0", [
      {items: [Items.ZELDAS_LULLABY, Items.MEGATON_HAMMER]},
      {items: [Items.ZELDAS_LULLABY, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Grotto", Locations.DEATH_MOUNTAIN_CRATER, [175,245], "0", [{abilities: [Abilities.BLAST]}]),
    new ItemCheck("Bolero of Fire", Locations.DEATH_MOUNTAIN_CRATER, [140,105], "0", [
      // bolero
      {age: Age.ADULT, items: [Items.BOLERO_OF_FIRE]},
      // hover boots
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.BLAST]},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.IGNITE]},
      // hookshot
      {age: Age.ADULT, items: [Items.HOOKSHOT], abilities: [Abilities.BLAST]},
      {age: Age.ADULT, items: [Items.HOOKSHOT], abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, items: [Items.HOOKSHOT], abilities: [Abilities.IGNITE]},
      // megaflip
      {age: Age.ADULT, items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {age: Age.ADULT, items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    // Goron City
    new ItemCheck("Spinning Pot", Locations.GORON_CITY, [140,135], "0", [
      {age: Age.CHILD, items: [Items.ZELDAS_LULLABY, Items.DEKU_STICK], abilities: [Abilities.BOMB]},
      {age: Age.CHILD, items: [Items.ZELDAS_LULLABY, Items.DEKU_STICK], abilities: [Abilities.STRENGTH]},
      {age: Age.CHILD, abilities: [Abilities.BURN, Abilities.BOMB]},
      {age: Age.CHILD, abilities: [Abilities.BURN, Abilities.STRENGTH]}
    ]),
    new ItemCheck("Darunia", Locations.GORON_CITY, [145,30], "0", [{age: Age.CHILD, items: [Items.ZELDAS_LULLABY, Items.SARIAS_SONG]}]),
    new ItemCheck("Hot Rod Goron", Locations.GORON_CITY, [100,110], "0", [{age: Age.CHILD, items: [Items.BOMBS]}]),
    new ItemCheck("Link the Goron", Locations.GORON_CITY, [170,110], "0", [
      {age: Age.ADULT, abilities: [Abilities.BOMB]},
      {age: Age.ADULT, abilities: [Abilities.STRENGTH]},
      {age: Age.ADULT, abilities: [Abilities.IGNITE]}
    ]),
    new ItemCheck("Boulder Maze (Right 1)", Locations.GORON_CITY, [30,40], "0", [{abilities: [Abilities.BLAST]}, {age: Age.ADULT, items: [Items.SILVER_GAUNTLETS]}]),
    new ItemCheck("Boulder Maze (Right 2)", Locations.GORON_CITY, [40,40], "0", [{abilities: [Abilities.BLAST]}, {age: Age.ADULT, items: [Items.SILVER_GAUNTLETS]}]),
    new ItemCheck("Boulder Maze (Left)", Locations.GORON_CITY, [20,40], "0", [
      {items: [Items.MEGATON_HAMMER]},
      {age: Age.ADULT, items: [Items.SILVER_GAUNTLETS]},
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.BLAST]},
    ]),
    new ItemCheck("Grotto", Locations.GORON_CITY, [225,40], "0", [
      {age: Age.ADULT, items: [Items.LONGSHOT, Items.SONG_OF_TIME]}
    ]),
    // Zora's River
    new ItemCheck("Heart Piece 1", Locations.ZORAS_RIVER, [132,35], "0", [
      {age: Age.CHILD, abilities: [Abilities.BLAST]},
      {age: Age.CHILD, abilities: [Abilities.SINK]},
      {age: Age.ADULT}
    ]),
    new ItemCheck("Heart Piece 2", Locations.ZORAS_RIVER, [310,7], "0", [
      {age: Age.CHILD, abilities: [Abilities.BLAST]},
      {age: Age.CHILD, abilities: [Abilities.SINK]},
      {age: Age.ADULT}
    ]),
    new ItemCheck("Frogs 1", Locations.ZORAS_RIVER, [160,30], "0", [
      {age: Age.CHILD, abilities: [Abilities.BLAST], items: [Items.SONG_OF_STORMS]},
      {age: Age.CHILD, abilities: [Abilities.SINK], items: [Items.SONG_OF_STORMS]},
    ]),
    new ItemCheck("Frogs 2", Locations.ZORAS_RIVER, [160,30], "0", [
      {age: Age.CHILD, abilities: [Abilities.BLAST], items: [Items.ZELDAS_LULLABY, Items.EPONAS_SONG, Items.SARIAS_SONG, Items.SUNS_SONG, Items.SONG_OF_TIME]},
      {age: Age.CHILD, abilities: [Abilities.SINK], items: [Items.ZELDAS_LULLABY, Items.EPONAS_SONG, Items.SARIAS_SONG, Items.SUNS_SONG, Items.SONG_OF_TIME]}
    ]),
    new ItemCheck("Song of Storms Grotto", Locations.ZORAS_RIVER, [20,90], "0", [
      {age: Age.CHILD, abilities: [Abilities.BLAST], items: [Items.SONG_OF_STORMS]},
      {age: Age.CHILD, abilities: [Abilities.SINK], items: [Items.SONG_OF_STORMS]},
      {age: Age.ADULT, items: [Items.SONG_OF_STORMS]}
    ]),
    new ItemCheck("Open Grotto", Locations.ZORAS_RIVER, [130,110], "0", [
      {age: Age.CHILD, abilities: [Abilities.BLAST]},
      {age: Age.ADULT}
    ]),
    // Zora's Domain
    new ItemCheck("Diving Game", Locations.ZORAS_DOMAIN, [128,130], "0", [{age: Age.CHILD}]),
    new ItemCheck("Torch Run", Locations.ZORAS_DOMAIN, [128,150], "0", [{age: Age.CHILD, items: [Items.DEKU_STICK]}]),
    new ItemCheck("King Zora", Locations.ZORAS_DOMAIN, [192,75], "0", [{age: Age.ADULT, abilities: [Abilities.BOTTLE]}]),
    // Zora's Fountain
    new ItemCheck("Farore's Wind", Locations.ZORAS_FOUNTAIN, [171,220], "0", [{items: [Items.ZELDAS_LULLABY], abilities: [Abilities.BOMB]}]),
    new ItemCheck("Iceberg Heart", Locations.ZORAS_FOUNTAIN, [215,95], "0", [{age: Age.ADULT}]),
    new ItemCheck("Underwater Heart", Locations.ZORAS_FOUNTAIN, [160,95], "0", [{age: Age.ADULT, items: [Items.IRON_BOOTS]}]),
    // Lake Hylia
    new ItemCheck("Fishing (Child)", Locations.LAKE_HYLIA, [220,120], "0", [{age: Age.CHILD, items: [Items.KOKIRI_SWORD]}]),
    new ItemCheck("Ruto's Letter", Locations.LAKE_HYLIA, [160,120], "0", [{age: Age.CHILD, items: [Items.SILVER_SCALE]}]),
    new ItemCheck("Fishing (Adult)", Locations.LAKE_HYLIA, [220,120], "0", [
      {age: Age.ADULT, items: [Items.MAGIC_BEANS]},
      {age: Age.ADULT, items: [Items.HOOKSHOT, Items.FAIRY_OCARINA]},
      {age: Age.ADULT, checks: {location: Locations.WATER_TEMPLE, name: "Morpha"}},
    ]),
    new ItemCheck("Lakeside Lab (top)", Locations.LAKE_HYLIA, [110,120], "0", [
      {age: Age.ADULT, items: [Items.MAGIC_BEANS]},
      {age: Age.ADULT, items: [Items.HOOKSHOT, Items.FAIRY_OCARINA]},
    ]),
    new ItemCheck("Lakeside Lab (dive)", Locations.LAKE_HYLIA, [110,120], "0", [
      {age: Age.ADULT, items: [Items.GOLDEN_SCALE]},
      {age: Age.ADULT, items: [Items.HOOKSHOT, Items.IRON_BOOTS]},
    ]),
    new ItemCheck("Grotto", Locations.LAKE_HYLIA, [101,183], "0", [
      {age: Age.ANY, abilities: [Abilities.SHEILD]}
    ]),
    new ItemCheck("Shoot the Sun", Locations.LAKE_HYLIA, [180,217], "0", [
      {age: Age.ADULT, items: [Items.FAIRY_BOW], checks: {location: Locations.WATER_TEMPLE, name: "Morpha"}},
      {age: Age.ADULT, items: [Items.FAIRY_BOW, Items.LONGSHOT, Items.FAIRY_OCARINA]},
      {age: Age.ADULT, items: [Items.FAIRY_BOW, Items.HOOKSHOT], glitches: true},
    ]),
    // Gerudo Valley
    new ItemCheck("Crate Heart", Locations.GERUDO_VALLEY, [175,160], "0", [
      {age: Age.CHILD},
      {age: Age.ADULT, items: [Items.LONGSHOT]},
      {age: Age.ADULT, items: [Items.EPONAS_SONG]},
      {age: Age.ADULT, items: [Items.HOOKSHOT], offLogic: true},
      {age: Age.ADULT, items: [Items.REQUIEM_OF_SPIRIT], offLogic: true},
      {age: Age.ADULT, abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS], abilities: [Abilities.SHIELD, Abilities.SLASH], glitches: true},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS, Items.MEGATON_HAMMER], glitches: true},
    ]),
    new ItemCheck("Waterfall Heart", Locations.GERUDO_VALLEY, [192,10], "0"),
    new ItemCheck("Hammer Chest", Locations.GERUDO_VALLEY, [150,130], "0", [
      {age: Age.ADULT, items: [Items.LONGSHOT, Items.MEGATON_HAMMER]},
      {age: Age.ADULT, items: [Items.EPONAS_SONG, Items.MEGATON_HAMMER]},
      {age: Age.ADULT, items: [Items.HOOKSHOT, Items.MEGATON_HAMMER], offLogic: true},
      {age: Age.ADULT, items: [Items.REQUIEM_OF_SPIRIT, Items.MEGATON_HAMMER], offLogic: true},
      {age: Age.ADULT, abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
      {age: Age.ADULT, items: [Items.HOVER_BOOTS, Items.MEGATON_HAMMER], glitches: true},
    ]),
    // Gerudo Fortress
    new ItemCheck("Free the Carpenters", Locations.GERUDO_FORTRESS, [110,153], "0", [
      {abilities: [Abilities.ATTACK]}
    ], {item: Items.GERUDOS_CARD, settings: {SHUFFLE_GERUDOS_CARD: false}}),
    new ItemCheck("Rooftop Chest", Locations.GERUDO_FORTRESS, [130,120], "0", [
      {items: [Items.LONGSHOT]},
      {items: [Items.HOOKSHOT, Items.FAIRY_OCARINA]},
      {items: [Items.HOVER_BOOTS]},
      {abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Archery Game (1000)", Locations.GERUDO_FORTRESS, [210,150], "0", [
      {items: [Items.EPONAS_SONG, Items.FAIRY_BOW], checks: {location: Locations.GERUDO_FORTRESS, name: "Free the Carpenters"}},
    ]),
    new ItemCheck("Archery Game (1500)", Locations.GERUDO_FORTRESS, [210,180], "0", [
      {items: [Items.EPONAS_SONG, Items.FAIRY_BOW], checks: {location: Locations.GERUDO_FORTRESS, name: "Free the Carpenters"}},
    ]),
    // Haunted Wasteland
    new ItemCheck("Light the Torches", Locations.HAUNTED_WASTELAND, [
      {abilities: [Abilities.BURN]},
    ]),
    // Desert Colossus
    new ItemCheck("Requiem of Spirit", Locations.DESERT_COLOSSUS, [30,104], "0"),
    new ItemCheck("Nayru's Love", Locations.DESERT_COLOSSUS, [145,50], "0", [
      {items: [Items.ZELDAS_LULLABY], abilities: [Abilities.BOMB]},
    ]),
    new ItemCheck("Arch Heart", Locations.DESERT_COLOSSUS, [48,104], "0", [
      {age: Age.ADULT, items: [Items.MAGIC_BEANS, Items.REQUIEM_OF_SPIRIT]},
      {age: Age.ADULT, items: [Items.MAGIC_BEANS], glitches: true},
      {age: Age.ADULT, abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
    ]),
    // Deku Tree
    new ItemCheck("Map", Locations.DEKU_TREE, [257,123], "1F"),
    new ItemCheck("Slingshot", Locations.DEKU_TREE, [157,257], "2F", [
      {items: [Items.DEKU_SHIELD]},
      {items: [Items.MEGATON_HAMMER], glitches: true},
    ]),
    new ItemCheck("Near Slingshot", Locations.DEKU_TREE, [175,260], "2F", [
      {items: [Items.DEKU_SHIELD]},
      {items: [Items.MEGATON_HAMMER], glitches: true},
    ]),
    new ItemCheck("Compass", Locations.DEKU_TREE, [140,123], "3F",),
    new ItemCheck("Near Compass", Locations.DEKU_TREE, [185,145], "3F",),
    new ItemCheck("Basement", Locations.DEKU_TREE, [290,90], "B1",),
    new ItemCheck("Queen Gohma", Locations.DEKU_TREE, [200,20], "B2", [
      // burn web with stick
      // shield for 231
      {items: [Items.DEKU_STICK, Items.DEKU_SHIELD, Items.FAIRY_SLINGSHOT], abilities: [Abilities.SLASH]},
      {items: [Items.DEKU_STICK, Items.DEKU_SHIELD, Items.DEKU_NUTS], abilities: [Abilities.SLASH], offLogic: true},
      {items: [Items.DEKU_STICK, Items.DEKU_SHIELD, Items.BOOMERANG], abilities: [Abilities.SLASH]},
      {items: [Items.DEKU_STICK, Items.DEKU_SHIELD, Items.BOMBCHU], abilities: [Abilities.SLASH], offLogic: true},
      // hammer for 231
      {items: [Items.DEKU_STICK, Items.MEGATON_HAMMER, Items.FAIRY_SLINGSHOT], abilities: [Abilities.SLASH], glitches: true},
      {items: [Items.DEKU_STICK, Items.MEGATON_HAMMER, Items.DEKU_NUTS], abilities: [Abilities.SLASH], glitches: true},
      {items: [Items.DEKU_STICK, Items.MEGATON_HAMMER, Items.BOOMERANG], abilities: [Abilities.SLASH], glitches: true},
      {items: [Items.DEKU_STICK, Items.MEGATON_HAMMER, Items.BOMBCHU], abilities: [Abilities.SLASH], glitches: true},
      // burn web with din's/FA
      // shield for 231
      {items: [Items.DEKU_SHIELD, Items.FAIRY_SLINGSHOT], abilities: [Abilities.BURN, Abilities.SLASH]},
      {items: [Items.DEKU_SHIELD, Items.DEKU_NUTS], abilities: [Abilities.BURN, Abilities.SLASH], offLogic: true},
      {items: [Items.DEKU_SHIELD, Items.BOOMERANG], abilities: [Abilities.BURN, Abilities.SLASH]},
      {items: [Items.DEKU_SHIELD, Items.BOMBCHU], abilities: [Abilities.BURN, Abilities.SLASH], offLogic: true},
      // hammer for 231
      {items: [Items.MEGATON_HAMMER, Items.FAIRY_SLINGSHOT], abilities: [Abilities.BURN], glitches: true},
      {items: [Items.MEGATON_HAMMER, Items.DEKU_NUTS], abilities: [Abilities.BURN], glitches: true},
      {items: [Items.MEGATON_HAMMER, Items.BOOMERANG], abilities: [Abilities.BURN], glitches: true},
      {items: [Items.MEGATON_HAMMER, Items.BOMBCHU], abilities: [Abilities.BURN], glitches: true}
    ]),
    // Dodongo's Cavern
    new ItemCheck("Map", Locations.DODONGOS_CAVERN, [95,195], "1F", [
      {abilities: [Abilities.CRUMBLE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Scrub (near map)", Locations.DODONGOS_CAVERN, [95,225], "1F", [
      {abilities: [Abilities.CRUMBLE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Scrub (near torch puzzle)", Locations.DODONGOS_CAVERN, [242,78], "1F", [
      {abilities: [Abilities.CRUMBLE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Compass", Locations.DODONGOS_CAVERN, [26,225], "1F", [
      {abilities: [Abilities.CRUMBLE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Platform Chest", Locations.DODONGOS_CAVERN, [224,230], "2F", [
      {abilities: [Abilities.CRUMBLE, Abilities.IGNITE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Scrub (2F)", Locations.DODONGOS_CAVERN, [226,148], "2F", [
      {abilities: [Abilities.CRUMBLE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Bomb Bag", Locations.DODONGOS_CAVERN, [217,188], "2F", [
      {abilities: [Abilities.CRUMBLE, Abilities.IGNITE]},
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("End of Bridge", Locations.DODONGOS_CAVERN, [90,169], "2F", [
      {abilities: [Abilities.CRUMBLE, Abilities.IGNITE]},
      {abilities: [Abilities.CRUMBLE, Abilities.STRENGTH]}
    ]),
    new ItemCheck("Above Boss", Locations.DODONGOS_CAVERN, [75,98], "1F", [{abilities: [Abilities.BOMB]}]),
    new ItemCheck("King Dodongo", Locations.DODONGOS_CAVERN, [85,98], "1F", [{abilities: [Abilities.BOMB]}]),
    // Jabu Jabu's Belly
    new ItemCheck("Boomerang", Locations.JABU_JABUS_BELLY, [144,56], "1F"),
    new ItemCheck("Map", Locations.JABU_JABUS_BELLY, [11,56], "1F", [{items: [Items.BOOMERANG]}]),
    new ItemCheck("Compass", Locations.JABU_JABUS_BELLY, [49,13], "1F", [{items: [Items.BOOMERANG]}]),
    new ItemCheck("Barinade", Locations.JABU_JABUS_BELLY, [133,142], "1F", [{items: [Items.BOOMERANG]}]),
    // Forest Temple
    new ItemCheck("First Room", Locations.FOREST_TEMPLE, [145,255], "2F"),
    new ItemCheck("Stalfos Fight", Locations.FOREST_TEMPLE, [154,10], "1F", [{abilities: [Abilities.SLASH]}]),
    new ItemCheck("Map", Locations.FOREST_TEMPLE, [154,50], "2F", [
      {items: [Items.FAIRY_BOW, Items.LONGSHOT]},
      {items: [Items.FAIRY_BOW, Items.HOOKSHOT], offLogic: true},
      {items: [Items.SONG_OF_TIME]},
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]},
      {abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Below Scarecrow", Locations.FOREST_TEMPLE, [240,60], "1F", [
      {items: [Items.FAIRY_BOW, Items.HOOKSHOT]},
      {items: [Items.SONG_OF_TIME]},
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]},
      {abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("In Well", Locations.FOREST_TEMPLE, [95,114], "B1", [
      {items: [Items.FAIRY_BOW, Items.LONGSHOT]},
      {items: [Items.FAIRY_BOW, Items.HOOKSHOT], offLogic: true},
      {items: [Items.SONG_OF_TIME]},
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]},
      {abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Floormaster", Locations.FOREST_TEMPLE, [37,100], "1F", [
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]},
      {abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Block Room Eye", Locations.FOREST_TEMPLE, [55,135], "2F", [
      {items: [Items.FAIRY_BOW]},
    ]),
    new ItemCheck("Boss Key", Locations.FOREST_TEMPLE, [50,19], "2F", [
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Red Poe", Locations.FOREST_TEMPLE, [110,10], "2F", [
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Bow", Locations.FOREST_TEMPLE, [154,19], "2F", [
      {abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Blue Poe (Compass)", Locations.FOREST_TEMPLE, [192,10], "2F", [
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Checkerboard", Locations.FOREST_TEMPLE, [259,90], "1F", [
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]},
      {abilities: [Abilities.STRENGTH, Abilities.BURN]}
    ]),
    new ItemCheck("Basement", Locations.FOREST_TEMPLE, [125,165], "B2", [
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]}
    ]),
    new ItemCheck("Phantom Ganon", Locations.FOREST_TEMPLE, [155,25], "B2", [
      {items: [Items.FAIRY_BOW], abilities: [Abilities.STRENGTH]}
    ]),
    // Fire Temple
    new ItemCheck("Near Boss Door", Locations.FIRE_TEMPLE, [98,190], "1F"),
    new ItemCheck("Flare Dancer", Locations.FIRE_TEMPLE, [151,88], "1F", [
      {items: [Items.MEGATON_HAMMER]}
    ]),
    new ItemCheck("Boss Key", Locations.FIRE_TEMPLE, [155,130], "1F", [
      {items: [Items.MEGATON_HAMMER]}
    ]),
    new ItemCheck("Bridge Room 1", Locations.FIRE_TEMPLE, [270, 53], "1F"),
    new ItemCheck("Bridge Room 2", Locations.FIRE_TEMPLE, [254,248], "1F", [
      {abilities: [Abilities.BOMB]}
    ]),
    new ItemCheck("Boulder Maze 1", Locations.FIRE_TEMPLE, [285,200], "3F", [
      {abilities: [Abilities.STRENGTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Boulder Maze 2", Locations.FIRE_TEMPLE, [250,54], "3F", [
      {abilities: [Abilities.STRENGTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Map", Locations.FIRE_TEMPLE, [240,130], "3F", [ // bow OR keys
      {abilities: [Abilities.STRENGTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Boulder Maze (top)", Locations.FIRE_TEMPLE, [266,205], "3F", [
      {abilities: [Abilities.STRENGTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Shortcut Goron", Locations.FIRE_TEMPLE, [295,140], "2F", [
      {abilities: [Abilities.BOMB, Abilities.STRENGTH]},
      {abilities: [Abilities.BOMB], offLogic: true},
    ]),
    new ItemCheck("Scarecrow Chest", Locations.FIRE_TEMPLE, [275,125], "5F", [
      {items: [Items.FAIRY_OCARINA, Items.HOOKSHOT], abilities: [Abilities.STRENGTH]},
      {items: [Items.FAIRY_OCARINA, Items.HOOKSHOT], offLogic: true},
      {items: [Items.LONGSHOT], offLogic: true},
    ]),
    new ItemCheck("Compass", Locations.FIRE_TEMPLE, [145,73], "3F", [
      {abilities: [Abilities.STRENGTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Megaton Hammer", Locations.FIRE_TEMPLE, [60,167], "5F", [
      {abilities: [Abilities.BOMB, Abilities.STRENGTH]},
      {abilities: [Abilities.BLAST], offLogic: true},
    ]),
    new ItemCheck("Goron Below Hammer", Locations.FIRE_TEMPLE, [88,143], "3F", [
      {items: [Items.MEGATON_HAMMER, Items.SONG_OF_TIME], abilities: [Abilities.STRENGTH]},
      {items: [Items.MEGATON_HAMMER], offLogic: true},
    ]),
    new ItemCheck("Volvagia", Locations.FIRE_TEMPLE, [50,147], "1F", [
      {items: [Items.MEGATON_HAMMER], abilities: [Abilities.STRENGTH]},
      {items: [Items.MEGATON_HAMMER, Items.HOVER_BOOTS]},
      {items: [Items.MEGATON_HAMMER], offLogic: true},
    ]),
    // Water Temple
    new ItemCheck("Map", Locations.WATER_TEMPLE, [
      {items: [Items.IRON_BOOTS]},
      {items: [Items.LONGSHOT], offLogic: true},
      {items: [Items.DINS_FIRE], glitches: true},
      {items: [Items.FARORES_WIND], glitches: true},
      {items: [Items.NAYRUS_LOVE], glitches: true},
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.BOTTLE], glitches: true},
      {abilities: [Abilities.SHIELD, Abilities.SLASH], glitches: true},
    ]),
    new ItemCheck("Cracked Wall", Locations.WATER_TEMPLE, [
      {items: [Items.ZELDAS_LULLABY, Items.IRON_BOOTS], abilities: [Abilities.BOMB]},
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT], abilities: [Abilities.BOMB], offLogic: true},
      {items: [Items.IRON_BOOTS, Items.HOOKSHOT, Items.BOMBCHU], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.DINS_FIRE], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FARORES_WIND], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.NAYRUS_LOVE], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS], abilities: [Abilities.BOMB, Abilities.BOTTLE], glitches: true},
      {items: [Items.ZELDAS_LULLABY], abilities: [Abilities.SHIELD, Abilities.SLASH, Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Light Torches", Locations.WATER_TEMPLE, [
      {items: [Items.ZELDAS_LULLABY, Items.IRON_BOOTS, Items.FAIRY_BOW]},
      {items: [Items.ZELDAS_LULLABY, Items.IRON_BOOTS], abilities: [Abilities.BURN]},
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT, Items.FAIRY_BOW], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT], abilities: [Abilities.BURN], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.DINS_FIRE], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FARORES_WIND, Items.FAIRY_BOW], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.NAYRUS_LOVE, Items.FAIRY_BOW], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS, Items.FAIRY_BOW], abilities: [Abilities.BOTTLE], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW], abilities: [Abilities.SHIELD, Abilities.SLASH], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FARORES_WIND], abilities: [Abilities.BURN], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.NAYRUS_LOVE], abilities: [Abilities.BURN], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS], abilities: [Abilities.BURN, Abilities.BOTTLE], glitches: true},
      {items: [Items.ZELDAS_LULLABY], abilities: [Abilities.SHIELD, Abilities.SLASH, Abilities.BURN], glitches: true},
    ]),
    new ItemCheck("Compass", Locations.WATER_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.IRON_BOOTS]},
      {items: [Items.LONGSHOT, Items.ZELDAS_LULLABY], offLogic: true},
      {items: [Items.HOOKSHOT, Items.ZELDAS_LULLABY, Items.DINS_FIRE], glitches: true},
      {items: [Items.HOOKSHOT, Items.ZELDAS_LULLABY, Items.FARORES_WIND], glitches: true},
      {items: [Items.HOOKSHOT, Items.ZELDAS_LULLABY, Items.NAYRUS_LOVE], glitches: true},
      {items: [Items.HOOKSHOT, Items.ZELDAS_LULLABY, Items.HOVER_BOOTS], abilities: [Abilities.BOTTLE], glitches: true},
      {items: [Items.HOOKSHOT, Items.ZELDAS_LULLABY], abilities: [Abilities.SHIELD, Abilities.SLASH], glitches: true},
    ]),
    new ItemCheck("Central Basement", Locations.WATER_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.IRON_BOOTS, Items.ZELDAS_LULLABY, Items.ZORA_TUNIC]},
      {items: [Items.HOOKSHOT, Items.IRON_BOOTS, Items.ZELDAS_LULLABY], offLogic: true},
    ]),
    new ItemCheck("Quick Eye Switch", Locations.WATER_TEMPLE, [
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.LONGSHOT, Items.IRON_BOOTS], abilities: [Abilities.STRENGTH]},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.HOVER_BOOTS, Items.IRON_BOOTS], abilities: [Abilities.STRENGTH]},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.LONGSHOT], abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.DINS_FIRE, Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.FARORES_WIND, Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.NAYRUS_LOVE, Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH, Abilities.BOTTLE], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.HOVER_BOOTS], abilities: [Abilities.SHIELD, Abilities.SLASH, Abilities.STRENGTH], glitches: true},
    ]),
    new ItemCheck("Longshot", Locations.WATER_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.ZELDAS_LULLABY]},
      {items: [Items.HOOKSHOT], offLogic: true},
    ]),
    new ItemCheck("Whirlpool Rivers", Locations.WATER_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.SONG_OF_TIME, Items.FAIRY_BOW, Items.ZELDAS_LULLABY]},
      {items: [Items.HOOKSHOT, Items.SONG_OF_TIME, Items.FAIRY_BOW], offLogic: true},
    ]),
    new ItemCheck("Dragon Switch", Locations.WATER_TEMPLE, [
      {items: [Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.IRON_BOOTS], abilities: [Abilities.STRENGTH]},
      {items: [Items.ZELDAS_LULLABY, Items.BOMBCHU, Items.IRON_BOOTS], abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.BOMBCHU, Items.DINS_FIRE], abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.BOMBCHU, Items.FARORES_WIND], abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.BOMBCHU, Items.NAYRUS_LOVE], abilities: [Abilities.STRENGTH], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.BOMBCHU, Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH, Abilities.BOTTLE], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.BOMBCHU], abilities: [Abilities.STRENGTH, Abilities.SHIELD, Abilities.SLASH], glitches: true},
      {items: [Items.HOOKSHOT, Items.SONG_OF_TIME, Items.FAIRY_BOW, Items.ZELDAS_LULLABY]},
      {items: [Items.HOOKSHOT, Items.SONG_OF_TIME, Items.FAIRY_BOW], offLogic: true},
    ]),
    new ItemCheck("Boss Key", Locations.WATER_TEMPLE, [
      {items: [Items.ZELDAS_LULLABY, Items.IRON_BOOTS, Items.LONGSHOT], abilities: [Abilities.STRENGTH, Abilities.BOMB]},
      {items: [Items.ZELDAS_LULLABY, Items.IRON_BOOTS, Items.LONGSHOT, Items.HOVER_BOOTS]},
      {items: [Items.IRON_BOOTS, Items.HOVER_BOOTS], offLogic: true},
      {items: [Items.IRON_BOOTS, Items.LONGSHOT], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT], offLogic: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS], abilities: [Abilities.BOTTLE], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS, Items.DINS_FIRE], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS, Items.FARORES_WIND], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS], abilities: [Abilities.SHIELD, Abilities.SLASH], glitches: true},
    ]),
    new ItemCheck("Morpha", Locations.WATER_TEMPLE, [
      {items: [Items.LONGSHOT]},
      {items: [Items.HOVER_BOOTS, Items.MEGATON_HAMMER], glitches: true},
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
    ]),
    // Shadow Temple
    new ItemCheck("Map", Locations.SHADOW_TEMPLE),
    new ItemCheck("Dead Hand", Locations.SHADOW_TEMPLE, [{abilities: [Abilities.SLASH]}]),
    new ItemCheck("Compass", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.SLASH]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB, Abilities.SLASH], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB, Abilities.SLASH], glitches: true}
    ]),
    new ItemCheck("Silver Rupees", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.BOMBS, Items.HOVER_BOOTS], abilities: [Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Invisible Spinner 1", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Invisible Spinner 2", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Falling Spikes Low", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Falling Spikes High 1", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB, Abilities.STRENGTH], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB, Abilities.STRENGTH], glitches: true}
    ]),
    new ItemCheck("Falling Spikes High 2", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB, Abilities.STRENGTH], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB, Abilities.STRENGTH], glitches: true}
    ]),
    new ItemCheck("Redead Silver Rupees", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.SLASH]},
      {items: [Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB, Abilities.SLASH], glitches: true},
      {items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB, Abilities.SLASH], glitches: true}
    ]),
    new ItemCheck("Skull Pot", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.HOVER_BOOTS], abilities: [Abilities.BOMB]},
      {items: [Items.HOOKSHOT, Items.HOVER_BOOTS], abilities: [Abilities.STRENGTH]},
      {items: [Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Wind Hint", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Gibdos (Kill)", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.HOVER_BOOTS], abilities: [Abilities.SLASH]},
      {items: [Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB, Abilities.SLASH], glitches: true},
      {items: [Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB, Abilities.SLASH], glitches: true}
    ]),
    new ItemCheck("Gibdos (Hidden)", Locations.SHADOW_TEMPLE, [
      {items: [Items.HOOKSHOT, Items.HOVER_BOOTS], abilities: [Abilities.BOMB]},
      {items: [Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Boss Key", Locations.SHADOW_TEMPLE, [
      {items: [Items.DINS_FIRE, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.DINS_FIRE, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.DINS_FIRE, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Near Boss Key", Locations.SHADOW_TEMPLE, [
      {items: [Items.DINS_FIRE, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.DINS_FIRE, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.DINS_FIRE, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Floormaster", Locations.SHADOW_TEMPLE, [
      {items: [Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    new ItemCheck("Bongo Bongo", Locations.SHADOW_TEMPLE, [
      // bow statue
      {items: [Items.FAIRY_BOW, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.FAIRY_BOW, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.FAIRY_BOW, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      // chu statue
      {items: [Items.BOMBCHU, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HOVER_BOOTS]},
      {items: [Items.BOMBCHU, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.BOMBCHU, Items.ZELDAS_LULLABY, Items.HOOKSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      // longshot scarecrow
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT, Items.HOVER_BOOTS]},
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT, Items.HYLIAN_SHIELD], abilities: [Abilities.BOMB], glitches: true},
      {items: [Items.ZELDAS_LULLABY, Items.LONGSHOT, Items.MIRROR_SHIELD], abilities: [Abilities.BOMB], glitches: true}
    ]),
    // Spirit Temple
    new ItemCheck("Child-Only 1", Locations.SPIRIT_TEMPLE, [
      // boomerang
      {age: Age.CHILD, items: [Items.BOOMERANG], abilities: [Abilities.ATTACK]},
      // slingshot
      {age: Age.CHILD, items: [Items.FAIRY_SLINGSHOT, Items.DEKU_NUTS], abilities: [Abilities.ATTACK]},
      {age: Age.CHILD, items: [Items.FAIRY_SLINGSHOT, Items.DEKU_STICK]},
      {age: Age.CHILD, items: [Items.FAIRY_SLINGSHOT], abilities: [Items.BOMB]},
      // chus
      {age: Age.CHILD, items: [Items.BOMBCHU]},
    ]),
    new ItemCheck("Child-Only 2", Locations.SPIRIT_TEMPLE, [
      // boomerang
      {age: Age.CHILD, items: [Items.BOOMERANG, Items.DEKU_STICK]},
      {age: Age.CHILD, items: [Items.BOOMERANG, Items.DINS_FIRE]},
      // slingshot
      {age: Age.CHILD, items: [Items.FAIRY_SLINGSHOT, Items.DEKU_STICK]},
      {age: Age.CHILD, items: [Items.FAIRY_SLINGSHOT, Items.DINS_FIRE]},
      // chus
      {age: Age.CHILD, items: [Items.BOMBCHU, Items.DEKU_STICK]},
      {age: Age.CHILD, items: [Items.BOMBCHU, Items.DINS_FIRE]},
    ]),
    new ItemCheck("Lizalfos Sun Room 1", Locations.SPIRIT_TEMPLE, [
      {items: [Items.BOOMERANG]},
      {items: [Items.FAIRY_SLINGSHOT]},
      {abilities: [Abilities.BOMB]},
      {items: [Items.HOOKSHOT]},
      {items: [Items.FAIRY_BOW]},
    ]),
    new ItemCheck("Lizalfos Sun Room 2", Locations.SPIRIT_TEMPLE, [
      {items: [Items.BOOMERANG]},
      {items: [Items.FAIRY_SLINGSHOT]},
      {abilities: [Abilities.BOMB]},
      {items: [Items.HOOKSHOT]},
      {items: [Items.FAIRY_BOW]},
    ]),
    new ItemCheck("Map", Locations.SPIRIT_TEMPLE, [
      {items: [Items.DINS_FIRE], abilities: [Abilities.BOMB]},
      {items: [Items.DEKU_STICK], abilities: [Abilities.BOMB]},
      {age: Age.ADULT, items: [Items.DINS_FIRE]},
      {age: Age.ADULT, items: [Items.FIRE_ARROWS]},
      {age: Age.ADULT, items: [Items.FAIRY_BOW], offLogic: true},
    ]),
    new ItemCheck("Torch Puzzle", Locations.SPIRIT_TEMPLE, [
      {items: [Items.DINS_FIRE], abilities: [Abilities.BOMB]},
      {items: [Items.DEKU_STICK], abilities: [Abilities.BOMB]},
      {age: Age.ADULT, items: [Items.DINS_FIRE]},
      {age: Age.ADULT, items: [Items.FIRE_ARROWS]},
      {age: Age.ADULT, items: [Items.FAIRY_BOW], offLogic: true},
    ]),
    new ItemCheck("Silver Gauntlets", Locations.SPIRIT_TEMPLE, [
      {abilities: [Abilities.BOMB, Abilities.ATTACK]},
      {age: Age.ADULT, abilities: [Abilities.ATTACK]},
    ]),
    new ItemCheck("Compass", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY, Items.HOOKSHOT]},
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS], abilities: [Abilities.BOMB, Abilities.SHIELD], glitches: true},
    ]),
    new ItemCheck("Boulder Room", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.HOOKSHOT]},
      {age: Age.ADULT, items: [Items.FAIRY_BOW]},
      {age: Age.ADULT, abilities: [Abilities.BOMB]},
    ]),
    new ItemCheck("Invisible Floormaster 1", Locations.SPIRIT_TEMPLE, [{age: Age.ADULT}]),
    new ItemCheck("Invisible Floormaster 2", Locations.SPIRIT_TEMPLE, [{age: Age.ADULT}]),
    new ItemCheck("Lullaby (hand chest)", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY]},
    ]),
    new ItemCheck("Lullaby (ledge chest)", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY, Items.HOOKSHOT]},
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY, Items.HOVER_BOOTS]},
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY], abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Invisible Chest 1", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.LENS_OF_TRUTH], abilities: [Abilities.BOMB]},
      {age: Age.ADULT, abilities: [Abilities.BOMB], offLogic: true},
    ]),
    new ItemCheck("Invisible Chest 2", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.LENS_OF_TRUTH], abilities: [Abilities.BOMB]},
      {age: Age.ADULT, abilities: [Abilities.BOMB], offLogic: true},
    ]),
    new ItemCheck("Sun near Armos", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.MIRROR_SHIELD], abilities: [Abilities.BOMB]},
    ]),
    new ItemCheck("Mirror Shield", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, abilities: [Abilities.BOMB, Abilities.ATTACK]},
    ]),
    new ItemCheck("Boss Key", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY, Items.FAIRY_BOW, Items.HOOKSHOT], abilities: [Abilities.BLAST]},
      {age: Age.ADULT, items: [Items.ZELDAS_LULLABY], offLogic: true},
    ]),
    new ItemCheck("Topmost Sun", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.MIRROR_SHIELD]},
    ]),
    new ItemCheck("Twinrova", Locations.SPIRIT_TEMPLE, [
      {age: Age.ADULT, items: [Items.MIRROR_SHIELD, Items.HOOKSHOT], abilities: [Abilities.BOMB, Abilities.ATTACK]},
    ]),
    // Bottom of the Well
    new ItemCheck("Front Bombable", Locations.BOTTOM_OF_THE_WELL, [{abilities: [Abilities.BOMB]}]),
    new ItemCheck("Front Hidden", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.LENS_OF_TRUTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Compass (Big Center)", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.LENS_OF_TRUTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Small Center", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.LENS_OF_TRUTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Right Hidden", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.LENS_OF_TRUTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Beamos Room", Locations.BOTTOM_OF_THE_WELL),
    new ItemCheck("Like Like Cage", Locations.BOTTOM_OF_THE_WELL),
    new ItemCheck("Map (Basement)", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.LENS_OF_TRUTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Back Bombable", Locations.BOTTOM_OF_THE_WELL, [{abilities: [Abilities.BOMB]}]),
    new ItemCheck("Underwater Left", Locations.BOTTOM_OF_THE_WELL, [{items: [Items.ZELDAS_LULLABY]}]),
    new ItemCheck("Coffin Key", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.DEKU_STICK]},
      {abilities: [Abilities.BURN]},
      {items: [Items.BOOMERANG], offLogic: true},
    ]),
    new ItemCheck("Underwater Front", Locations.BOTTOM_OF_THE_WELL, [{items: [Items.ZELDAS_LULLABY]}]),
    new ItemCheck("Invisible Chest", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.ZELDAS_LULLABY, Items.LENS_OF_TRUTH]},
      {items: [Items.ZELDAS_LULLABY], offLogic: true}
    ]),
    new ItemCheck("Lens of Truth", Locations.BOTTOM_OF_THE_WELL, [
      {items: [Items.ZELDAS_LULLABY, Items.KOKIRI_SWORD]},
      {items: [Items.ZELDAS_LULLABY], abilities: [Abilities.SLASH], offLogic: true}
    ]),
    // Ice Cavern
    new ItemCheck("Map", Locations.ICE_CAVERN, [110,10], "1F", [{abilities: [Abilities.BOTTLE]}]),
    new ItemCheck("Compass", Locations.ICE_CAVERN, [155,160], "1F", [{abilities: [Abilities.BOTTLE]}]),
    new ItemCheck("Heart Piece", Locations.ICE_CAVERN, [150,140], "1F", [{abilities: [Abilities.BOTTLE]}]),
    new ItemCheck("Iron Boots", Locations.ICE_CAVERN, [43,175], "1F", [{abilities: [Abilities.BOTTLE]}]),
    new ItemCheck("Serenade of Water", Locations.ICE_CAVERN, [43,175], "1F", [{abilities: [Abilities.BOTTLE, Abilities.ATTACK]}]),
    // Gerudo Training Grounds
    new ItemCheck("Lobby Eye Switch 1", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.FAIRY_BOW]},
      {items: [Items.FAIRY_SLINGSHOT]},
    ]),
    new ItemCheck("Lobby Eye Switch 2", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.FAIRY_BOW]},
      {items: [Items.FAIRY_SLINGSHOT]},
    ]),
    new ItemCheck("Stalfos", Locations.GERUDO_TRAINING_GROUNDS, [
      {abilities: [Abilities.ATTACK]},
    ]),
    new ItemCheck("Wolfos", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT], abilities: [Abilities.ATTACK]},
      {abilities: [Abilities.ATTACK], offLogic: true},
    ]),
    new ItemCheck("Like Like 1", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS, Items.LENS_OF_TRUTH], abilities: [Abilities.ATTACK]},
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.HOVER_BOOTS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.BOMBS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK, Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Like Like 2", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS, Items.LENS_OF_TRUTH], abilities: [Abilities.ATTACK]},
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.HOVER_BOOTS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.BOMBS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK, Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Like Like 3", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS, Items.LENS_OF_TRUTH], abilities: [Abilities.ATTACK]},
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.HOVER_BOOTS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.BOMBS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK, Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Like Like 4", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS, Items.LENS_OF_TRUTH], abilities: [Abilities.ATTACK]},
      {items: [Items.HOOKSHOT, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.HOVER_BOOTS, Items.SILVER_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.BOMBS, Items.SILVER_GAUNTLETS], abilities: [Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Eye Statues", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.FAIRY_BOW, Items.MEGATON_HAMMER]},
      {items: [Items.HOOKSHOT, Items.FAIRY_BOW, Items.LENS_OF_TRUTH]},
      {items: [Items.HOOKSHOT, Items.FAIRY_BOW], offLogic: true},
      {items: [Items.HOVER_BOOTS, Items.FAIRY_BOW], offLogic: true},
      {items: [Items.BOMBS, Items.FAIRY_BOW], abilities: [Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Above Eye Statues", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.FAIRY_BOW, Items.LENS_OF_TRUTH]},
      {items: [Items.HOOKSHOT, Items.FAIRY_BOW], offLogic: true},
      {items: [Items.HOVER_BOOTS, Items.FAIRY_BOW], offLogic: true},
      {items: [Items.BOMBS, Items.FAIRY_BOW], abilities: [Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Flaming Chest", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.MEGATON_HAMMER]},
      {items: [Items.HOOKSHOT], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.BOMBS], abilities: [Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Flaming Enemies", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT], abilities: [Abilities.ATTACK]},
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.ATTACK], offLogic: true},
      {items: [Items.BOMBS], abilities: [Abilities.SHIELD], offLogic: true},
    ]),
    new ItemCheck("Beamos", Locations.GERUDO_TRAINING_GROUNDS, [
      {abilities: [Abilities.BOMB]},
    ]),
    new ItemCheck("Key Ledge", Locations.GERUDO_TRAINING_GROUNDS),
    new ItemCheck("Maze Right 1", Locations.GERUDO_TRAINING_GROUNDS),
    new ItemCheck("Maze Right 2", Locations.GERUDO_TRAINING_GROUNDS),
    new ItemCheck("Underwater Rupees", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.HOOKSHOT, Items.SONG_OF_TIME, Items.IRON_BOOTS, Items.ZORA_TUNIC]},
      {items: [Items.HOOKSHOT, Items.SONG_OF_TIME, Items.IRON_BOOTS], offLogic: true},
    ]),
    new ItemCheck("Fake Ceiling", Locations.GERUDO_TRAINING_GROUNDS, [
      {items: [Items.LENS_OF_TRUTH]},
      {offLogic: true},
    ]),
    new ItemCheck("Maze Left 1", Locations.GERUDO_TRAINING_GROUNDS),
    new ItemCheck("Maze Left 2", Locations.GERUDO_TRAINING_GROUNDS),
    new ItemCheck("Maze Left 3", Locations.GERUDO_TRAINING_GROUNDS),
    new ItemCheck("Ice Arrows", Locations.GERUDO_TRAINING_GROUNDS),
    // Ganon's Castle
    new ItemCheck("Double Defense Fairy", Locations.GANONS_CASTLE, [225,78], "0", [
      {age: Age.ADULT, items: [Items.GOLDEN_GAUNTLETS]},
      {age: Age.ADULT, glitches: true},
    ]),
    // Inside Ganon's Castle
    new ItemCheck("Forest Trial", Locations.INSIDE_GANONS_CASTLE),
    new ItemCheck("Water Trial 1", Locations.INSIDE_GANONS_CASTLE),
    new ItemCheck("Water Trial 2", Locations.INSIDE_GANONS_CASTLE),
    new ItemCheck("Shadow Trial (small)", Locations.INSIDE_GANONS_CASTLE, [
      {items: [Items.HOOKSHOT]},
      {items: [Items.HOVER_BOOTS]},
      {items: [Items.SONG_OF_TIME]},
      {items: [Items.FIRE_ARROWS]},
      {abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Shadow Trial (big)", Locations.INSIDE_GANONS_CASTLE, [
      {items: [Items.LONGSHOT, Items.DINS_FIRE]},
      {items: [Items.LONGSHOT, Items.HOVER_BOOTS]},
      {items: [Items.FIRE_ARROWS]},
      {items: [Items.HOVER_BOOTS], abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
    ]),
    new ItemCheck("Light Trial 1", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.GOLDEN_GAUNTLETS]}]),
    new ItemCheck("Light Trial 2", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.GOLDEN_GAUNTLETS]}]),
    new ItemCheck("Light Trial 3", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.GOLDEN_GAUNTLETS]}]),
    new ItemCheck("Light Trial 4", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.GOLDEN_GAUNTLETS]}]),
    new ItemCheck("Light Trial 5", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.GOLDEN_GAUNTLETS]}]),
    new ItemCheck("Light Trial 6", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.GOLDEN_GAUNTLETS]}]),
    new ItemCheck("Light Trial (kill enemies)", Locations.INSIDE_GANONS_CASTLE, [
      {items: [Items.GOLDEN_GAUNTLETS, Items.LENS_OF_TRUTH], abilities: [Abilities.ATTACK]},
      {items: [Items.GOLDEN_GAUNTLETS], abilities: [Abilities.ATTACK], offLogic: true},
    ]),
    new ItemCheck("Light Trial (Lullaby)", Locations.INSIDE_GANONS_CASTLE, [
      {items: [Items.GOLDEN_GAUNTLETS, Items.ZELDAS_LULLABY]},
    ]),
    new ItemCheck("Spirit Trial", Locations.INSIDE_GANONS_CASTLE, [{items: [Items.HOOKSHOT]}]),
    new ItemCheck("Spirit Trial (invisible)", Locations.INSIDE_GANONS_CASTLE, [
      {items: [Items.HOOKSHOT, Items.BOMBCHU, Items.LENS_OF_TRUTH]},
      {items: [Items.HOOKSHOT, Items.BOMBCHU], offLogic: true},
    ]),
    new ItemCheck("Boss Key", Locations.INSIDE_GANONS_CASTLE, [
      {settings: {FAST_GANON: true}},
      {abilities: [Abilities.SHIELD, Abilities.BOMB], glitches: true},
      {items: [Items.DINS_FIRE, Items.LONGSHOT, Items.MEGATON_HAMMER, Items.BOMBCHU, Items.LIGHT_ARROWS, Items.MIRROR_SHIELD, Items.GOLDEN_GAUNTLETS], abilities: [Abilities.BOTTLE]},
      {items: [Items.FIRE_ARROWS, Items.LONGSHOT, Items.MEGATON_HAMMER, Items.BOMBCHU, Items.LIGHT_ARROWS, Items.MIRROR_SHIELD, Items.GOLDEN_GAUNTLETS], abilities: [Abilities.BOTTLE]},
    ]),
  ];
});
