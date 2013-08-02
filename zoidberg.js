# Oscar Carballal Prego <oscar@oscarcp.com>
# License: WTFPL

function Robot(robot) {
    robot.rotateCannon(90);
}

var turns = 0;

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(10);
    robot.turn(-45);
    turns += 1;
    if (turns == 3) {
        robot.ahead(150);
        turns = 0;
    }
    if (robot.life < 50) {
        robot.clone();
    }
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var scanned = ev.scannedRobot.id;
    if (scanned != ev.robot.parentId) {
        robot.fire();
        robot.rotateCannon(25);
    }
};
