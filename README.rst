FightCode War Robots
====================

This is my personal repository (backup) of war bots for the site fightcodegame.com.

For viewing the latest version of my bots please visit http://fightcodegame.com/profile/oscarcp/

License: WTFPL


Zoidberg
--------

**Status:** *Stable, considered finished*

**Hit chance:** *~30% including enemy runaway situations*

**Winning chance:** *~95% for bots in ranking <#2500*

**SLOC:** *28 w/o comments*

**Flaws:** *Recurrent loose agains WallRobots. This is due to the fact that rotateCannon(30) is not enough if the enemy
walks straight for a long distance. Changing it for 35 or 40 should solve it, but it has impact on close encounters.*


Very basic bot based on statistic prediction of movement. Since the speed of the tanks in the game is always the same
and the turret turn degrees are "predictable" in most cases, we can stablish a rough statistic of what moves to do and
when to fire.


SID MKII
--------

**Status:** *Pre-alpha, on development*

**Hit chance:** *N/A*

**Winning chance:** *N/A*

**SLOC:** *N/A*

Named after the organic nanotech syntethic android is a more advanced bot that provides a very basic sentinence around it.
