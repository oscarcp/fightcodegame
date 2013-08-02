// Oscar Carballal Prego <oscar@oscarcp.com>
// License: WTFPL

function Robot(zoidberg) {
    // At the start, we turn our turret 90deg (facing to then exterior)
    zoidberg.rotateCannon(90);
}
// Count the turns the tank does
var turns = 0;

Robot.prototype.onIdle = function(ev) {
    // We move in circles, with our turret facing out
    var zoidberg = ev.robot;
    zoidberg.ahead(10);
    zoidberg.turn(-45);
    turns += 1;
    // Evert N turns we run away to avoid beinghit
    if (turns == 3) {
        zoidberg.ahead(150);
        // Reset turns counter
        turns = 0;
    }
    // If we are below 50% life, we summon a clone to help us
    if (zoidberg.life < 50) {
        zoidberg.clone();
    }
};

Robot.prototype.onScannedRobot = function(ev) {
    var zoidberg = ev.robot;
    var enemyTank = ev.scannedRobot;
    if (enemyTank.id !== zoidberg.parentId && enemyTank.parentId !== zoidberg.id) {
        // Let's destroy!
        zoidberg.fire();
        // Statisticly speaking, this should give you ~30% hit chance when your enemy
        // runs away. If you put a slightly higher number maybe you get more chances
        zoidberg.rotateCannon(30);
        // Duplicate our chances of hitting the enemy bot if he didn't run away. It
        // makes our bot miss more, but also hit more if the momentum is good.
        zoiberg.fire();
    }
};
