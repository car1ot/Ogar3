var runMaster = false;
var runGame = true;

process.argv.forEach(function (val) {
    if (val == "--master") {
        runMaster = true;
    } else if (val == "--game") {
        runGame = true;
    } else if (val == "--help") {
        console.log("Proper Usage: %s [--master] [--game]", process.argv[0]);
        console.log("    --master            Run the Agar master server.");
        console.log("    --game              Run the Agar game server.");
        console.log("    --help              Help menu.");
        console.log("");
        console.log(
            "You can use both options simultaneously to run both the master and game server."
        );
        console.log("");
    }
});

if (runMaster) {
    // Initialize the master server
    const MasterServer = require("./MasterServer");
    const master = new MasterServer(8080);
    master.start();
}

if (runGame) {
    // Initialize the game server
    const GameServer = require("./GameServer");
    const game = new GameServer(false);
    game.start();
}
