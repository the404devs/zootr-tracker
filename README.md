# zootr-tracker
A tracker application for Ocarina of Time Randomizer  
https://zootr.the404.nl
Based off the work of Jared Branum, which can be found [here](https://github.com/jaredbranum/zootr-tracker)

### *0.2.7 (06/12/20)*
----------------------
- Fixed broken 0.2.6 CSS.
- Minor fixes here and there.

### *0.2.6 (01/22/20)*
----------------------
- Testing some UI tweaks
- What even is this project

### *0.2.5 (11/01/19)*
----------------------
- Completed maps for Water, Shadow and Spirit Temples, and BOTW (Still need to plot checks).
- Adjusted maps for Deku, Dodongo's, and Jabu to have each floor correctly superimposed over each other.
- Slight adjustments to the map view.
- Adjusted Song class to contain a sequence of notes corresponding to that song. Will be used for a future loading animation.

### *0.2.4 (03/07/19)*
----------------------
- Fixed an issue that caused the application to load incorrectly, by attempting to create an Item object prior to loading the Item class. Oops.
- Loading animation. Exact same one as used in 404editor, might make a more interesting one in the future
- Dungeon maps in need of plotting:
	- Water Temple
- Dungeon maps in need of completion:
	- Spirit Temple
	- Shadow Temple
	- Ganon's Castle
	- BOTW
	- GTG

### *0.2.3 (02/19/19)*
----------------------
- A whole new interface for recording the hints from the Pedestal of Time.
	- If, by mistake, you select the same location for two medallions/stones, a warning message will appear.
- Changed Kakariko colour from #b348d2 to #8500f7. It seemed too light, with the Shadow Temple and all.
- Changed some button styling
- New Settings interface, the more modals the merrier!
- Reworked the UI to be more mobile-friendly. Here are the details:
	- Before, both the left (checks, tabs) and the right (inventory) sides were always displayed, no matter what. This was no big deal on a normal screen, but on something smaller, like a cell phone, this meant the map got squashed in between the two.
	- Now, if the width of the screen is below 1190px, the inventory is automatically hidden, and a tab is added on the left to pull up the inventory whenever you need it.
	- This gives the map room to breathe, and prevents it from making the item checks unreadable.
	- Additionally, if the screen is less than 500px tall, the inventory's header is hidden, preventing you from having to scroll through the inventory pop-up to mark off the Stone of Agony.
- Shrank the map container down a bit, to reduce the wasted space on it's right side.
	- As such, the extremely wide map of the Graveyard was adjusted accordingly.
	- Other affected areas were also corrected.




- Known issues
	- If you mark off a check you can't actually access with your current inventory (for example, a Song of Storms grotto without an ocarina), it won't disappear from the map until you meet the item requirements for that check.

### *0.2.2 (02/17/19)*
----------------------
I'm back on the grind with this thing again!
Here's what's been changed:
- Slight UI improvements
	- New checkboxes, radio buttons
	- Added text to header
	- Slight change to checklist format
	- Altered Inventory layout
	- Left-side tabs are a bit larger
	- Settings tab will now be a modal dialog (0.2.3)
	- Gave default buttons some CSS love. They still need some more, though.
	- When viewing a map of a dungeon, the map's title will now show the current floor
		- Ex: Forest Temple (2F)
- Finished up putting Fire Temple checks on the map
- Fixed rooms missing from Fire Temple 3F
- Removal of obsolete tab-switching code, now that only the left-hand tabs are present.
