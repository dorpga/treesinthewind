jQuery(function($, undefined) {
    var map = {
        "0,0": {
            name: "Porch",
            desc: "You are standing on a porch",
            directions: {
                north: true,
            }
        },
        "0,1": {
            name: "Mud Room",
            desc: "You are standing in the mud room",
            directions: {
                south: true,
            }
        }
    }
    
    var x = 0;
    var y = 0;
    var curmap = map[x + "," + y];
    
    $('#tty').terminal(function(command, term) {
        curmap = map[x + "," + y];
        $('#tty').terminal().set_prompt(curmap.name + ": ");
        var cmd = command.split(' ');
        switch (cmd[0]) {
            case "n":
                if (curmap.directions.north) y++;
                else term.echo("You can't go that way!");
                break;
            case "s":
                if (curmap.directions.south) y--;
                else term.echo("You can't go that way!");
                break;
            case "e":
                if (curmap.directions.east) x++;
                else term.echo("You can't go that way!");
                break;
            case "w":
                if (curmap.directions.west) x--;
                else term.echo("You can't go that way!");
                break;
            case "look":
                term.echo(curmap.desc);
                break;
            case "getxy":
                term.echo("X: " + x);
                term.echo("Y: " + y);
                break;
        }
        curmap = map[x + "," + y];
        $('#tty').terminal().set_prompt(curmap.name + ": ");
    }, {
        greetings: 'Trees in the wind\nVersion 0.2\nCopyright 2016 Carver Harrison',
        name: 'tty',
        height: 720,
        prompt: ": "
    });
});
