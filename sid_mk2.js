/// Oscar Carballal Prego <oscar@oscarcp.com>
// License: WTFPL
// CLONED FROM ZOIDBERG. STATUS: Pre-alpha

function Robot(sid) {
    // At the start, we turn our turret 90deg (facing to then exterior)
    sid.rotateCannon(90);
}
// Count the turns the tank does
var turns = 0;

Robot.prototype.onIdle = function(ev) {
    // We move in circles, with our turret facing out
    var sid = ev.robot;
    sid.ahead(10);
    sid.turn(-45);
    turns += 1;
    // Evert N turns we run away to avoid beinghit
    if (turns == 3) {
        sid.ahead(150);
        // Reset turns counter
        turns = 0;
    }
    // If we are below 50% life, we summon a clone to help us
    if (sid.life < 50) {
        sid.clone();
    }
};

Robot.prototype.onScannedRobot = function(ev) {
    var sid = ev.robot;
    var enemyTank = ev.scannedRobot;
    if (enemyTank.id !== sid.parentId && enemyTank.parentId !== sid.id) {
        // Let's destroy!
        sid.fire();
        // Statisticly speaking, this should give you ~30% hit chance when your enemy
        // runs away. If you put a slightly higher number maybe you get more chances
        sid.rotateCannon(30);
    }
};
