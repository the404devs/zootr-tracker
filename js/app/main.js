define(["require", "jquery", "data/ages", "data/abilities", "data/locations", "data/regions", "data/itemsAndSongs", "data/itemChecks", "classes/inventory", "classes/itemCheck", "data/settings"], function(require, $, Age, Abilities, Locations, Regions, Items, ItemChecks, Inventory, ItemCheck, Settings) {
  var toSlug = function(str){ return str.replace(/['\(\)]/g, '').replace(/\s/g, '-').toLowerCase(); };
  var toKey = function(str){ return str.replace(/['\(\)]/g, '').replace(/[\s-]/g, '_').toUpperCase(); };
  var toTitleCase = function(str) {
    str = str.toLowerCase()
    return str.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  } 
  window.itemChecksByLocation = {};
  window.Items = Items;

  var generateLocationList = function(container, regions){
    var region, location, header, keys;
    $.each(regions, function(regionName, locations){
      if (regionName=="Kokiri Forest"){
        region = $('<div/>').addClass('region fade').addClass(toSlug(regionName)).attr('data-region', toSlug(regionName)).attr('style', 'display:block');
      }
      else{
        region = $('<div/>').addClass('region fade').addClass(toSlug(regionName)).attr('data-region', toSlug(regionName)).attr('style', 'display:none');
      }
      region.append($('<h2/>').text(regionName));

      locations.forEach(function(locationName){
        location = $('<div/>').addClass('location').attr('data-location', toKey(locationName));
        header = $('<h3/>').append($('<span/>').addClass('location-name').text(locationName));
        keys = $('<div/>').addClass('keys');
        if (Items['BIG_KEY_' + locationName] || Items['SMALL_KEY_' + locationName]){
          location.addClass('has-keys');
          region.addClass('has-keys');
          
          if (Items['BIG_KEY_' + locationName]){
            keys.append(
              $('<div/>').addClass('item').
                attr('data-item', 'BIG_KEY_' + locationName).
                attr('data-original-item', 'BIG_KEY_' + locationName).
                append($('<img/>').attr('src', 'images/BIG_KEY.png'))
            );  
          }
          if (Items['SMALL_KEY_' + locationName]){
            keys.append(
              $('<div/>').addClass('item').
                attr('data-item', 'SMALL_KEY_' + locationName).
                attr('data-original-item', 'SMALL_KEY_' + locationName).
                append($('<img/>').attr('src', 'images/SMALL_KEY.png')).
                append($('<span/>').addClass('count'))
            );
          }          
        }
        keys.append(
          $('<div/>').addClass('item').addClass('map').
            attr('data-item', 'MAP_' + locationName).
            append($('<img/>').attr('src', 'images/MAP_ICON.png'))
        );
        header.append(keys);
        location.append(header);
        location.append($('<ul/>').addClass('item-checks'));
        region.append(location);
      });
      container.append(region);
    });

    $('#map-container').addClass('kokiri-forest');
    $('#map-header').html('Kokiri Forest');
    $("#map-background").attr('src',"images/MAP_KOKIRI_FOREST.png");

  };

  var generateChecklist = function(checks){
    checks.forEach(function(check){
      $('[data-location="'+toKey(check.location)+'"] ul').append(
        $('<li/>').addClass('item-check').addClass('inaccessible').attr('data-check', check.name).attr('map-location',check.mapCoords).append(
          $('<label />').text(check.name).attr('for', toSlug(check.location) + '-' +toSlug(check.name)).prepend(
            $('<input type="checkbox"/>').addClass('checkbox').attr('id', toSlug(check.location) + '-' +toSlug(check.name))
          ).append(
            $('<span />').addClass('checkmark')
          )
        )
      );
      itemChecksByLocation[check.location] = itemChecksByLocation[check.location] || {};
      itemChecksByLocation[check.location][check.name] = check;
    });
  };

  var generateSettingsList = function(table, settings){
    var $tr, $td, $input, first;
    $.each(settings, function(setting, values){
      $tr = $('<tr/>').append($('<td/>').text(setting)).attr('data-setting', toSlug(setting));
      $td = $('<td/>');
      $label = $('<label/>').addClass('input-container').css('margin-right','0');
      $td.append($label);
      if (typeof values === 'object'){
        $input = $('<select/>').attr('name', toKey(setting));
        $.each(values, function(key, value){
          $input.append($('<option/>').val(key).text(value));
        });
        $label.append($input);
      } else {
        $input = $('<input type="checkbox"/>').addClass('checkbox').attr('name', toKey(setting)).val(toKey(setting));
        if (values) $input.attr('checked', 'checked');
        $span = $('<span/>').addClass('checkmark').css('top','-5px');
        $label.append($input);
        $label.append($span);
      }
      table.append($tr.append($td));
    });
  };

  var showPopup = function(selector){
    $(selector).show();
    $('#overlay').show();
  }

  var hidePopup = function(){
    $('#overlay').hide();
    $('.popup').hide();
  };

  var dungeon = function(location){
    $('#floor-selector').empty();

    if (location===Locations.DEKU_TREE){      
      $('#floor-selector').append($('<span/>').attr('class','floor').attr('num','3F').html('3F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','2F').html('2F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','1F').attr('style','background-color:black;color:white').html('1F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','B1').html('B1')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','B2').html('B2'));
      $('#map-container').attr('floor','1F');
      $("#map-background").attr('src',"images/MAP_DEKU_TREE_1F.png");
      $("#floor-indicator").html("(1F)");
    }
    else if (location===Locations.DODONGOS_CAVERN){      
      $('#floor-selector').append($('<span/>').append($('<span/>').attr('class','floor').attr('num','2F').html('2F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','1F').attr('style','background-color:black;color:white').html('1F')));
      $('#map-container').attr('floor','1F');
      $("#map-background").attr('src',"images/MAP_DODONGOS_CAVERN_1F.png");
      $("#floor-indicator").html("(1F)");
    }   
    else if (location===Locations.JABU_JABUS_BELLY){      
      $('#floor-selector').append($('<span/>').attr('class','floor').attr('num','1F').attr('style','background-color:black;color:white').html('1F')).append($('<br/>'))
        .append($('<span/>').attr('class','floor').attr('num','B1').html('B1'));
      $('#map-container').attr('floor','1F');
      $("#map-background").attr('src',"images/MAP_JABU_JABUS_BELLY_1F.png");
      $("#floor-indicator").html("(1F)");
    }  
    else if (location===Locations.ICE_CAVERN){      
      $('#floor-selector').append($('<span/>').attr('class','floor').attr('num','1F').attr('style','background-color:black;color:white').html('1F'));
      $('#map-container').attr('floor','1F');
      $("#map-background").attr('src',"images/MAP_ICE_CAVERN_1F.png");
      $("#floor-indicator").html("(1F)");
    } 
    else if (location===Locations.FOREST_TEMPLE){      
      $('#floor-selector').append($('<span/>').attr('class','floor').attr('num','2F').html('2F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','1F').attr('style','background-color:black;color:white').html('1F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','B1').html('B1')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','B2').html('B2'));
      $('#map-container').attr('floor','1F');
      $("#map-background").attr('src',"images/MAP_FOREST_TEMPLE_1F.png");
      $("#floor-indicator").html("(1F)");
    }
    else if (location===Locations.FIRE_TEMPLE){      
      $('#floor-selector').append($('<span/>').attr('class','floor').attr('num','5F').html('5F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','4F').html('4F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','3F').html('3F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','2F').html('2F')).append($('<br/>'))
      .append($('<span/>').attr('class','floor').attr('num','1F').attr('style','background-color:black;color:white').html('1F'));
      $('#map-container').attr('floor','1F');
      $("#map-background").attr('src',"images/MAP_FIRE_TEMPLE_1F.png");
      $("#floor-indicator").html("(1F)");
    }
  };

  var ItemTracker = function(){
    this.select = function(e){
      var $elem = $(e.target).closest('.item');
      $elem.append($('<img/>').attr('class','selection-box').attr('src','images/select-y.png'));
    }.bind(this);

    this.unselect = function(e){
      $(".selection-box").remove();
    }.bind(this);

    this.mapPointHover = function(e){
      $('.map-popup').remove();
      var $elem = $(e.target).closest('.map-point');
      $elem.css('animation','flash 1s infinite');
      $elem.css('z-index','4');
      $elem.parent().append($('<span/>').attr('class','map-popup').attr('style','top:'+$elem.css('top')+'; left:'+$elem.css('left')+';').html($elem.attr('name')));
    }.bind(this);

    this.mapPointLeave = function(e){
      var $elem = $(e.target).closest('.map-point');
      $elem.css('animation','');
      $elem.css('z-index','3');
      $('.map-popup').remove();
    }.bind(this);

    this.changeFloor = function(e){
      floors = document.getElementsByClassName('floor');
      for (var i = floors.length - 1; i >= 0; i--) {
        floors[i].style.backgroundColor = 'transparent';
        floors[i].style.color = 'white';
      }
      var $elem = $(e.target).closest('.floor');
      var location = Locations[toKey($('#map-header').html())];
      $elem.css('background-color','black');
      $('#map-background').attr('src','images/MAP_'+toKey($('#map-header').html())+'_'+$elem.attr('num')+'.png');
      $('#map-container').attr('floor', $elem.attr('num'));
      $("#floor-indicator").html("(" + $elem.attr('num') + ")");
      this.refreshAccessible();
    }.bind(this);

    this.mapHighlight = function(e){
      $elem = $(e.target).closest('.item-check');
      points = document.getElementsByClassName('map-point');
      for (var i = points.length - 1; i >= 0; i--) {
        if ($(points[i]).attr('name')==$elem.attr('data-check')){
          points[i].style.animation='flash 1s infinite';
          points[i].style.zIndex='4';
          break;
        }
      }
    }.bind(this);

    this.mapUnhighlight = function(e){
      $elem = $(e.target).closest('.item-check');
      points = document.getElementsByClassName('map-point');
      for (var i = points.length - 1; i >= 0; i--) {
        points[i].style.animation='';
        points[i].style.zIndex='3';
      }
    }.bind(this);

    this.collect = function(e){
      var $elem = $(e.target).closest('.item');
      var item = Items[$elem.attr('data-item')];

      if (typeof item.count === "number"){
        if (item.count < item.max) item.count++;
        $elem.find('.count').text(item.count);
      }
      if ($elem.hasClass("map")){
        var location = Locations[$elem.parent().parent().parent().attr('data-location')];
        var regionChecks = $elem.parent().parent().parent().find('.item-checks').children('.item-check:not(.inaccessible):not(.collected)');        
        // $("#map-background").fadeOut(500);
        $("#map-background").attr('src',"images/MAP_"+toKey(location)+".png");
        // $("#map-background").fadeIn(500);
        $("#map-header").html(location);
        $("#floor-indicator").html(" ");
        $("#map-container").removeClass();
        $("#map-container").addClass($elem.parent().parent().parent().parent().attr('data-region'));
        $('#map-container').attr('floor','0');
        dungeon(location);
        $('.floor').click(this.changeFloor);
        $("#map-foreground").empty();
        regionChecks.each(function(check){
          name = ($(this).attr('data-check'));
          coordStr = $(this).attr('map-location') + "";
          coords = coordStr.split(',');
          $("#map-foreground").append($("<div/>").attr('class','map-point').attr('style','position:absolute; top:'+coords[1]+'px; left:'+coords[0]+'px;').attr('name',name).append($('<img/>').attr('src','images/MAP_MARKER.png')));
          $('.map-point').mouseenter(this.mapPointHover);
          $('.map-point').mouseleave(this.mapPointLeave);
        });        
      }
      else if ($elem.hasClass('collected')){
        if (item.next){
          var newItem = this.inventory.upgrade(item);
          $elem.attr('data-item', newItem.key);
          $elem.find('img').attr('src', 'images/' + newItem.key + '.png');
          this.select();
        } else if (typeof item.count !== "number"){
          this.inventory.remove(item);
          $elem.removeClass('collected');
          if ($elem.attr('data-item') != $elem.attr('data-original-item')){
            $elem.attr('data-item', $elem.attr('data-original-item'));
            $elem.find('img').attr('src', 'images/' + $elem.attr('data-original-item') + '.png');            
          }
          this.unselect();
        }
      } 
      else if ($elem.hasClass('stone-hint')){
        var stonename = toTitleCase($elem.attr('id').replace('_',' ')).replace("s ", "'s ");
        $('#hint-header').html(stonename);
        $('#hint-text').html("Read the Pedestal of Time. Where is the <b>"+stonename+"</b>?")
        $('#hint-select-modal').attr('active-hint',$elem.attr('id')).css('display','block');
      }
      else {
        this.inventory.add(item);
        $elem.addClass('collected');
      }
      this.refreshAccessible();
    }.bind(this);

    this.uncollect = function(e){
      e.preventDefault();
      var $elem = $(e.target).closest('.item');
      var item = Items[$elem.attr('data-item')];

      if (typeof item.count === "number"){
        if (item.count){
          item.count--;
        }
        if (!item.count){
          this.inventory.remove(item);
          $elem.removeClass('collected');
        }
        $elem.find('.count').text(item.count);
      }
      if ($elem.hasClass('collected')){
        if (item.prev()){
          var newItem = this.inventory.downgrade(item);
          $elem.attr('data-item', newItem.key);
          $elem.find('img').attr('src', 'images/' + newItem.key + '.png');
        } else if (typeof item.count !== "number"){
          this.inventory.remove(item);
          $elem.removeClass('collected');
        }
      }
      this.refreshAccessible();
      return false;
    }.bind(this);

    this.check = function(e){
      var $box = $(e.target), $check = $(e.target).closest('.item-check');
      var location = Locations[$check.closest('.location').attr('data-location')];
      var itemCheck = itemChecksByLocation[location][$check.attr('data-check')];
      var preset = itemCheck.presetItem(this.inventory);
      if ($box.is(':checked')){
        $check.addClass('collected');
        this.inventory.check(itemCheck);
        if (preset && !this.inventory.hasItem(preset))
          $('.item[data-item=' + preset.key + ']').click();
      } else {
        $check.removeClass('collected');
        this.inventory.uncheck(itemCheck);
        if (preset && this.inventory.hasItem(preset))
          $('.item[data-item=' + preset.key + ']').contextmenu();
      }
      this.refreshAccessible();
    }.bind(this);

    this.changeAge = function(){
      $('.collected').addClass('no-animation');
      this.inventory.age = this.currentAge();
      this.refreshAccessible();
      this.applySettings();
    }.bind(this);

    this.applySettings = function(){
      form = $('#settings');
      settings = {};
      form.serializeArray().forEach(function(x){
        settings[toKey(x.name)] = x.value;
      });
      form.find('.checkbox').each(function(){
        settings[toKey(this.name)] = this.checked;
      });
      this.settings = settings;
      this.inventory.settings = settings;

      // TODO: calculate Go mode based on FG and bridge in settings

      if (settings.SHOW_OBTAINABLE_ONLY){
        $('#locations').addClass('hide-inaccessible');
      } else {
        $('#locations').removeClass('hide-inaccessible');
      }

      if (settings.KEYSANITY){
        $('#locations').addClass('keysanity');
      } else {
        $('#locations').removeClass('keysanity');
      }

      if (settings.HIDE_COLLECTED){
        $('#locations').addClass('hide-collected');
      } else {
        $('#locations').removeClass('hide-collected');
      }
      this.refreshAccessible();
    }.bind(this);

    this.currentAge = function(){
      return Age[$('#age-selector').serializeArray()[0].value];
    };

    this.refreshAccessible = function(){
      $("#map-foreground").empty();
      ItemChecks.forEach(function(check){
        var $elem = $('#' + toSlug(check.location) + '-' + toSlug(check.name)).closest('.item-check');
        if (check.available(this.inventory, this.currentAge())){
          $elem.removeClass('inaccessible');
          if (toSlug(check.location)==toSlug($('#map-header').html()) && !$elem.hasClass('collected') && check.floor==$('#map-container').attr('floor')) {
              name = $elem.attr('data-check');
              coordStr = $elem.attr('map-location') + "";
              coords = coordStr.split(',');

              $("#map-foreground").append($("<div/>").attr('class','map-point').attr('style','position:absolute; top:'+coords[1]+'px; left:'+coords[0]+'px;').attr('name',name).append($('<img/>').attr('src','images/MAP_MARKER.png')));
              $('.map-point').mouseenter(this.mapPointHover);
              $('.map-point').mouseleave(this.mapPointLeave);
          }
        } else {
          $elem.addClass('inaccessible');
          if (settings.SHOW_OBTAINABLE_ONLY==false && toSlug(check.location)==toSlug($('#map-header').html()) && check.floor==$('#map-container').attr('floor')) {
              name = $elem.attr('data-check');
              coordStr = $elem.attr('map-location') + "";
              coords = coordStr.split(',');

              $("#map-foreground").append($("<div/>").attr('class','map-point').attr('style','position:absolute; top:'+coords[1]+'px; left:'+coords[0]+'px;').attr('name',name).append($('<img/>').attr('src','images/MAP_MARKER.png')));
              $('.map-point').mouseenter(this.mapPointHover);
              $('.map-point').mouseleave(this.mapPointLeave);
          }
        }
      }.bind(this));
      ['.location', '.region'].forEach(function(selector){
        $(selector).each(function(){
          if ($(this).find('.item-check:not(.inaccessible)').length){
            $(this).removeClass('inaccessible');
          } else {
            $(this).addClass('inaccessible');
          }
          if ($(this).find('.item-check:not(.collected)').length){
            $(this).removeClass('collected');
          } else {
            $(this).addClass('collected');
          }
        });
      });
    }.bind(this);

    this.showSettings = function(e){
      e.preventDefault();
      showPopup('#settings-popup');
      return false;
    }.bind(this);

    this.recordPedestalHint = function(e){
      var button = $(e.target).closest('.pedestal-hint'), dungeonItems = {};
      $('.item[data-item=' + $('#hint-select-modal').attr('active-hint') + '] .subtitle').text(button.val());
      $('#'+$('#hint-select-modal').attr('active-hint')).find('.medallion-location').html(button.attr('long'));
      $('#hint-warning').css('visibility', 'hidden');
      $('.medallion-location').each(function(){
        var hint1 = $(this);
        $('.medallion-location').each(function(){
          var hint2 = $(this);
          if (hint1.html()==hint2.html() && hint1.html()!="" && hint2.html()!="" && hint1.parent().attr('id')!=hint2.parent().attr('id')) {
            $('#hint-warning').css('visibility', 'visible');
          }
        });
      });
      $('#hint-select-modal').fadeOut();
    }.bind(this);

    this.init = function(){
      this.inventory = new Inventory([], [Locations.KOKIRI_FOREST, Locations.LOST_WOODS]);
      this.settings = {};
      $('.item').click(this.collect);
      $('.item').mouseenter(this.select);
      $('.item').mouseleave(this.unselect);
      $('.item').contextmenu(this.uncollect);
      $('.item-check').mouseenter(this.mapHighlight);
      $('.item-check').mouseleave(this.mapUnhighlight);
      $('.floor').click(this.changeFloor);
      $('.map-point').mouseenter(this.mapPointHover);
      $('.map-point').mouseleave(this.mapPointLeave);
      $('.item-check [type="checkbox"]').on('change', this.check);
      $('#age-selector input').on('change', this.refreshAccessible);
      $('#age-selector').on('change', this.changeAge);
      $('#settings .checkbox, #settings select').on('change', this.applySettings);
      $('#settings-button').submit(this.showSettings);
      $('.pedestal-hint').click(this.recordPedestalHint);
      this.applySettings();
    }.bind(this);
  };

  $(function(){
    generateLocationList($('#locations .locations'), Regions);
    generateChecklist(ItemChecks);
    generateSettingsList($('#settings table'), Settings);
    window.checks = ItemChecks;
    window.tracker = new ItemTracker();
    window.tracker.init();
    $(function(){$("div").last().remove();});
  });
});


